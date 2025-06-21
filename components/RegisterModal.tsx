'use client';

import { useState } from 'react';
import { X, CreditCard, User, Mail, Phone } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournamentName: string;
  price: number;
}

export default function RegisterModal({ isOpen, onClose, tournamentName, price }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Beginner'
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl shadow-glass overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
          
          <h2 className="text-2xl font-bold text-neon-cyan animate-glow">
            Register for Tournament
          </h2>
          <p className="text-white/70 mt-1">{tournamentName}</p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-neon-green" />
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium flex items-center gap-2">
              <Mail className="w-4 h-4 text-neon-pink" />
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/50 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium flex items-center gap-2">
              <Phone className="w-4 h-4 text-neon-yellow" />
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow/50 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/80 text-sm font-medium">
              Experience Level
            </label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Professional">Professional</option>
            </select>
          </div>

          {/* Price display */}
          <div className="bg-neon-green/10 border border-neon-green/20 rounded-xl p-4 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Entry Fee:</span>
              <span className="text-2xl font-bold text-neon-green">${price}</span>
            </div>
          </div>

          {/* Register button */}
          <button className="w-full bg-neon-gradient p-4 rounded-xl font-bold text-black hover:shadow-neon-cyan transition-all duration-300 hover:scale-105 animate-neon-pulse flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            Register & Pay ${price}
          </button>
        </div>
      </div>
    </div>
  );
}