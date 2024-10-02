import { NextResponse } from 'next/server';
import crypto from 'crypto';

// ตัวแปรสำหรับเก็บ Room ID
let GROUP_ID = null;

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get('x-line-signature');

  // ตรวจสอบ signature
  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const hash = crypto
    .createHmac('sha256', channelSecret)
    .update(body)
    .digest('base64');

  if (hash !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  }

  const events = JSON.parse(body).events;

  for (const event of events) {
    if (event.type === 'join' && event.source.type === 'group') {
      // บอทถูกเพิ่มเข้ากลุ่ม
      GROUP_ID = event.source.groupId;
      console.log(`Bot joined group: ${GROUP_ID}`);
      // คุณอาจต้องการบันทึก GROUP_ID ลงในฐานข้อมูลหรือไฟล์คอนฟิกที่นี่
    } else if (event.type === 'message' && event.source.type === 'group') {
      // รับข้อความจากกลุ่ม
      const message = event.message.text;
      console.log(`Received group message: ${message}`);
      // จัดการกับข้อความที่ได้รับตามต้องการ
    }
  }

  return NextResponse.json({ message: 'OK' });
}

// ฟังก์ชันสำหรับส่งข้อความไปยังกลุ่ม
export async function sendGroupMessage(message) {
  if (!GROUP_ID) {
    throw new Error('Group ID not set. Make sure the bot has joined the group.');
  }

  const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message/push';
  const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

  const body = JSON.stringify({
    to: GROUP_ID,
    messages: [
      {
        type: 'text',
        text: message
      }
    ]
  });

  try {
    const response = await fetch(LINE_MESSAGING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
      },
      body: body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    console.error('Error sending message to Line group:', error);
    return { success: false, error: error.message };
  }
}

// ฟังก์ชันสำหรับส่งข้อมูลแบบฟอร์มไปยังกลุ่ม
export async function sendFormDataToGroup(name, email, tel, service) {
  const message = `New Proposal Request:
Name: ${name}
Email: ${email}
Tel: ${tel}
Interested Service: ${service}`;

  return sendGroupMessage(message);
}