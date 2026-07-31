import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MOCK_FOOD_ITEMS, MOCK_RESTAURANTS } from '../data/mockData';
import { VegBadge } from './UIElements';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToRestaurant, openCustomizationModal, addToCart } = useApp();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const matchedRestaurants = query.trim() 
    ? MOCK_RESTAURANTS.filter(r => 
        r.name.toLowerCase().includes(query.toLowerCase()) || 
        r.cuisines.some(c => c.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchedFood = query.trim()
    ? MOCK_FOOD_ITEMS.filter(f =>
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.category.toLowerCase().includes(query.toLowerCase()) ||
        f.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="glass-luxury bg-[#121212] rounded-[36px] max-w-2xl w-full p-6 shadow-2xl border border-white/15 relative max-h-[80vh] flex flex-col text-white"
      >
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF6B35]" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search truffle sushi, wagyu burgers, biryani, or restaurants..."
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-10 py-3.5 text-sm font-bold text-white outline-none focus:border-[#FF6B35]"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {!query.trim() && (
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trending Culinary Searches</p>
            <div className="flex flex-wrap gap-2">
              {['Salmon Truffle Nigiri', 'Classic Cheese Burger', 'Margherita Basil Pizza', 'Hyderabadi Chicken Biryani', 'Molten Chocolate Lava Cake', 'Cold Caramel Frappe'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-200 hover:bg-[#FF6B35] hover:text-white transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {query.trim() && (
          <div className="overflow-y-auto space-y-6 flex-1 pr-1">
            
            {matchedRestaurants.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Restaurants ({matchedRestaurants.length})</h4>
                <div className="space-y-2">
                  {matchedRestaurants.map(r => (
                    <div
                      key={r.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigateToRestaurant(r.id);
                      }}
                      className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#FF6B35] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img src={r.logo} alt={r.name} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <h5 className="font-extrabold text-xs text-white">{r.name}</h5>
                          <p className="text-[11px] text-gray-400">{r.cuisines.join(', ')} • ⭐ {r.rating}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-[#FF6B35]" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchedFood.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Dishes & Culinary Items ({matchedFood.length})</h4>
                <div className="space-y-2">
                  {matchedFood.map(f => (
                    <div
                      key={f.id}
                      className="p-3.5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <img src={f.image} alt={f.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <VegBadge type={f.isVeg} size="sm" />
                            <h5 className="font-extrabold text-xs text-white">{f.name}</h5>
                          </div>
                          <p className="text-[11px] text-gray-400">by {f.restaurantName} • ₹{f.price}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsSearchOpen(false);
                          if (f.customizationGroups?.length) {
                            openCustomizationModal(f);
                          } else {
                            addToCart(f);
                          }
                        }}
                        className="text-xs font-bold bg-[#FF6B35] text-white px-3.5 py-1.5 rounded-full shadow-glow-orange hover:bg-[#E55620]"
                      >
                        ADD
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {matchedRestaurants.length === 0 && matchedFood.length === 0 && (
              <div className="text-center py-8 text-gray-400 text-xs font-semibold">
                No matching dishes or restaurants found for "{query}".
              </div>
            )}

          </div>
        )}

      </motion.div>

    </div>
  );
};
