import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get('x-line-signature');

  // ตรวจสอบ signature เพื่อยืนยันว่าข้อมูลมาจาก Line จริง
  const channelSecret = process.env.LINE_CHANNEL_SECRET; // ต้องตั้งค่าใน .env.local
  const hash = crypto.createHmac('sha256', channelSecret)
    .update(body)
    .digest('base64');
  
  if (hash !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  }

  const events = JSON.parse(body).events;
  
  for (const event of events) {
    if (event.type === 'follow') {
      // เมื่อมีคนเพิ่ม Line OA เป็นเพื่อน
      const userId = event.source.userId;
      console.log(`New follower: ${userId}`);
      // ทำการบันทึก userId หรือส่งข้อความต้อนรับได้ที่นี่
    } else if (event.type === 'message') {
      // เมื่อมีข้อความเข้ามา
      const userId = event.source.userId;
      const message = event.message.text;
      console.log(`Received message from ${userId}: ${message}`);
      // ทำการประมวลผลข้อความหรือตอบกลับได้ที่นี่
    }
    // สามารถเพิ่มการจัดการ event ประเภทอื่นๆ ได้ตามต้องการ
  }

  return NextResponse.json({ message: 'OK' });
}