import React from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, Minus, Heart, Sparkles, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { MOCK_FOOD_ITEMS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button, VegBadge } from './UIElements';
import { FoodItem } from '../types';

export const BestSellers: React.FC = () => {
  const { 
    addToCart, 
    cart, 
    updateQuantity, 
    isInWishlist, 
    toggleWishlist,
    openCustomizationModal
  } = useApp();

  const handleAddClick = (item: FoodItem) => {
    if (item.customizationGroups && item.customizationGroups.length > 0) {
      openCustomizationModal(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Signature Menu</span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white tracking-tight mt-2">
              Popular Dishes
            </h2>
            <p className="text-sm text-gray-400 font-light mt-1">
              Hand-selected epicurean creations, prepared to order.
            </p>
          </div>
        </div>

        {/* Premium Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_FOOD_ITEMS.map((item, index) => {
            const isFav = isInWishlist(item.id);
            const cartItems = cart.filter(c => c.foodItem.id === item.id);
            const totalInCart = cartItems.reduce((acc, c) => acc + c.quantity, 0);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-luxury rounded-[32px] p-5 border border-white/10 hover:border-[#FF6B35]/50 hover:shadow-luxury transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Large Cinematic Image Container */}
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

                    {/* Floating Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <VegBadge type={item.isVeg} />
                        {item.discountPercentage && (
                          <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF5A00] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                            {item.discountPercentage}% OFF
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-md"
                      >
                        <Heart size={16} className={isFav ? 'text-red-500 fill-red-500' : ''} />
                      </button>
                    </div>

                    {/* Rating Chip */}
                    <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-white/10">
                      <Star size={12} className="fill-current text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-gray-400 text-[10px]">({item.ratingCount})</span>
                    </div>

                    {/* Category Pill Right */}
                    <span className="absolute bottom-3.5 right-3.5 text-[10px] uppercase tracking-widest font-extrabold bg-white/10 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/15">
                      {item.category}
                    </span>
                  </div>

                  {/* Info Header */}
                  <div className="space-y-2 mb-4 px-1">
                    <span className="text-[11px] font-bold text-[#FF6B35] uppercase tracking-wider">
                      by {item.restaurantName}
                    </span>

                    <h3 className="font-serif-editorial font-extrabold text-white text-xl group-hover:text-[#FF6B35] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Price & Action Button Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between px-1">
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-white">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {totalInCart > 0 ? (
                    <div className="flex items-center gap-2 bg-[#FF6B35] text-white px-3.5 py-2 rounded-full shadow-glow-orange font-black text-xs border border-[#FF6B35]/50">
                      <button 
                        onClick={() => updateQuantity(cartItems[0].cartItemId, cartItems[0].quantity - 1)}
                        className="hover:scale-110 active:scale-90 transition-transform"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-4 text-center">{totalInCart}</span>
                      <button 
                        onClick={() => handleAddClick(item)}
                        className="hover:scale-110 active:scale-90 transition-transform"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAddClick(item)}
                      icon={item.customizationGroups?.length ? <SlidersHorizontal size={14} /> : <ShoppingBag size={14} />}
                    >
                      {item.customizationGroups?.length ? 'Customize' : 'Add to Cart'}
                    </Button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
