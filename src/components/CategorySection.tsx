import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_CATEGORIES } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const CategorySection: React.FC = () => {
  const { setSearchQuery, setCurrentView } = useApp();

  const handleCategoryClick = (categoryName: string) => {
    setSearchQuery(categoryName);
    setCurrentView('restaurants');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Curated Selection</span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white tracking-tight mt-2">
              Featured Categories
            </h2>
            <p className="text-sm text-gray-400 font-light mt-1">
              Explore gastronomic delights crafted across every specialty.
            </p>
          </div>
        </div>

        {/* Categories Horizontal Slider */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4 px-1">
          {MOCK_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              {/* Image Container with Glow Hover */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden glass-luxury border border-white/10 group-hover:border-[#FF6B35] transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow-orange">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2.5 right-2.5 text-xl sm:text-2xl drop-shadow-md">
                  {cat.icon}
                </span>
              </div>

              {/* Name */}
              <h3 className="mt-4 text-sm font-extrabold text-white group-hover:text-[#FF6B35] transition-colors">
                {cat.name}
              </h3>
              <span className="text-[11px] font-semibold text-gray-500 mt-0.5">
                {cat.itemCount}+ Dishes
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
