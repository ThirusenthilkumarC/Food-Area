import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, Copy, Check, Flame } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const SpecialOffer: React.FC = () => {
  const { applyCoupon, setCurrentView, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 14, seconds: 35 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('FOOD30');
    setCopied(true);
    showToast('Promo code FOOD30 copied!', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClaimOffer = () => {
    applyCoupon('FOOD30');
    setCurrentView('restaurants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-[#161616] via-[#1E1E1E] to-[#161616] text-white p-8 sm:p-14 shadow-luxury border border-white/10">
          
          {/* Subtle Ambient Glowing Orb */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6B35] text-white text-xs font-black uppercase tracking-wider">
                <Flame size={14} />
                <span>EXCLUSIVE OFFER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold tracking-tight leading-tight">
                Craving More? <br />
                Enjoy <span className="text-[#FF6B35] text-glow-orange">30% OFF</span> Your Order
              </h2>

              <p className="text-gray-300 text-sm sm:text-base font-light max-w-lg leading-relaxed">
                Order your favorite gourmet meals today and unlock exclusive Food Area privileges delivered to your doorstep.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                
                {/* Coupon Code Pill */}
                <div className="flex items-center glass-luxury border border-white/20 rounded-2xl p-2.5 px-4 gap-3">
                  <Tag className="text-[#FF6B35]" size={20} />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Promo Code</p>
                    <p className="text-base font-black tracking-widest text-white">FOOD30</p>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="ml-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-xs font-bold flex items-center gap-1"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Countdown Timer */}
                <div className="flex items-center gap-2.5 glass-luxury border border-white/10 rounded-2xl p-2.5 px-4">
                  <Clock className="text-amber-400" size={18} />
                  <div className="text-xs font-bold text-gray-300">
                    <span className="text-white text-sm font-black tracking-widest">
                      {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="block text-[9px] text-gray-400 uppercase tracking-widest">Offer Ends Soon</span>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <Button variant="primary" size="lg" onClick={handleClaimOffer}>
                  Claim Offer Now
                </Button>
              </div>

            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
                  alt="Special Offer Gourmet Pizza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="glass-luxury p-3.5 rounded-2xl text-white w-full border border-white/15">
                    <p className="text-xs font-black uppercase text-[#FF6B35]">Save Up to ₹150</p>
                    <p className="text-xs font-bold text-gray-300 mt-0.5">Applicable on orders above ₹299</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
