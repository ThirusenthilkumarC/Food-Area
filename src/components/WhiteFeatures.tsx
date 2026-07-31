import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Zap } from 'lucide-react';

export const WhiteFeatures: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Fresh Ingredients',
      description: 'Daily ocean-fresh Norwegian salmon, bluefin tuna, and organic sushi rice sourced directly from certified sustainable farms.',
      badge: '100% Organic'
    },
    {
      icon: Award,
      title: 'Master Chefs',
      description: 'Prepared by Japanese master chefs with over 15 years of traditional sushi rolling and knife precision techniques.',
      badge: 'Michelin Standard'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Delivered in temperature-controlled insulated packaging to ensure your sushi arrives cool, fresh, and pristine.',
      badge: '25 Min Speed'
    }
  ];

  return (
    <section className="py-32 md:py-40 bg-[#FFFFFF] text-[#24170F] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centered Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-black text-[#FF6B35]">Why Choose Food Area</span>
          <h2 className="text-4xl sm:text-6xl font-serif-editorial font-extrabold text-[#24170F] tracking-tight mt-3">
            The Pinnacle of Culinary Craft
          </h2>
          <p className="text-base text-gray-600 font-light mt-3 leading-relaxed">
            We combine ancient Japanese sushi traditions with modern white-glove delivery precision.
          </p>
        </div>

        {/* 3 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF0E6] text-[#FF6B35] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={30} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest bg-gray-100 text-gray-600 px-3.5 py-1.5 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif-editorial font-extrabold text-[#24170F] mb-4 group-hover:text-[#FF6B35] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100 flex items-center text-xs font-black text-[#FF6B35]">
                  <span>Discover Excellence</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
