import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ArrowRight, Heart } from 'lucide-react';
import { MOCK_RESTAURANTS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Button, Badge } from './UIElements';

export const PopularRestaurants: React.FC = () => {
  const { navigateToRestaurant, setCurrentView, wishlistIds, toggleWishlist } = useApp();

  return (
    <section className="py-16 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF5A00]">Top Choices</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24170F] tracking-tight mt-1">
              Popular Near You
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Top-rated restaurants loved by Food Area customers.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCurrentView('restaurants');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            icon={<ArrowRight size={14} />}
          >
            View All Restaurants
          </Button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MOCK_RESTAURANTS.slice(0, 6).map((restaurant, index) => {
            const isFav = wishlistIds.includes(restaurant.id);
            return (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-[#24170F]/5 group transition-all duration-300 flex flex-col"
              >
                {/* Cover Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={restaurant.coverImage}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    {restaurant.offerBadge ? (
                      <span className="bg-[#FF5A00] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {restaurant.offerBadge}
                      </span>
                    ) : (
                      <span className="bg-[#45A735] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                        Open Now
                      </span>
                    )}

                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(restaurant.id);
                      }}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors shadow-md"
                    >
                      <Heart size={18} className={isFav ? 'text-red-500 fill-red-500' : ''} />
                    </button>
                  </div>

                  {/* Restaurant Logo Badge */}
                  <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-2xl border-2 border-white overflow-hidden shadow-md bg-white">
                    <img src={restaurant.logo} alt={restaurant.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-extrabold text-[#24170F] group-hover:text-[#FF5A00] transition-colors">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-[#EAF7E8] text-[#45A735] px-2 py-0.5 rounded-lg text-xs font-bold">
                        <span>{restaurant.rating}</span>
                        <Star size={12} className="fill-current" />
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 font-medium mb-3">
                      {restaurant.cuisines.join(' • ')}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {restaurant.tags?.map((t) => (
                        <span key={t} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta Details */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600 font-semibold">
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-[#FF5A00]" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{restaurant.distance}</span>
                    </div>

                    <div className="font-extrabold text-[#24170F]">
                      ₹{restaurant.deliveryFee} delivery
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    className="mt-4 opacity-95 group-hover:opacity-100"
                    onClick={() => navigateToRestaurant(restaurant.id)}
                  >
                    View Menu
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
