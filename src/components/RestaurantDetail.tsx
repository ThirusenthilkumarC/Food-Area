import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  MapPin, 
  Heart, 
  Plus, 
  Minus, 
  ArrowLeft, 
  SlidersHorizontal,
  Share2
} from 'lucide-react';
import { MOCK_RESTAURANTS, MOCK_FOOD_ITEMS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button, VegBadge } from './UIElements';
import { FoodItem } from '../types';

export const RestaurantDetail: React.FC = () => {
  const { 
    selectedRestaurantId, 
    setCurrentView, 
    addToCart, 
    cart, 
    updateQuantity, 
    wishlistIds, 
    toggleWishlist,
    openCustomizationModal,
    showToast
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const restaurant = MOCK_RESTAURANTS.find(r => r.id === selectedRestaurantId) || MOCK_RESTAURANTS[0];

  const restaurantItems = MOCK_FOOD_ITEMS.filter(f => {
    if (f.restaurantId !== restaurant.id && restaurant.id !== 'rest-1') return true;
    if (vegOnly && f.isVeg !== 'veg') return false;
    if (activeCategory !== 'All' && f.category.toLowerCase() !== activeCategory.toLowerCase()) return false;
    return true;
  });

  const categories = ['All', 'Recommended', 'Burgers', 'Biryani', 'Pizza', 'Asian', 'Desserts', 'Beverages'];
  const isFav = wishlistIds.includes(restaurant.id);

  const handleAddFood = (item: FoodItem) => {
    if (item.customizationGroups && item.customizationGroups.length > 0) {
      openCustomizationModal(item);
    } else {
      addToCart(item);
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#0D0D0D]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => setCurrentView('restaurants')}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white glass-luxury px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft size={16} />
          <span>Back to Restaurants</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="glass-luxury rounded-[36px] overflow-hidden border border-white/10 shadow-luxury">
          
          <div className="relative h-64 sm:h-80 w-full">
            <img src={restaurant.coverImage} alt={restaurant.name} className="w-full h-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent" />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(restaurant.id)}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-md"
              >
                <Heart size={20} className={isFav ? 'text-red-500 fill-red-500' : ''} />
              </button>
              <button
                onClick={() => showToast('Restaurant link copied!', 'success')}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-[#FF6B35] transition-colors shadow-md"
              >
                <Share2 size={20} />
              </button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="flex items-end gap-4">
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#FF6B35] object-cover shadow-lg bg-[#161616] shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#45A735] text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full">
                      Open Now
                    </span>
                    <span className="text-xs text-amber-400 font-bold">★ {restaurant.rating} ({restaurant.ratingCount}+ reviews)</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-white tracking-tight">{restaurant.name}</h1>
                  <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">{restaurant.cuisines.join(' • ')}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <MapPin size={13} className="text-[#FF6B35]" /> {restaurant.address}
                  </p>
                </div>
              </div>

              <div className="glass-luxury p-3.5 rounded-2xl flex items-center gap-6 text-xs font-bold text-white shrink-0 border border-white/15">
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest">Delivery Speed</span>
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest">Delivery Fee</span>
                  <span>₹{restaurant.deliveryFee}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sticky top-20 z-30">
        <div className="glass-luxury rounded-2xl p-3 shadow-luxury border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF6B35] text-white shadow-glow-orange'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                vegOnly ? 'bg-green-950/40 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-gray-400'
              }`}
            >
              <VegBadge type="veg" size="sm" />
              <span>Veg Only</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif-editorial font-extrabold text-white mb-8 flex items-center gap-3">
          <span>Gourmet Menu</span>
          <span className="text-xs font-sans font-bold bg-[#FF6B35]/20 text-[#FF6B35] px-3 py-1 rounded-full border border-[#FF6B35]/30">
            {restaurantItems.length} Dishes
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurantItems.map((item) => {
            const cartItems = cart.filter(c => c.foodItem.id === item.id);
            const totalInCart = cartItems.reduce((acc, c) => acc + c.quantity, 0);

            return (
              <div
                key={item.id}
                className="glass-luxury rounded-3xl p-5 border border-white/10 flex gap-5 hover:border-[#FF6B35]/50 transition-all duration-500 shadow-luxury"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <VegBadge type={item.isVeg} />
                    {item.isBestSeller && (
                      <span className="text-[10px] bg-[#FF6B35] text-white px-2.5 py-0.5 rounded-full font-black uppercase">
                        🔥 Bestseller
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-editorial font-extrabold text-white text-lg leading-snug">
                    {item.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-white">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">₹{item.originalPrice}</span>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  
                  <div className="absolute -bottom-1 inset-x-2 flex justify-center">
                    {totalInCart > 0 ? (
                      <div className="flex items-center gap-2 bg-[#FF6B35] text-white px-3 py-1 rounded-full shadow-glow-orange font-black text-xs border border-[#FF6B35]/50">
                        <button onClick={() => updateQuantity(cartItems[0].cartItemId, cartItems[0].quantity - 1)}>
                          <Minus size={12} />
                        </button>
                        <span>{totalInCart}</span>
                        <button onClick={() => handleAddFood(item)}>
                          <Plus size={12} />
                        </button>
                      </div>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        className="rounded-full text-xs py-1 px-3 shadow-glow-orange"
                        onClick={() => handleAddFood(item)}
                        icon={item.customizationGroups?.length ? <SlidersHorizontal size={12} /> : <Plus size={12} />}
                      >
                        ADD
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
