import React from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge } from './UIElements';
import { MOCK_FOOD_ITEMS } from '../data/mockData';

export const ChefRecommendation: React.FC = () => {
  const { openCustomizationModal, addToCart, toggleWishlist, wishlistIds } = useApp();
  
  // Spotlight dish: Hyderabadi Chicken Biryani / Salmon Sushi
  const spotlightItem = MOCK_FOOD_ITEMS[1];
  const isFav = wishlistIds.includes(spotlightItem.id);

  const handleOrderSpotlight = () => {
    if (spotlightItem.customizationGroups?.length) {
      openCustomizationModal(spotlightItem);
    } else {
      addToCart(spotlightItem);
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Chef's Speciality</span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white tracking-tight mt-2">
            Chef's Recommendation
          </h2>
          <p className="text-sm text-gray-400 font-light mt-1">
            An extraordinary culinary tasting creation handpicked by our Master Chef this season.
          </p>
        </div>

        {/* Spotlight Featured Showcase Card */}
        <div className="glass-luxury rounded-[36px] overflow-hidden border border-[#FF6B35]/30 p-6 sm:p-10 shadow-luxury relative">
          
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-2xl border border-white/10"
            >
              <img
                src={spotlightItem.image}
                alt={spotlightItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="bg-[#FF6B35] text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-full shadow-md">
                  ★ Chef's Choice 2026
                </span>
                <button
                  onClick={() => toggleWishlist(spotlightItem.id)}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Heart size={18} className={isFav ? 'text-red-500 fill-red-500' : ''} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 border border-white/10 flex items-center gap-1.5">
                <Star size={14} className="fill-current" />
                <span>{spotlightItem.rating} Rating ({spotlightItem.ratingCount}+ reviews)</span>
              </div>
            </motion.div>

            {/* Right Details Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <VegBadge type={spotlightItem.isVeg} />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {spotlightItem.category} • Prep: {spotlightItem.prepTime || '20 min'}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white">
                {spotlightItem.name}
              </h3>

              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Served by <span className="text-white">{spotlightItem.restaurantName}</span>
              </p>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {spotlightItem.description}
              </p>

              {/* Chef Tasting Notes */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <p className="text-[11px] font-bold text-[#FF6B35] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={14} /> Master Chef's Tasting Note
                </p>
                <p className="text-xs text-gray-300 italic">
                  "Slow-cooked for 6 hours with royal saffron, roasted spices, and supreme basmati grain. Pairs exquisitely with fresh raita."
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Exclusive Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">₹{spotlightItem.price}</span>
                    {spotlightItem.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{spotlightItem.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleOrderSpotlight}
                  icon={<ArrowRight size={18} />}
                >
                  Order Signature Dish
                </Button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
