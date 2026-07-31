import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Trash2, Plus, Minus, Tag, ArrowRight, ShoppingBag, Sparkles, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge, EmptyState } from './UIElements';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    subtotal,
    discount,
    deliveryFee,
    taxes,
    finalTotal,
    setCurrentView
  } = useApp();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput.trim());
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="absolute top-0 right-0 bottom-0 max-w-md w-full bg-[#121212] text-white shadow-2xl flex flex-col z-10 border-l border-white/10"
      >
        <div className="p-5 bg-[#1A1A1A] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF5A00] flex items-center justify-center text-white font-bold shadow-glow-orange">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-serif-editorial font-extrabold text-lg">Your Order Cart</h3>
              <p className="text-[11px] text-gray-400">
                {cart.length > 0 ? `${cart.reduce((a, b) => a + b.quantity, 0)} Items Selected` : 'Empty'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs font-bold text-gray-400 hover:text-red-400 p-1"
                title="Clear Cart"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {cart.length > 0 ? (
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            <div className="glass-luxury p-3.5 rounded-2xl border border-[#FF6B35]/30 flex items-center gap-3 text-xs text-white font-semibold">
              <Sparkles className="text-[#FF6B35] shrink-0" size={18} />
              <div>
                {subtotal >= 499 ? (
                  <span className="text-[#45A735] font-extrabold">🎉 Free White-Glove Delivery Unlocked!</span>
                ) : (
                  <span>Add <strong>₹{499 - subtotal}</strong> more for Free Delivery!</span>
                )}
              </div>
            </div>

            {cart.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3 relative"
              >
                <img
                  src={item.foodItem.image}
                  alt={item.foodItem.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <VegBadge type={item.foodItem.isVeg} size="sm" />
                    <h4 className="font-extrabold text-white text-sm truncate">{item.foodItem.name}</h4>
                  </div>

                  <p className="text-[11px] text-gray-400">by {item.foodItem.restaurantName}</p>

                  {item.selectedOptions.length > 0 && (
                    <div className="text-[10px] text-gray-400 mt-1 space-y-0.5">
                      {item.selectedOptions.map(o => (
                        <p key={o.optionId}>• {o.optionName}</p>
                      ))}
                    </div>
                  )}

                  {item.specialInstructions && (
                    <p className="text-[10px] text-amber-400 italic mt-1 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                      Note: "{item.specialInstructions}"
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-black text-white text-sm">
                      ₹{item.totalUnitPrice * item.quantity}
                    </span>

                    <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-xs font-bold">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="hover:text-[#FF6B35] p-0.5"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="hover:text-[#FF6B35] p-0.5"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="text-gray-500 hover:text-red-400 p-1"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}

            <div className="pt-2">
              {appliedCoupon ? (
                <div className="bg-[#45A735]/15 border border-[#45A735]/40 p-3.5 rounded-2xl flex items-center justify-between text-xs font-bold text-[#45A735]">
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <span>Coupon '{appliedCoupon.code}' applied (-₹{discount})</span>
                  </div>
                  <button onClick={removeCoupon} className="text-xs text-red-400 hover:underline">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCouponSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder="Enter promo code (e.g. FOOD30)"
                    className="flex-1 bg-white/5 border border-white/15 rounded-2xl px-3.5 py-2.5 text-xs font-bold outline-none focus:border-[#FF6B35] text-white"
                  />
                  <Button type="submit" variant="secondary" size="sm" className="rounded-2xl">
                    Apply
                  </Button>
                </form>
              )}
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2.5 text-xs text-gray-300 font-medium">
              <h5 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">Order Breakdown</h5>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-white">₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#45A735]">
                  <span>Discount</span>
                  <span className="font-bold">-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-bold text-white">
                  {deliveryFee === 0 ? <span className="text-[#45A735]">FREE</span> : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Charges (5% GST)</span>
                <span className="font-bold text-white">₹{taxes}</span>
              </div>
              <div className="pt-2.5 border-t border-white/10 flex justify-between text-sm font-black text-white">
                <span>Total Amount</span>
                <span className="text-base text-[#FF6B35]">₹{finalTotal}</span>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-6">
            <EmptyState
              title="Your Cart is Empty"
              description="Discover signature dishes from master chefs and add them to your cart."
              actionText="Browse Gourmet Menu"
              onAction={() => {
                setIsCartOpen(false);
                setCurrentView('restaurants');
              }}
            />
          </div>
        )}

        {cart.length > 0 && (
          <div className="p-5 bg-[#1A1A1A] border-t border-white/10 space-y-3">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleProceedToCheckout}
              icon={<ArrowRight size={18} />}
            >
              Proceed to Checkout • ₹{finalTotal}
            </Button>
            <p className="text-[10px] text-center text-gray-400 font-semibold flex items-center justify-center gap-1">
              <ShieldCheck size={12} className="text-[#45A735]" /> Safe & Encrypted Payment Guaranteed
            </p>
          </div>
        )}

      </motion.div>

    </div>
  );
};
