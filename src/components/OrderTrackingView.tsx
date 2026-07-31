import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  MapPin, 
  Navigation, 
  Store, 
  UserCheck, 
  Bike, 
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge } from './UIElements';

export const OrderTrackingView: React.FC = () => {
  const { activeOrder, showToast, setCurrentView } = useApp();
  const [simulatedProgress, setSimulatedProgress] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedProgress(prev => (prev >= 95 ? 70 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!activeOrder) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] flex items-center justify-center text-center p-4">
        <div className="glass-luxury p-8 rounded-3xl border border-white/10 max-w-md w-full text-white">
          <Clock className="w-12 h-12 text-[#FF6B35] mx-auto mb-3" />
          <h3 className="text-xl font-serif-editorial font-extrabold">No Active Orders</h3>
          <p className="text-xs text-gray-400 my-2">Place an order to see live tracking updates here.</p>
          <Button variant="primary" size="md" onClick={() => setCurrentView('restaurants')}>
            Explore Gourmet Menu
          </Button>
        </div>
      </div>
    );
  }

  const handleCallDriver = () => {
    showToast(`Calling delivery partner ${activeOrder.driverName} at ${activeOrder.driverPhone}...`, 'info');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-luxury rounded-[36px] p-6 sm:p-8 border border-white/10 shadow-luxury mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35] text-white text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles size={14} />
                <span>EXPRESS DELIVERY IN PROGRESS</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif-editorial font-black tracking-tight">
                Your Meal is on the Way!
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Order ID: <strong className="text-white font-mono">{activeOrder.id}</strong> • Estimated arrival in <strong className="text-[#FF6B35]">{activeOrder.estimatedDeliveryTime}</strong>
              </p>
            </div>

            <div className="glass-luxury p-3.5 px-5 rounded-2xl border border-white/20 text-center shrink-0">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">Total Amount</span>
              <span className="text-2xl font-black text-[#FF6B35]">₹{activeOrder.total}</span>
            </div>
          </div>
        </div>

        {/* Live Map Canvas */}
        <div className="glass-luxury rounded-[32px] p-4 sm:p-6 shadow-luxury border border-white/10 mb-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
              <Navigation size={16} className="text-[#FF6B35]" />
              <span>Live Delivery GPS Tracker</span>
            </h3>
            <span className="text-[11px] font-bold text-[#45A735] bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30 animate-pulse">
              ● Live Updating
            </span>
          </div>

          <div className="relative w-full h-56 sm:h-72 rounded-2xl bg-black/60 overflow-hidden border border-white/10">
            <svg className="absolute inset-0 w-full h-full opacity-20 stroke-gray-500" strokeWidth="6" fill="none">
              <path d="M0,80 Q150,20 300,120 T600,100 T900,180" />
              <path d="M50,0 Q100,200 400,150 T800,250" />
              <path d="M200,250 Q300,50 700,200" />
            </svg>

            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center shadow-lg">
                <Store size={20} />
              </div>
              <span className="text-[10px] font-extrabold bg-[#161616] text-white px-2 py-0.5 rounded-md border border-white/20 mt-1">
                {activeOrder.restaurantName}
              </span>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-2xl bg-[#45A735] text-white flex items-center justify-center shadow-lg">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-extrabold bg-[#161616] text-white px-2 py-0.5 rounded-md border border-white/20 mt-1">
                Your Doorstep
              </span>
            </div>

            <div 
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 flex flex-col items-center"
              style={{ left: `${simulatedProgress}%` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF5A00] text-white flex items-center justify-center shadow-glow-orange animate-bounce">
                <Bike size={24} />
              </div>
              <span className="text-[10px] font-extrabold bg-[#FF6B35] text-white px-2 py-0.5 rounded-full shadow-md mt-1">
                {activeOrder.driverName}
              </span>
            </div>
          </div>
        </div>

        {/* Driver Card & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-7 glass-luxury rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-luxury">
            <h3 className="font-serif-editorial font-extrabold text-lg text-white mb-6">Order Status Timeline</h3>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              {activeOrder.timeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    step.completed
                      ? 'bg-[#45A735] text-white'
                      : step.current
                      ? 'bg-[#FF6B35] text-white ring-4 ring-[#FF6B35]/30 animate-pulse'
                      : 'bg-white/10 text-gray-500'
                  }`}>
                    {step.completed ? <CheckCircle2 size={16} /> : idx + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-extrabold ${step.current ? 'text-[#FF6B35]' : 'text-white'}`}>
                        {step.label}
                      </h4>
                      <span className="text-[11px] text-gray-400 font-semibold">{step.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-light mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="glass-luxury rounded-[32px] p-6 border border-white/10 shadow-luxury space-y-4">
              <h3 className="font-serif-editorial font-extrabold text-lg text-white">Delivery Partner</h3>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center font-bold text-xl shrink-0">
                  <UserCheck size={28} />
                </div>

                <div className="flex-1">
                  <h4 className="font-extrabold text-sm text-white">{activeOrder.driverName}</h4>
                  <p className="text-xs text-gray-400">Rating: ⭐ {activeOrder.driverRating} (500+ orders)</p>
                  <p className="text-[11px] text-[#45A735] font-bold">Insulated Temperature Carrier</p>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleCallDriver}
                icon={<PhoneCall size={16} />}
              >
                Call Delivery Partner
              </Button>
            </div>

            <div className="glass-luxury rounded-[32px] p-6 border border-white/10 shadow-luxury">
              <h4 className="font-serif-editorial font-extrabold text-sm text-white mb-3">Order Items ({activeOrder.items.length})</h4>
              <div className="space-y-2 text-xs font-semibold text-gray-300">
                {activeOrder.items.map(item => (
                  <div key={item.cartItemId} className="flex justify-between">
                    <span>{item.quantity}x {item.foodItem.name}</span>
                    <span>₹{item.totalUnitPrice * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
