import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu as MenuIcon, 
  X, 
  ChevronDown,
  LogOut,
  Clock
} from 'lucide-react';
import { Logo } from './Logo';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    cart, 
    wishlistIds, 
    deliveryLocation, 
    setDeliveryLocation,
    setIsCartOpen,
    setIsSearchOpen,
    user,
    setIsAuthOpen,
    logoutUser
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularLocations = [
    'Connaught Place, New Delhi',
    'Indiranagar, Bengaluru',
    'Bandra West, Mumbai',
    'DLF Phase 2, Gurugram',
    'T. Nagar, Chennai',
    'Hitech City, Hyderabad'
  ];

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[88px] flex items-center ${
      isScrolled ? 'glass-nav shadow-glow-soft border-b border-white/10' : 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          
          {/* LEFT: Logo Block */}
          <div className="flex items-center shrink-0">
            <Logo size="md" onClick={() => handleNavClick('home')} />
          </div>

          {/* CENTER: Location Selector & Navigation Links (Properly Spaced & No Collisions) */}
          <div className="hidden xl:flex items-center gap-6">
            
            {/* Location Selector Pill */}
            <div className="relative shrink-0">
              <button
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-200 transition-all"
              >
                <MapPin size={14} className="text-[#FF6B35] shrink-0" />
                <span className="max-w-[130px] truncate">{deliveryLocation}</span>
                <ChevronDown size={12} className="text-gray-400 shrink-0" />
              </button>

              {locationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass-luxury rounded-2xl p-3 z-50 shadow-2xl border border-white/15">
                  <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2 px-2">Delivery City</p>
                  <div className="space-y-1">
                    {popularLocations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setDeliveryLocation(loc);
                          setLocationDropdownOpen(false);
                        }}
                        className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-colors flex items-center gap-2 ${
                          deliveryLocation === loc ? 'bg-[#FF6B35]/20 text-[#FF6B35] font-extrabold border border-[#FF6B35]/30' : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        <MapPin size={13} className={deliveryLocation === loc ? 'text-[#FF6B35]' : 'text-gray-500'} />
                        <span className="truncate">{loc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-1.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'restaurants', label: 'Menu' },
                { id: 'offers', label: 'Offers', badge: '30% OFF' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 shrink-0 ${
                      isActive 
                        ? 'text-white bg-white/10 border border-white/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] bg-[#FF6B35] text-white px-1.5 py-0.5 rounded-full font-black">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

          </div>

          {/* RIGHT: Action Controls (Search, Wishlist, Cart, Profile) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white transition-colors border border-white/10"
              title="Search Menu"
            >
              <Search size={18} />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white transition-colors border border-white/10"
              title="Wishlist"
            >
              <Heart size={18} className={wishlistIds.length > 0 ? 'text-[#FF6B35] fill-[#FF6B35]' : ''} />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#FF6B35] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center border-2 border-[#0D0D0D]">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF5A00] text-white hover:shadow-glow-orange transition-all active:scale-95 border border-[#FF6B35]/40"
              title="Shopping Cart"
            >
              <ShoppingBag size={18} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#0D0D0D] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center border-2 border-[#FF6B35]">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* User Profile / Login */}
            <div className="relative hidden md:block">
              {user ? (
                <div>
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <img 
                      src={user.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'} 
                      alt={user.name} 
                      className="w-7 h-7 rounded-full object-cover border border-[#FF6B35]"
                    />
                    <span className="text-xs font-extrabold text-white max-w-[80px] truncate">{user.name.split(' ')[0]}</span>
                    <ChevronDown size={12} className="text-gray-400" />
                  </button>

                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 glass-luxury rounded-2xl p-2 z-50 shadow-2xl border border-white/15">
                      <button
                        onClick={() => {
                          handleNavClick('profile');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left text-xs font-bold px-3 py-2.5 rounded-xl text-gray-200 hover:bg-white/10 flex items-center gap-2"
                      >
                        <User size={14} className="text-[#FF6B35]" /> VIP Profile
                      </button>
                      <button
                        onClick={() => {
                          handleNavClick('order-tracking');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left text-xs font-bold px-3 py-2.5 rounded-xl text-gray-200 hover:bg-white/10 flex items-center gap-2"
                      >
                        <Clock size={14} className="text-[#45A735]" /> Active Order
                      </button>
                      <div className="h-px bg-white/10 my-1" />
                      <button
                        onClick={() => {
                          logoutUser();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left text-xs font-bold px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 flex items-center gap-2"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setIsAuthOpen(true)}
                  icon={<User size={15} />}
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-2xl bg-white/5 text-white hover:bg-white/10 border border-white/10"
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[88px] glass-luxury border-b border-white/15 p-6 shadow-2xl z-40 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            
            <div className="p-3 bg-white/5 rounded-2xl flex items-center justify-between border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-200">
                <MapPin size={15} className="text-[#FF6B35]" />
                <span>{deliveryLocation}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'restaurants', label: 'Browse Menu' },
                { id: 'offers', label: 'Special Offers (30% OFF)' },
                { id: 'profile', label: 'VIP Orders & Account' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact Us' },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-xs font-bold transition-colors ${
                    currentView === link.id ? 'bg-[#FF6B35] text-white' : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {!user ? (
              <Button 
                variant="primary" 
                fullWidth 
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
              >
                Sign In / Register
              </Button>
            ) : (
              <Button
                variant="outline"
                fullWidth
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  logoutUser();
                }}
              >
                Logout ({user.name})
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
