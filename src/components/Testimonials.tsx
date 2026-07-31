import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { MOCK_REVIEWS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + MOCK_REVIEWS.length) % MOCK_REVIEWS.length);
  };

  const currentReview = MOCK_REVIEWS[currentIndex];

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Client Praise</span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white tracking-tight mt-2">
            What Diners Say
          </h2>
          <p className="text-sm text-gray-400 font-light mt-1">
            Testimonials from epicures and verified Food Area diners.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-luxury p-8 sm:p-12 rounded-[36px] border border-white/10 shadow-luxury relative text-center flex flex-col items-center"
            >
              <Quote size={48} className="text-[#FF6B35]/20 mb-4" />

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>

              {/* Comment Text */}
              <p className="text-base sm:text-xl text-white font-serif-editorial font-semibold italic max-w-xl mb-8 leading-relaxed">
                "{currentReview.comment}"
              </p>

              {/* User Avatar & Name */}
              <div className="flex items-center gap-3">
                <img
                  src={currentReview.userAvatar}
                  alt={currentReview.userName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B35]"
                />
                <div className="text-left">
                  <h4 className="font-extrabold text-white text-sm sm:text-base">
                    {currentReview.userName}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">Verified Epicure • {currentReview.date}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 rounded-full glass-luxury border border-white/20 flex items-center justify-center text-white hover:bg-[#FF6B35] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 rounded-full glass-luxury border border-white/20 flex items-center justify-center text-white hover:bg-[#FF6B35] transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {MOCK_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#FF6B35] w-8' : 'bg-white/20 w-2'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
