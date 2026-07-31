import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  LogOut, 
  RotateCcw, 
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge, EmptyState } from './UIElements';
import { MOCK_FOOD_ITEMS } from '../data/mockData';

export const UserProfileView: React.FC = () => {
  const { 
    user, 
    orders, 
    reorder, 
    wishlistIds, 
    addToCart, 
    logoutUser,
    setCurrentView,
    navigateToOrderTracking
  } = useApp();

  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'addresses' | 'profile'>('orders');

  if (!user) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] flex items-center justify-center p-4">
        <EmptyState
          title="Sign In to View VIP Profile"
          description="Log in to manage saved addresses, track order history, and view your favorite dishes."
          actionText="Sign In Now"
          onAction={() => setCurrentView('home')}
        />
      </div>
    );
  }

  const wishlistItems = MOCK_FOOD_ITEMS.filter(f => wishlistIds.includes(f.id));

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-luxury rounded-[36px] p-6 sm:p-8 border border-white/10 shadow-luxury mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={user.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-[#FF6B35] shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-serif-editorial font-black text-white">{user.name}</h1>
              <p className="text-xs text-gray-400 font-medium">{user.email} • {user.phone}</p>
              <span className="inline-block mt-2 text-[10px] font-black uppercase bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30 px-3 py-0.5 rounded-full">
                VIP Black Card Member ✦
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={logoutUser}
            icon={<LogOut size={14} />}
          >
            Logout
          </Button>
        </div>

        <div className="glass-luxury rounded-2xl p-2 border border-white/10 mb-8 flex items-center justify-around overflow-x-auto no-scrollbar">
          {[
            { id: 'orders', label: 'Order History', icon: ShoppingBag, count: orders.length },
            { id: 'favorites', label: 'Favorites', icon: Heart, count: wishlistItems.length },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin, count: user.addresses.length },
            { id: 'profile', label: 'Account Info', icon: User },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  isActive ? 'bg-[#FF6B35] text-white shadow-glow-orange' : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-white text-[#FF6B35]' : 'bg-white/10 text-gray-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif-editorial font-extrabold text-white">Past Orders</h2>
            
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map(order => (
                  <div
                    key={order.id}
                    className="glass-luxury rounded-[32px] p-6 border border-white/10 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black bg-white/10 px-2.5 py-0.5 rounded-md text-white">
                          {order.id}
                        </span>
                        <span className="text-xs text-gray-400">• {new Date(order.placedAt).toLocaleDateString()}</span>
                        <span className="text-[10px] font-black uppercase bg-green-500/20 text-green-400 px-2.5 py-0.5 rounded-full border border-green-500/30">
                          {order.status.replace('_', ' ')}
                        </span>
                      </div>

                      <h3 className="text-lg font-serif-editorial font-extrabold text-white">{order.restaurantName}</h3>

                      <div className="text-xs text-gray-300 space-y-0.5">
                        {order.items.map(i => (
                          <p key={i.cartItemId}>• {i.quantity}x {i.foodItem.name}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col items-end gap-3 shrink-0">
                      <span className="text-2xl font-black text-[#FF6B35]">₹{order.total}</span>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => navigateToOrderTracking(order.id)}
                          icon={<Clock size={14} />}
                        >
                          Track
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => reorder(order.id)}
                          icon={<RotateCcw size={14} />}
                        >
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Orders Yet"
                description="You haven't placed any gourmet orders with Food Area yet."
                actionText="Explore Signature Dishes"
                onAction={() => setCurrentView('restaurants')}
              />
            )}
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif-editorial font-extrabold text-white">Your Favorite Dishes</h2>

            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="glass-luxury rounded-[32px] p-5 border border-white/10 space-y-4">
                    <img src={item.image} alt={item.name} className="w-full h-44 rounded-2xl object-cover" />
                    
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif-editorial font-extrabold text-base text-white">{item.name}</h4>
                      <VegBadge type={item.isVeg} size="sm" />
                    </div>

                    <p className="text-xs text-gray-400">by {item.restaurantName}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="font-black text-white text-base">₹{item.price}</span>
                      <Button variant="primary" size="sm" onClick={() => addToCart(item)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Your Wishlist is Empty"
                description="Save your favorite signature dishes by clicking the heart icon on any item."
              />
            )}
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif-editorial font-extrabold text-white">Saved Addresses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.addresses.map(addr => (
                <div key={addr.id} className="glass-luxury rounded-3xl p-5 border border-white/10 space-y-2">
                  <span className="text-[10px] font-black uppercase bg-[#FF6B35] text-white px-2.5 py-0.5 rounded-md">
                    {addr.type}
                  </span>
                  <p className="text-sm font-bold text-white mt-2">{addr.street}</p>
                  <p className="text-xs text-gray-400">{addr.locality}, {addr.city} - {addr.pincode}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="glass-luxury rounded-[32px] p-6 sm:p-8 border border-white/10 space-y-4 max-w-xl">
            <h2 className="text-2xl font-serif-editorial font-extrabold text-white">Account Details</h2>
            <div className="space-y-3 text-xs font-bold text-gray-300">
              <div>
                <label className="text-[10px] text-gray-400 uppercase tracking-widest">Full Name</label>
                <input type="text" value={user.name} readOnly className="w-full bg-white/5 p-3.5 rounded-xl border border-white/10 mt-1 text-white" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase tracking-widest">Email Address</label>
                <input type="email" value={user.email} readOnly className="w-full bg-white/5 p-3.5 rounded-xl border border-white/10 mt-1 text-white" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase tracking-widest">Phone Number</label>
                <input type="text" value={user.phone} readOnly className="w-full bg-white/5 p-3.5 rounded-xl border border-white/10 mt-1 text-white" />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
