'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import PickleballLogo from '@/components/PickleballLogo';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError(null);
    setSuccess(null);
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setIsLoading(false);
          return;
        }
        
        // Send signup request
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to sign up');
        }
        
        // Automatically sign in after successful signup
        await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        window.location.href = '/dashboard';
        
        // Optionally reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setIsSignUp(false);
      } else {
        // Use NextAuth signIn with credentials provider
        const result = await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          throw new Error(result.error);
        }

        setSuccess('Signed in successfully!');
        // Redirect
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 500);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Auth error:', err);
    } finally {
      setIsLoading(false);
    }
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

            {/* Error and Success Messages */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-sm">
                {success}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-neon-gradient p-4 rounded-xl font-bold text-xl text-black hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105 animate-neon-pulse disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </span>
              ) : (isSignUp ? 'Create Account' : 'Sign In')}
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