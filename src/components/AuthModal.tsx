import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';
import { Logo } from './Logo';

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setIsAuthOpen, loginUser } = useApp();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      loginUser(email.trim(), isSignUp ? name || 'Rahul Sharma' : 'Rahul Sharma');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-luxury bg-[#121212] rounded-[36px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden text-white"
      >
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block mb-3">
            <Logo size="md" />
          </div>
          <h3 className="text-2xl font-serif-editorial font-extrabold text-white">
            {isSignUp ? 'Join Food Area VIP Circle' : 'Welcome Back to Food Area'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {isSignUp ? 'Register to unlock exclusive 50% OFF welcome rewards!' : 'Log in to manage orders & claim privileges.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {isSignUp && (
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                defaultValue="password123"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            className="rounded-2xl shadow-glow-orange mt-2"
            icon={<ArrowRight size={18} />}
          >
            {isSignUp ? 'Create Account' : 'Sign In Now'}
          </Button>
        </form>

        <div className="mt-6 text-center text-xs font-semibold text-gray-400 border-t border-white/10 pt-4">
          <span>{isSignUp ? 'Already a member?' : "Not a member yet?"}</span>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#FF6B35] font-bold ml-1 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Register Free'}
          </button>
        </div>

      </motion.div>

    </div>
  );
};
