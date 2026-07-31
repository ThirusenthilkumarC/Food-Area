import React from 'react';
import { motion } from 'framer-motion';

export const GallerySection: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80',
      title: 'Salmon Truffle Nigiri',
      category: 'Japanese Fusion',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      title: 'Neapolitan Wood Fired Pizza',
      category: 'Artisanal Italian',
      span: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      title: 'Smoked Prime Ribeye',
      category: 'Gourmet Steakhouse',
      span: 'col-span-1 row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
      title: 'Royal Dum Biryani',
      category: 'Mughlai Heritage',
      span: 'col-span-1 md:col-span-2 row-span-1'
    }
  ];

  return (
    <section className="py-32 md:py-40 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Visual Feast</span>
          <h2 className="text-4xl sm:text-6xl font-serif-editorial font-extrabold text-white tracking-tight mt-3">
            The Gallery
          </h2>
          <p className="text-base text-gray-400 font-light mt-2">
            Immerse yourself in our culinary aesthetics and signature presentations.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[280px]">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-[32px] overflow-hidden glass-luxury border border-white/10 group cursor-pointer shadow-luxury ${item.span}`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6B35]">
                  {item.category}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif-editorial font-extrabold text-white mt-1">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
