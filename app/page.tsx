import TournamentCard from "@/components/TournamentCard";
import { adaptTournamentToUI } from "@/lib/adapters";
import prisma from "@/lib/prisma";
import { Zap, Trophy, Users, Calendar } from "lucide-react";

// Make homepage dynamic to prevent caching
export const dynamic = 'force-dynamic';

async function getHomepageTournaments() {
  try {
    const tournaments = await prisma.tournament.findMany({
      include: {
        matches: {
          include: {
            player1: true,
            player2: true,
          },
        },
      },
      orderBy: {
        startDate: 'asc',
      },
    });
    
    return tournaments.map(tournament => adaptTournamentToUI(tournament));
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    return [];
  }
}

export default async function Home() {
  // Fetch tournaments from the database
  const tournaments = await getHomepageTournaments();
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-10 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-bold bg-neon-gradient bg-clip-text text-transparent animate-glow mb-6">
                            TOUR
                            <br />
                            SELKIRK MEXICO
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Experience the thrill of competitive pickleball in
                            the most visually stunning tournaments platform ever
                            created.
                        </p>

                        {/* Stats */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            <div className="bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:shadow-neon-cyan/50 transition-all duration-300">
                                <Trophy className="w-8 h-8 text-neon-yellow mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">
                                    $50K+
                                </div>
                                <div className="text-white/60 text-sm">
                                    Total Prizes
                                </div>
                            </div>
                            <div className="bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:shadow-neon-green/50 transition-all duration-300">
                                <Users className="w-8 h-8 text-neon-green mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">
                                    500+
                                </div>
                                <div className="text-white/60 text-sm">
                                    Active Players
                                </div>
                            </div>
                            <div className="bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:shadow-neon-pink/50 transition-all duration-300">
                                <Calendar className="w-8 h-8 text-neon-pink mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">
                                    24
                                </div>
                                <div className="text-white/60 text-sm">
                                    Events/Month
                                </div>
                            </div>
                            <div className="bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:shadow-neon-purple/50 transition-all duration-300">
                                <Zap className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                                <div className="text-2xl font-bold text-white">
                                    98%
                                </div>
                                <div className="text-white/60 text-sm">
                                    Satisfaction
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Tournaments Section */}
            <section className="pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            <span className="text-neon-cyan animate-glow">
                                Upcoming
                            </span>{" "}
                            <span className="text-neon-pink animate-glow">
                                Tournaments
                            </span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Join the most electrifying pickleball competitions
                            with players from around the world
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tournaments.map((tournament) => (
                            <TournamentCard
                                key={tournament.id}
                                tournament={tournament}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Ready to{" "}
                            <span className="text-neon-cyan animate-glow">
                                Compete
                            </span>
                            ?
                        </h3>
                        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                            Don't miss out on the most exciting pickleball
                            tournaments. Register now and be part of the elite
                            competition.
                        </p>
                        <button className="bg-neon-gradient px-8 py-4 rounded-2xl font-bold text-xl text-black hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-neon-pulse">
                            View All Tournaments
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
