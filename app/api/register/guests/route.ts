import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("natitude");
    const guests = await db.collection("registrations").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(guests);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}