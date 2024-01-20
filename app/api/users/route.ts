import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await db.user.findMany({});
    const responseBody = JSON.stringify(users);

    return new NextResponse(responseBody, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(null, { status: 500 });
  }
}
