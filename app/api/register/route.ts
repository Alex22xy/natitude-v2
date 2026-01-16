import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const client = await clientPromise;
    const db = client.db("natitude"); // This is your database name

    // Insert the name and the date they joined
    const result = await db.collection("registrations").insertOne({
      name,
      joinedAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}