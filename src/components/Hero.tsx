import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Star, Flame, ArrowRight, Award, ChefHat } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const Hero: React.FC = () => {
  const { setCurrentView, setDeliveryLocation, deliveryLocation } = useApp();
  const [inputLocation, setInputLocation] = useState(deliveryLocation);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputLocation.trim()) {
      setDeliveryLocation(inputLocation.trim());
      setCurrentView('restaurants');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[100vh] pt-32 pb-24 md:pt-36 md:pb-32 flex items-center overflow-hidden text-white bg-[#0D0D0D]"
      style={{
        background: 'radial-gradient(circle at top right, #1A1A1A 0%, #111111 45%, #090909 100%)'
      }}
    >
      {/* Subtle Noise / Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 right-12 w-[650px] h-[650px] bg-gradient-to-br from-[#FF6B35]/25 to-[#FF5A00]/5 rounded-full blur-[160px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#FF6B35]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-luxury border border-[#FF6B35]/40 text-xs font-black text-[#FF6B35] tracking-widest uppercase shadow-glow-orange">
              <Award size={18} className="text-[#FF6B35]" />
              <span>Michelin Standard • Express Delivery</span>
            </div>

            {/* 72-96px Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-serif-editorial font-extrabold text-white tracking-tight leading-[1.04]">
              Haute Cuisine, <br />
              Delivered to Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A00] to-[#FF5A00] text-glow-orange">
                Sanctuary.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
              Discover culinary masterpieces crafted by master chefs. Indulge in artisanal sushi, wagyu burgers, and royal biryanis delivered with white-glove precision.
            </p>

            {/* Location Search Bar */}
            <form 
              onSubmit={handleSearchSubmit} 
              className="glass-luxury p-3 rounded-full border border-white/20 flex flex-col sm:flex-row gap-3 max-w-2xl shadow-luxury"
            >
              <div className="flex-1 flex items-center gap-3 px-5 py-2 sm:py-0">
                <MapPin className="text-[#FF6B35] shrink-0" size={22} />
                <input
                  type="text"
                  value={inputLocation}
                  onChange={(e) => setInputLocation(e.target.value)}
                  placeholder="Enter your delivery location..."
                  className="w-full bg-transparent text-white font-medium text-base outline-none placeholder:text-gray-500"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                className="rounded-full shadow-glow-orange px-8 py-4 text-base font-black"
                icon={<Search size={20} />}
              >
                Find Food
              </Button>
            </form>

            {/* Two Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setCurrentView('restaurants');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-9 py-4 text-base font-black"
                icon={<ArrowRight size={20} />}
              >
                Explore Menu
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={() => {
                  setCurrentView('restaurants');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-9 py-4 text-base font-bold"
                icon={<ChefHat size={20} />}
              >
                Chef's Table
              </Button>
            </div>

            {/* Ticker Statistics */}
            <div className="pt-8 flex flex-wrap items-center gap-10 text-xs font-extrabold uppercase tracking-widest text-gray-400 border-t border-white/10">
              <div>
                <span className="block text-3xl font-serif-editorial font-bold text-white">4.9 ★</span>
                <span>Customer Rating</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="block text-3xl font-serif-editorial font-bold text-[#FF6B35]">25 MIN</span>
                <span>Speed Guarantee</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="block text-3xl font-serif-editorial font-bold text-white">100K+</span>
                <span>Happy Diners</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Orange Aura */}
            <div className="absolute w-[450px] h-[450px] sm:w-[580px] sm:h-[580px] bg-gradient-to-br from-[#FF6B35] to-[#FF5A00] rounded-full blur-[120px] opacity-30 -z-10 animate-pulse" />

            {/* Image Card */}
            <div className="relative w-full max-w-[620px] aspect-[4/5] rounded-[36px] overflow-hidden border-2 border-white/20 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
                alt="Artisanal Salmon Sushi Showcase"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF6B35]">Signature Dish</span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-extrabold mt-1">Norwegian Salmon & Truffle Roll</h3>
                <p className="text-xs text-gray-300 font-light mt-1">Infused with black truffle oil & avocado</p>
              </div>
            </div>

            {/* Floating Card 1: Delivery */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 sm:top-6 sm:-left-12 glass-luxury p-4 sm:p-5 rounded-3xl border border-white/20 shadow-luxury flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center font-bold">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Delivery</p>
                <p className="text-sm font-black text-white">25 Min Express ⚡</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Quality */}
            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 glass-luxury p-4 sm:p-5 rounded-3xl border border-white/20 shadow-luxury flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#45A735]/20 text-[#45A735] flex items-center justify-center font-bold">
                <Flame size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quality</p>
                <p className="text-sm font-black text-white">Steaming Fresh 🔥</p>
              </div>
            </motion.div>

            {/* Floating Card 3: Awards */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-10 glass-luxury p-4 sm:p-5 rounded-3xl border border-white/20 shadow-luxury flex items-center gap-4 z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Star size={22} className="fill-current" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Awards</p>
                <p className="text-sm font-black text-white">4.9 ★ (10k+ Reviews)</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
