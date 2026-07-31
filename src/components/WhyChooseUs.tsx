import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Lock, MapPin, Gift, Star } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your food delivered quickly and piping hot with our dedicated fleet.',
      badge: '25 Min Avg'
    },
    {
      icon: ShieldCheck,
      title: 'Fresh & Quality Food',
      description: 'Enjoy delicious meals prepared with strict hygiene and premium ingredients.',
      badge: '100% Guaranteed'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Safe and seamless payment options including UPI, Cards, Wallets, and COD.',
      badge: 'SSL Encrypted'
    },
    {
      icon: MapPin,
      title: 'Live Order Tracking',
      description: 'Track your delivery partner live on the map from restaurant to your doorstep.',
      badge: 'Realtime GPS'
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Unlock daily promo codes, 30% OFF discounts, and cashbacks on every order.',
      badge: 'Daily Savings'
    },
    {
      icon: Star,
      title: 'Trusted Restaurants',
      description: 'Partnered only with top-rated, hygiene-inspected restaurants near you.',
      badge: '4.5+ Rated'
    }
  ];

  return (
    <section className="py-20 bg-[#24170F] text-white relative overflow-hidden">
      
      {/* Subtle Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FF5A00]">Our Promise</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
            Why Choose <span className="text-[#FF5A00]">Food Area</span>?
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            We are committed to giving you the best food ordering experience every single time.
          </p>
        </div>

        {/* Features 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#362419]/60 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#FF5A00]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5A00]/20 text-[#FF5A00] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] bg-white/10 text-gray-300 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF5A00] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
