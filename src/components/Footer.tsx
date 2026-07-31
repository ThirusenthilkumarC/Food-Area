import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentView } = useApp();

  const handleNav = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" onClick={() => handleNav('home')} />
            
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Food Area is India's premiere haute cuisine and gourmet delivery platform. Discover world-class master chefs, artisanal sushi, wagyu burgers, and royal biryanis delivered fast.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF6B35] hover:border-[#FF6B35] flex items-center justify-center text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] text-[#FF6B35] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Master Chefs</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Food Blog</a></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] text-[#FF6B35] mb-4">
              For Diners
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li><button onClick={() => handleNav('restaurants')} className="hover:text-white transition-colors">Browse Restaurants</button></li>
              <li><button onClick={() => handleNav('order-tracking')} className="hover:text-white transition-colors">Track Active Order</button></li>
              <li><button onClick={() => handleNav('offers')} className="hover:text-white transition-colors">Special Offers</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">VIP Help Desk</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-[0.2em] text-[#FF6B35] mb-4">
              Legal & Safety
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Hygiene Standards</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 Food Area. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart size={14} className="text-[#FF6B35] fill-[#FF6B35]" /> for epicures worldwide.
          </p>
        </div>

      </div>
    </footer>
  );
};
