import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const client = await clientPromise;
    const db = client.db("natitude");

    // Generate a unique "Tribe Code"
    const tribeCode = `NT-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // 1. SAVE TO DATABASE
    await db.collection("registrations").insertOne({
      name,
      email,
      tribeCode,
      createdAt: new Date(),
    });

    // 2. SEND THE WELCOME EMAIL
    await resend.emails.send({
      from: 'Natitude <onboarding@resend.dev>', // Change this once you verify your domain
      to: email,
      subject: 'NATITUDE: Access Granted',
      html: `
        <div style="background-color: #000; color: #fff; padding: 50px; font-family: 'Helvetica', sans-serif; text-align: center; border: 2px solid #FF007F;">
          <h1 style="color: #FF007F; font-style: italic; letter-spacing: 5px;">NATITUDE</h1>
          <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 12px;">You have been added to the Tribe.</p>
          <hr style="border: 0; border-top: 1px solid #222; margin: 30px 0;" />
          <p style="color: #555; font-size: 10px; text-transform: uppercase;">Your Private Entry Code</p>
          <h2 style="font-size: 40px; margin: 10px 0; color: #fff;">${tribeCode}</h2>
          <p style="color: #FF007F; font-size: 12px; margin-top: 40px;">THE RITUAL BEGINS THIS SATURDAY AT 22:00.</p>
          <p style="color: #444; font-size: 9px; margin-top: 20px;">NO PHOTOGRAPHY. NO RE-ENTRY. RESPECT THE VIBE.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'System Error' }, { status: 500 });
  }
}