import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const players = await prisma.player.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        matchesAsPlayer1: true,
        matchesAsPlayer2: true,
      },
    });
    
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    return NextResponse.json(
      { error: 'Failed to fetch players' },
      { status: 500 }
    );
  }
}
