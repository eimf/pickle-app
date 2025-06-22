import TournamentDetailsClient from '@/components/TournamentDetailsClient';
import prisma from '@/lib/prisma';
import { adaptTournamentToUI, TournamentWithRelations } from '@/lib/adapters';

export const dynamic = 'force-dynamic';

interface TournamentDetailsProps {
  params: {
    id: string;
  };
}

async function getTournament(id: string): Promise<TournamentWithRelations | null> {
  try {
    // Use string ID directly (UUID format from Prisma schema)
    const tournament = await prisma.tournament.findUnique({
      where: {
        id: id
      },
      include: {
        matches: {
          include: {
            player1: true,
            player2: true
          },
          orderBy: {
            scheduledAt: 'asc'
          }
        }
      }
    });
    return tournament;
  } catch (error) {
    console.error('Error fetching tournament:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const tournaments = await prisma.tournament.findMany();
  return tournaments.map((tournament) => ({
    id: String(tournament.id),
  }));
}

export default async function TournamentDetails({ params }: TournamentDetailsProps) {
  const dbTournament = await getTournament(params.id);
  
  if (!dbTournament) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tournament Not Found</h1>
          <p className="text-white/70">The tournament you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Convert database model to UI model
  const uiTournament = adaptTournamentToUI(dbTournament);

  return <TournamentDetailsClient tournament={uiTournament} />;
}