'use client';

import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import PickleballLogo from '@/components/PickleballLogo';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in/up logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <PickleballLogo className="w-20 h-20 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl font-bold bg-neon-gradient bg-clip-text text-transparent animate-glow mb-2">
            {isSignUp ? 'Join the Elite' : 'Welcome Back'}
          </h1>
          <p className="text-white/70 text-lg">
            {isSignUp 
              ? 'Create your account and start competing' 
              : 'Sign in to your tournament account'
            }
          </p>
        </div>

        {/* Form */}
        <div className="bg-glass-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-glass">
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-neon-green" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-cyan" />
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                <Lock className="w-4 h-4 text-neon-pink" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink/50 transition-all pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4 text-neon-purple" />
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/50 transition-all"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10 text-neon-cyan focus:ring-neon-cyan/50" />
                  <span className="text-white/70 text-sm">Remember me</span>
                </label>
                <button type="button" className="text-neon-cyan text-sm hover:animate-glow transition-all">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-neon-gradient p-4 rounded-xl font-bold text-xl text-black hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-neon-pulse"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/70">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-neon-cyan ml-2 hover:animate-glow transition-all font-semibold"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Social Login Options */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-glass-gradient text-white/70">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                <FaGoogle className="w-5 h-5" />
                <span className="text-white/80 text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                <FaFacebook className="w-5 h-5 text-blue-600" />
                <span className="text-white/80 text-sm">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}