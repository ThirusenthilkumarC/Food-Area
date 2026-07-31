import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, MapPin, X, Heart } from 'lucide-react';
import { MOCK_RESTAURANTS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button, VegBadge, EmptyState } from './UIElements';

export const RestaurantListing: React.FC = () => {
  const { searchQuery, setSearchQuery, navigateToRestaurant, wishlistIds, toggleWishlist } = useApp();

  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [ratingFilter, setRatingFilter] = useState<boolean>(false);
  const [fastDeliveryFilter, setFastDeliveryFilter] = useState<boolean>(false);
  const [offersFilter, setOffersFilter] = useState<boolean>(false);
  const [vegFilter, setVegFilter] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'deliveryTime' | 'priceLowToHigh' | 'priceHighToLow'>('recommended');

  const cuisinesList = ['All', 'North Indian', 'Biryani', 'Burgers', 'Italian', 'South Indian', 'Asian'];

  const filteredRestaurants = useMemo(() => {
    return MOCK_RESTAURANTS.filter((r) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesCuisine = r.cuisines.some(c => c.toLowerCase().includes(q));
        const matchesArea = r.area.toLowerCase().includes(q);
        if (!matchesName && !matchesCuisine && !matchesArea) return false;
      }
      if (selectedCuisine !== 'All' && !r.cuisines.includes(selectedCuisine)) return false;
      if (ratingFilter && r.rating < 4.5) return false;
      if (fastDeliveryFilter && parseInt(r.deliveryTime) > 25) return false;
      if (offersFilter && !r.offerBadge) return false;
      if (vegFilter && !r.tags?.includes('Pure Veg')) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'deliveryTime') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      if (sortBy === 'priceLowToHigh') return a.priceRange.length - b.priceRange.length;
      if (sortBy === 'priceHighToLow') return b.priceRange.length - a.priceRange.length;
      return 0;
    });
  }, [searchQuery, selectedCuisine, ratingFilter, fastDeliveryFilter, offersFilter, vegFilter, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-luxury rounded-[32px] p-6 md:p-8 border border-white/10 mb-10 shadow-luxury">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Sanctuaries</span>
              <h1 className="text-3xl font-serif-editorial font-extrabold text-white tracking-tight mt-1">
                Gourmet Restaurants
              </h1>
              <p className="text-sm text-gray-400 font-light mt-1">
                Discover world-class dining spots and express delivery near you.
              </p>
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurants, cuisines, or signature dishes..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-10 py-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Filters & Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setRatingFilter(!ratingFilter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  ratingFilter ? 'bg-[#FF6B35] text-white border-[#FF6B35]' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Star size={13} className={ratingFilter ? 'fill-current' : ''} />
                <span>Rating 4.5+</span>
              </button>

              <button
                onClick={() => setFastDeliveryFilter(!fastDeliveryFilter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  fastDeliveryFilter ? 'bg-[#FF6B35] text-white border-[#FF6B35]' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Clock size={13} />
                <span>Fast Express (&lt; 25 min)</span>
              </button>

              <button
                onClick={() => setOffersFilter(!offersFilter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  offersFilter ? 'bg-[#FF6B35] text-white border-[#FF6B35]' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <span>Offers & Discounts</span>
              </button>

              <button
                onClick={() => setVegFilter(!vegFilter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  vegFilter ? 'bg-[#45A735] text-white border-[#45A735]' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <VegBadge type="veg" size="sm" />
                <span>Pure Veg</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#161616] border border-white/10 text-white text-xs font-bold rounded-xl px-3 py-2 outline-none focus:border-[#FF6B35] cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="rating">Rating: High to Low</option>
                <option value="deliveryTime">Fastest Delivery</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4">
            {cuisinesList.map(c => (
              <button
                key={c}
                onClick={() => setSelectedCuisine(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-extrabold shrink-0 transition-all ${
                  selectedCuisine === c
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

        </div>

        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant, index) => {
              const isFav = wishlistIds.includes(restaurant.id);
              return (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-luxury rounded-[32px] overflow-hidden border border-white/10 hover:border-[#FF6B35]/50 group transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={restaurant.coverImage}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        {restaurant.offerBadge ? (
                          <span className="bg-[#FF6B35] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                            {restaurant.offerBadge}
                          </span>
                        ) : (
                          <span className="bg-[#45A735] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                            Open Now
                          </span>
                        )}

                        <button
                          onClick={() => toggleWishlist(restaurant.id)}
                          className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shadow-md"
                        >
                          <Heart size={16} className={isFav ? 'text-red-500 fill-red-500' : ''} />
                        </button>
                      </div>

                      <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-2xl border-2 border-[#FF6B35] overflow-hidden shadow-md bg-[#161616]">
                        <img src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="p-6 pt-8">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-serif-editorial font-extrabold text-white group-hover:text-[#FF6B35] transition-colors">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-black/60 text-amber-400 px-2.5 py-1 rounded-full text-xs font-bold border border-amber-500/30">
                          <span>{restaurant.rating}</span>
                          <Star size={12} className="fill-current" />
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 font-medium mb-3">
                        {restaurant.cuisines.join(' • ')}
                      </p>

                      <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
                        <MapPin size={13} className="text-[#FF6B35]" /> {restaurant.address}
                      </p>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-semibold">
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-[#FF6B35]" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        <div className="font-extrabold text-white">
                          ₹{restaurant.deliveryFee} delivery
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => navigateToRestaurant(restaurant.id)}
                    >
                      View Gourmet Menu
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="No Restaurants Found"
            description="We couldn't find any sanctuaries matching your filters."
            actionText="Reset All Filters"
            onAction={() => {
              setSearchQuery('');
              setSelectedCuisine('All');
              setRatingFilter(false);
              setFastDeliveryFilter(false);
              setOffersFilter(false);
              setVegFilter(false);
            }}
          />
        )}

      </div>
    </div>
  );
};
