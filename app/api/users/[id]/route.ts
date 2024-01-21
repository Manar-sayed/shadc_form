import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return new NextResponse('No user with ID found', { status: 404 });
  }

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const user = await db.user.delete({
    where: {
      id,
    },
  });

  if (!user) {
    return new NextResponse('No user with ID found', { status: 404 });
  }

  return NextResponse.json(user);
}
