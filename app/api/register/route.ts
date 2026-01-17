import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const client = await clientPromise;
    const db = client.db("natitude");

    // 1. Save to Database
    const result = await db.collection("registrations").insertOne({
      name,
      email,
      createdAt: new Date(),
      entryCode: Math.random().toString(36).substring(2, 8).toUpperCase(), // Generate random code
    });

    // 2. Send the "Golden Ticket" Email
    await resend.emails.send({
      from: 'Natitude <onboarding@resend.dev>', // Later you can use your own domain
      to: email,
      subject: 'NATITUDE: The Ritual Begins',
      html: `
        <div style="background-color: #000; color: #fff; padding: 40px; font-family: sans-serif; border: 1px solid #FF007F;">
          <h1 style="color: #FF007F; text-transform: uppercase; font-style: italic;">Welcome to the Tribe</h1>
          <p>Your spot for this Saturday is confirmed, <strong>${name}</strong>.</p>
          <p style="letter-spacing: 2px;">YOUR ENTRY CODE:</p>
          <div style="font-size: 32px; font-weight: bold; color: #FF007F; margin: 20px 0;">
            ${Math.random().toString(36).substring(2, 8).toUpperCase()}
          </div>
          <p style="font-size: 10px; color: #555;">DOORS OPEN AT 22:00. NO RE-ENTRY.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}