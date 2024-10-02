import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, tel, service } = await req.json()

  const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message/multicast'
  const LINE_USER_ID = process.env.LINE_USER_ID.split(',').map(id => id.trim())
  const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN

  const body = JSON.stringify({
    to: LINE_USER_ID,
    messages: [
      {
        type: 'text',
        text: `New Proposal Request:\nName: ${name}\nEmail: ${email}\nTel: ${tel}\nInterested Service: ${service}`
      }
    ]
  })

  try {
    const response = await fetch(LINE_MESSAGING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
      },
      body: body
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error sending message to Line:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}