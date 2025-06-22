import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const tournaments = await prisma.tournament.findMany({
      orderBy: {
        startDate: 'asc',
      },
    });
    
    return NextResponse.json(tournaments);
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tournaments' },
      { status: 500 }
    );
  }
}
