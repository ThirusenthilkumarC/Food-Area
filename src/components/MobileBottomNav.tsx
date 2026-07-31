import React from 'react';
import { Home, Compass, Clock, Heart, User, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MobileBottomNav: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    cart, 
    setIsCartOpen, 
    wishlistIds,
    finalTotal
  } = useApp();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'restaurants', label: 'Explore', icon: Compass },
    { id: 'order-tracking', label: 'Orders', icon: Clock },
    { id: 'wishlist', label: 'Favorites', icon: Heart, badge: wishlistIds.length },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      
      {/* Sticky Mobile Cart Bar */}
      {cartItemsCount > 0 && currentView !== 'checkout' && (
        <div className="px-4 pb-2">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF5A00] text-white p-3 rounded-2xl shadow-glow-orange flex items-center justify-between font-extrabold border border-[#FF6B35]/50 animate-pulse-subtle"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-black/40 flex items-center justify-center font-extrabold text-sm border border-white/20">
                {cartItemsCount}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-white/80">View Cart</span>
                <span className="text-sm font-black">₹{finalTotal}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs bg-white text-[#FF6B35] px-3.5 py-1.5 rounded-xl font-black shadow-md">
              <span>Checkout</span>
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      )}

      {/* Main Bottom Nav Bar Dark Glass */}
      <nav className="bg-[#0D0D0D]/90 backdrop-blur-xl border-t border-white/10 px-2 py-2.5 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive ? 'text-[#FF6B35] font-extrabold' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon size={20} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                {item.badge && item.badge > 0 ? (
                  <span className="absolute -top-1 -right-2 bg-[#FF6B35] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] mt-1 font-semibold tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
