import React from 'react';
import { motion } from 'framer-motion';

export const AboutSushi: React.FC = () => {
  return (
    <section className="py-32 md:py-40 bg-[#FFFFFF] text-[#24170F] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-black text-[#FF6B35]">Our Heritage</span>
          <h2 className="text-4xl sm:text-6xl font-serif-editorial font-extrabold text-[#24170F] tracking-tight mt-3">
            The Philosophy of Perfection
          </h2>
          <p className="text-base text-gray-600 font-light mt-3">
            Every piece of sushi is a harmony of knife precision, rice temperature, and fresh seafood.
          </p>
        </div>

        {/* Editorial Layout: 3 Cards surrounding 1 Large Center Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-[#FFF8F2] p-8 rounded-[32px] border border-[#FF6B35]/20 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center font-black text-base">
                01
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#24170F]">300-Year Heritage</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Hand-rolled using aged Akazu red rice vinegar and Koshihikari rice seasoned according to ancient Edomae traditions.
              </p>
            </div>

            <div className="bg-[#FFF8F2] p-8 rounded-[32px] border border-[#FF6B35]/20 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#24170F] text-white flex items-center justify-center font-black text-base">
                02
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#24170F]">Sustainable Ocean Catch</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                100% wild-caught Norwegian salmon, Hamachi yellowtail, and Bluefin otoro sourced exclusively from certified fisheries.
              </p>
            </div>
          </motion.div>

          {/* Center Large Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[44px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80"
                alt="Signature Sushi Roll Platter"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="text-xs uppercase font-black text-[#FF6B35] tracking-widest">Master Chef Creation</span>
                  <h4 className="text-xl font-serif-editorial font-bold mt-1">Omakase Nigiri Selection</h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#FFF8F2] p-8 rounded-[32px] border border-[#FF6B35]/20 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#45A735] text-white flex items-center justify-center font-black text-base">
                03
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#24170F]">Thermal Precision Box</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Delivered in custom insulated wooden bento boxes equipped with food-grade cooling packs to maintain perfect 4°C serving temperature.
              </p>
              
              <div className="pt-6 border-t border-[#FF6B35]/20 flex items-center justify-between text-xs font-black text-[#24170F]">
                <span>100% Quality Guaranteed</span>
                <span className="text-[#FF6B35]">★ 4.9 Rating</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
