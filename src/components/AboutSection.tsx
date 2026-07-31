import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Sparkles, Utensils } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Media Mosaic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden glass-luxury border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Dining Interior"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-44 rounded-3xl overflow-hidden glass-luxury border border-white/10 p-6 flex flex-col justify-center bg-gradient-to-br from-[#FF6B35]/20 to-[#161616]">
                <Award size={32} className="text-[#FF6B35] mb-2" />
                <h4 className="text-2xl font-serif-editorial font-bold text-white">3 Michelin Stars</h4>
                <p className="text-xs text-gray-400">Awarded for culinary excellence & innovation.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="h-44 rounded-3xl overflow-hidden glass-luxury border border-white/10 p-6 flex flex-col justify-center bg-[#161616]">
                <span className="text-4xl font-serif-editorial font-bold text-white">15+</span>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Master Chefs</p>
                <p className="text-[11px] text-gray-500">Trained in Tokyo, Paris & New Delhi.</p>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden glass-luxury border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Executive Chef Plating"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Story */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">The Culinary Story</span>
            
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-white tracking-tight leading-tight">
              Where Gastronomy <br />
              Meets Artistry.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              At <strong className="text-white font-semibold">Food Area</strong>, dining is an immersive experience. Founded by culinary visionaries, we bring together fresh seasonal ingredients, traditional heritage recipes, and contemporary gastronomy delivered right to your home.
            </p>

            <blockquote className="p-6 rounded-2xl glass-luxury border-l-4 border-l-[#FF6B35] italic text-gray-300 text-xs sm:text-sm font-serif-editorial leading-relaxed">
              "Food is not merely sustenance; it is emotion, culture, and memory served on a plate."
              <footer className="not-italic text-xs font-sans font-bold text-[#FF6B35] mt-2">— Executive Chef Alexander Roy</footer>
            </blockquote>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck size={20} className="text-[#FF6B35]" />
                <div>
                  <h5 className="text-xs font-bold text-white">Zero Preservatives</h5>
                  <p className="text-[10px] text-gray-400">100% Organic Sourcing</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                <Utensils size={20} className="text-[#45A735]" />
                <div>
                  <h5 className="text-xs font-bold text-white">White-Glove Delivery</h5>
                  <p className="text-[10px] text-gray-400">Insulated Temperature Tech</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
