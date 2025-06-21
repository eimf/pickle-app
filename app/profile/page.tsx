'use client';

import { useState } from 'react';
import { User, Trophy, Calendar, Award, TrendingUp, Target, Zap } from 'lucide-react';

export default function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center max-w-md">
          <User className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Sign In Required</h1>
          <p className="text-white/70 mb-8">Please sign in to view your profile and tournament history.</p>
          <button
            onClick={() => setIsSignedIn(true)}
            className="bg-neon-gradient px-8 py-3 rounded-2xl font-bold text-black hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const userStats = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    level: 'Advanced',
    tournamentsPlayed: 12,
    wins: 8,
    losses: 4,
    winRate: 67,
    totalPrizeMoney: 2500,
    rank: 15,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300'
  };

  const recentTournaments = [
    { name: 'Summer Championship Series', date: 'June 15, 2024', position: '2nd', prize: 1500, status: 'Completed' },
    { name: 'Neon Nights Tournament', date: 'July 8, 2024', position: '1st', prize: 800, status: 'Completed' },
    { name: 'Weekend Warriors Classic', date: 'August 19, 2024', position: '-', prize: 0, status: 'Registered' },
    { name: 'Pro League Showdown', date: 'August 5, 2024', position: '-', prize: 0, status: 'Registered' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                src={userStats.avatar}
                alt={userStats.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-neon-cyan/50"
              />
              <div className="absolute -bottom-2 -right-2 bg-neon-green text-black px-3 py-1 rounded-full text-sm font-bold">
                #{userStats.rank}
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2 animate-glow">{userStats.name}</h1>
              <p className="text-neon-cyan text-lg mb-2">{userStats.email}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="bg-neon-purple/20 text-neon-purple px-4 py-2 rounded-full border border-neon-purple/30 font-semibold">
                  {userStats.level} Player
                </span>
                <span className="bg-neon-yellow/20 text-neon-yellow px-4 py-2 rounded-full border border-neon-yellow/30 font-semibold">
                  {userStats.winRate}% Win Rate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:shadow-neon-cyan/50 transition-all duration-300">
            <Trophy className="w-8 h-8 text-neon-yellow mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{userStats.tournamentsPlayed}</div>
            <div className="text-white/60">Tournaments Played</div>
          </div>
          
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:shadow-neon-green/50 transition-all duration-300">
            <Target className="w-8 h-8 text-neon-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{userStats.wins}</div>
            <div className="text-white/60">Wins</div>
          </div>
          
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:shadow-neon-pink/50 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-neon-pink mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">${userStats.totalPrizeMoney}</div>
            <div className="text-white/60">Prize Money</div>
          </div>
          
          <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:shadow-neon-purple/50 transition-all duration-300">
            <Zap className="w-8 h-8 text-neon-purple mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">#{userStats.rank}</div>
            <div className="text-white/60">Global Rank</div>
          </div>
        </div>

        {/* Tournament History */}
        <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-neon-cyan mb-8 animate-glow flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            Tournament History
          </h2>
          
          <div className="space-y-4">
            {recentTournaments.map((tournament, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                    <div className="flex items-center gap-4 text-white/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span>{tournament.date}</span>
                      </div>
                      {tournament.position !== '-' && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-neon-yellow" />
                          <span>{tournament.position} Place</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {tournament.prize > 0 && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-neon-green">${tournament.prize}</div>
                        <div className="text-white/60 text-sm">Prize Won</div>
                      </div>
                    )}
                    
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                      tournament.status === 'Completed'
                        ? tournament.position === '1st'
                          ? 'bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30'
                          : 'bg-neon-green/20 text-neon-green border-neon-green/30'
                        : 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-neon-gradient px-8 py-4 rounded-2xl font-bold text-black hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-neon-pulse">
            Find New Tournaments
          </button>
          <button className="bg-glass-gradient backdrop-blur-lg border border-white/20 px-8 py-4 rounded-2xl font-bold text-white hover:shadow-neon-pink/50 transition-all duration-300 hover:scale-105">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}