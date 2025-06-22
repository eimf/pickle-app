import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = params;
  
  try {
    // Use string ID directly (UUID format)
    const tournament = await prisma.tournament.findUnique({
      where: {
        id,
      },
      include: {
        matches: {
          include: {
            player1: true,
            player2: true,
          },
          orderBy: {
            scheduledAt: 'asc',
          },
        },
      },
    });
    
    if (!tournament) {
      return NextResponse.json(
        { error: 'Tournament not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(tournament);
  } catch (error) {
    console.error(`Error fetching tournament ${id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch tournament details' },
      { status: 500 }
    );
  }
}
