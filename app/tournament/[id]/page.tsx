import { tournaments } from '@/lib/mockData';
import TournamentDetailsClient from '@/components/TournamentDetailsClient';

interface TournamentDetailsProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return tournaments.map((tournament) => ({
    id: tournament.id,
  }));
}

export default function TournamentDetails({ params }: TournamentDetailsProps) {
  const tournament = tournaments.find(t => t.id === params.id);
  
  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tournament Not Found</h1>
          <p className="text-white/70">The tournament you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <TournamentDetailsClient tournament={tournament} />;
}