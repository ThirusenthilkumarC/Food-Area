import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './UIElements';

export const AppPromotion: React.FC = () => {
  return (
    <section className="py-16 bg-[#FFF8F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FFF0E6] via-white to-[#FFF8F2] rounded-3xl p-8 sm:p-12 border border-[#FF5A00]/20 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left copy & store buttons */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF5A00]">Mobile App</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24170F] tracking-tight">
              Food Area in Your Pocket
            </h2>

            <p className="text-gray-600 text-sm sm:text-base max-w-lg leading-relaxed">
              Order your favorite food anytime, anywhere with the Food Area mobile experience. Track live orders, get instant push notifications, and enjoy app-exclusive discount vouchers.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#24170F] pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#45A735]" size={16} />
                <span>Real-time GPS Order Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#45A735]" size={16} />
                <span>1-Tap Instant Reordering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#45A735]" size={16} />
                <span>App-Only Discount Coupons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#45A735]" size={16} />
                <span>Instant Refund Guarantee</span>
              </div>
            </div>

            {/* App Store / Google Play Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              
              {/* App Store Button */}
              <button 
                onClick={() => alert('Food Area iOS App coming soon to App Store!')}
                className="flex items-center gap-3 bg-[#24170F] text-white px-5 py-3 rounded-2xl hover:bg-[#362419] transition-all shadow-md active:scale-95"
              >
                <Smartphone size={24} className="text-[#FF5A00]" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Download on the</p>
                  <p className="text-sm font-extrabold">App Store</p>
                </div>
              </button>

              {/* Google Play Button */}
              <button 
                onClick={() => alert('Food Area Android App coming soon to Google Play!')}
                className="flex items-center gap-3 bg-[#24170F] text-white px-5 py-3 rounded-2xl hover:bg-[#362419] transition-all shadow-md active:scale-95"
              >
                <Download size={24} className="text-[#45A735]" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">GET IT ON</p>
                  <p className="text-sm font-extrabold">Google Play</p>
                </div>
              </button>

            </div>

          </div>

          {/* Right Mobile Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-64 sm:w-72 bg-[#24170F] rounded-[40px] p-3 shadow-2xl border-4 border-gray-800"
            >
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-gray-800 rounded-full mx-auto mb-3" />

              {/* Mock App Screen */}
              <div className="bg-[#FFF8F2] rounded-[30px] p-4 text-[#24170F] space-y-3 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs text-[#FF5A00]">Food Area App</span>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">LIVE TRACKING</span>
                </div>

                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5A00] flex items-center justify-center font-bold text-xs">
                    🛵
                  </div>
                  <div>
                    <p className="text-xs font-bold">Driver is 5 mins away!</p>
                    <p className="text-[10px] text-gray-500">Hyderabadi Chicken Biryani</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden h-32 relative">
                  <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" alt="Biryani" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 p-2 flex flex-col justify-end text-white text-[10px] font-bold">
                    <span>Order #FA-893201</span>
                    <span className="text-amber-400">Arriving by 7:40 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
