'use client';

import { Calendar, MapPin, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import { Tournament } from '@/lib/types';

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  return (
    <Link href={`/tournament/${tournament.id}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-glass-gradient backdrop-blur-lg border border-white/20 shadow-glass hover:shadow-neon-cyan/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Tournament Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Prize indicator */}
          <div className="absolute top-4 right-4 bg-neon-green/20 backdrop-blur-sm rounded-full px-3 py-1 border border-neon-green/30">
            <span className="text-neon-green text-sm font-bold">
              ${tournament.prize.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 group-hover:animate-glow">
            {tournament.name}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/70 group-hover:text-neon-green transition-colors duration-300">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{tournament.date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-white/70 group-hover:text-neon-pink transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{tournament.venue}</span>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-white/70">
                <Users className="w-4 h-4" />
                <span className="text-sm">{tournament.participants} players</span>
              </div>
              
              <div className="flex items-center gap-2 text-neon-yellow">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold">{tournament.level}</span>
              </div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="pt-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
              tournament.status === 'Open' 
                ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                : tournament.status === 'Full'
                ? 'bg-neon-pink/20 text-neon-pink border-neon-pink/30'
                : 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30'
            }`}>
              {tournament.status}
            </span>
          </div>
        </div>

        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-cyan/50 transition-all duration-500" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      </div>
    </Link>
  );
}