import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }

    const { name, email, message } = result.data;

    // To prevent ISP blocking issues on local networks, we'll use Web3Forms over standard HTTPS.
    if (!process.env.WEB3FORMS_KEY) {
      return NextResponse.json(
        { error: 'Server misconfiguration: WEB3FORMS_KEY is missing from .env.local' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `New Portfolio Contact from ${name}`
      })
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      throw new Error(data.message || 'Web3Forms API rejected the request');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
