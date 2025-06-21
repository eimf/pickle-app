'use client';

import { useState } from 'react';
import { Calendar, MapPin, Trophy, Users, Clock, DollarSign, Award, CheckCircle } from 'lucide-react';
import RegisterModal from '@/components/RegisterModal';
import { Tournament } from '@/lib/types';

interface TournamentDetailsClientProps {
  tournament: Tournament;
}

export default function TournamentDetailsClient({ tournament }: TournamentDetailsClientProps) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Banner */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-glow">
              {tournament.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neon-cyan" />
                <span>{tournament.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-neon-pink" />
                <span>{tournament.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-neon-yellow" />
                <span>{tournament.level}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Info */}
            <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-neon-cyan mb-6 animate-glow">About This Tournament</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {tournament.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <DollarSign className="w-6 h-6 text-neon-green mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">${tournament.price}</div>
                  <div className="text-white/60 text-sm">Entry Fee</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Trophy className="w-6 h-6 text-neon-yellow mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">${tournament.prize.toLocaleString()}</div>
                  <div className="text-white/60 text-sm">Prize Pool</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Users className="w-6 h-6 text-neon-pink mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{tournament.participants}/{tournament.maxParticipants}</div>
                  <div className="text-white/60 text-sm">Players</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Award className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{tournament.level}</div>
                  <div className="text-white/60 text-sm">Skill Level</div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neon-pink mb-6 animate-glow">Tournament Rules</h3>
              <div className="space-y-3">
                {tournament.rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neon-yellow mb-6 animate-glow">Event Schedule</h3>
              <div className="space-y-4">
                {tournament.schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Clock className="w-5 h-5 text-neon-cyan" />
                    <div className="font-semibold text-white min-w-20">{item.time}</div>
                    <div className="text-white/80">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-neon-green mb-2">${tournament.price}</div>
                <div className="text-white/70">Entry Fee</div>
              </div>
              
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border mb-6 w-full text-center ${
                tournament.status === 'Open' 
                  ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                  : tournament.status === 'Full'
                  ? 'bg-neon-pink/20 text-neon-pink border-neon-pink/30'
                  : 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30'
              }`}>
                {tournament.status === 'Open' ? 'Registration Open' : tournament.status}
              </div>

              <button
                onClick={() => setIsRegisterModalOpen(true)}
                disabled={tournament.status !== 'Open'}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  tournament.status === 'Open' 
                    ? 'bg-neon-gradient text-black hover:shadow-neon-cyan/50 hover:scale-105 animate-neon-pulse' 
                    : 'bg-white/10 text-white/50 cursor-not-allowed'
                }`}
              >
                {tournament.status === 'Open' ? 'Register Now' : 'Registration Closed'}
              </button>
            </div>

            {/* Registered Players */}
            <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-neon-purple mb-4 animate-glow">Registered Players</h3>
              <div className="space-y-3">
                {tournament.registeredPlayers.map((player, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-medium">{player.name}</div>
                      <div className="text-white/60 text-sm">{player.level}</div>
                    </div>
                  </div>
                ))}
                {tournament.participants > tournament.registeredPlayers.length && (
                  <div className="text-center text-white/60 text-sm py-2">
                    +{tournament.participants - tournament.registeredPlayers.length} more players
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          tournamentName={tournament.name}
          price={tournament.price}
        />
      </div>
    </div>
  );
}