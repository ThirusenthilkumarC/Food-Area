import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Plus, 
  ArrowLeft, 
  QrCode, 
  Banknote, 
  Wallet
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge, EmptyState } from './UIElements';
import { Address, PaymentMethod } from '../types';

export const CheckoutView: React.FC = () => {
  const { 
    cart, 
    user, 
    addAddress, 
    subtotal, 
    discount, 
    deliveryFee, 
    taxes, 
    finalTotal, 
    placeOrder, 
    setCurrentView,
    navigateToOrderTracking
  } = useApp();

  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedAddress, setSelectedAddress] = useState<Address>(
    user?.addresses[0] || {
      id: 'default',
      type: 'Home',
      street: 'Flat 402, Royal Palms, Outer Ring Road',
      locality: 'Indiranagar',
      city: 'Bengaluru',
      pincode: '560038'
    }
  );

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [upiId, setUpiId] = useState('rahul@upi');

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [newStreet, setNewStreet] = useState('');
  const [newLocality, setNewLocality] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newPincode, setNewPincode] = useState('');

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <EmptyState
          title="Your Cart is Empty"
          description="Please add items to your cart before proceeding to checkout."
          actionText="Explore Gourmet Menu"
          onAction={() => setCurrentView('restaurants')}
        />
      </div>
    );
  }

  const handleAddNewAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStreet && newLocality && newCity && newPincode) {
      addAddress({
        type: 'Home',
        street: newStreet,
        locality: newLocality,
        city: newCity,
        pincode: newPincode
      });
      setSelectedAddress({
        id: `addr-${Date.now()}`,
        type: 'Home',
        street: newStreet,
        locality: newLocality,
        city: newCity,
        pincode: newPincode
      });
      setShowAddressModal(false);
    }
  };

  const handlePlaceOrderSubmit = () => {
    const createdOrder = placeOrder(selectedAddress, paymentMethod);
    navigateToOrderTracking(createdOrder.id);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => setCurrentView('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Dining</span>
        </button>

        <div className="glass-luxury rounded-3xl p-6 border border-white/10 mb-8 shadow-luxury">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            
            <div 
              onClick={() => setActiveStep(1)}
              className={`flex items-center gap-2 cursor-pointer ${activeStep >= 1 ? 'text-[#FF6B35] font-extrabold' : 'text-gray-500'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep >= 1 ? 'bg-[#FF6B35] text-white' : 'bg-white/10 text-gray-500'
              }`}>
                1
              </div>
              <span className="text-xs sm:text-sm">Delivery Address</span>
            </div>

            <div className={`h-1 flex-1 mx-4 rounded-full ${activeStep >= 2 ? 'bg-[#FF6B35]' : 'bg-white/10'}`} />

            <div 
              onClick={() => setActiveStep(2)}
              className={`flex items-center gap-2 cursor-pointer ${activeStep >= 2 ? 'text-[#FF6B35] font-extrabold' : 'text-gray-500'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep >= 2 ? 'bg-[#FF6B35] text-white' : 'bg-white/10 text-gray-500'
              }`}>
                2
              </div>
              <span className="text-xs sm:text-sm">Order Review</span>
            </div>

            <div className={`h-1 flex-1 mx-4 rounded-full ${activeStep >= 3 ? 'bg-[#FF6B35]' : 'bg-white/10'}`} />

            <div 
              onClick={() => setActiveStep(3)}
              className={`flex items-center gap-2 cursor-pointer ${activeStep >= 3 ? 'text-[#FF6B35] font-extrabold' : 'text-gray-500'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep >= 3 ? 'bg-[#FF6B35] text-white' : 'bg-white/10 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-xs sm:text-sm">Payment</span>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-6">
            
            {activeStep === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-luxury rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-luxury">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-serif-editorial font-extrabold text-white">Select Delivery Address</h2>
                    <p className="text-xs text-gray-400">Choose where you want your food delivered.</p>
                  </div>
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setShowAddressModal(true)}
                    icon={<Plus size={14} />}
                  >
                    Add New
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {user?.addresses.map((addr) => {
                    const isSelected = selectedAddress.id === addr.id;
                    return (
                      <div
                        key={addr.id}
                        onClick={() => setSelectedAddress(addr)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#FF6B35] bg-[#FF6B35]/15'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black uppercase bg-[#FF6B35] text-white px-2 py-0.5 rounded-md">
                            {addr.type}
                          </span>
                          {isSelected && <CheckCircle2 size={18} className="text-[#FF6B35]" />}
                        </div>
                        <p className="text-xs font-bold text-white leading-snug">{addr.street}</p>
                        <p className="text-xs text-gray-400 mt-1">{addr.locality}, {addr.city} - {addr.pincode}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <Button variant="primary" size="md" onClick={() => setActiveStep(2)}>
                    Continue to Order Review
                  </Button>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-luxury rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-luxury">
                <h2 className="text-xl font-serif-editorial font-extrabold text-white mb-6">Review Your Order Items</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <img src={item.foodItem.image} alt={item.foodItem.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <div className="flex items-center gap-1">
                            <VegBadge type={item.foodItem.isVeg} size="sm" />
                            <h4 className="font-extrabold text-xs text-white">{item.foodItem.name}</h4>
                          </div>
                          <p className="text-[11px] text-gray-400">Qty: {item.quantity} x ₹{item.totalUnitPrice}</p>
                        </div>
                      </div>
                      <span className="font-black text-sm text-white">₹{item.totalUnitPrice * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" size="md" onClick={() => setActiveStep(1)}>
                    Back to Address
                  </Button>
                  <Button variant="primary" size="md" onClick={() => setActiveStep(3)}>
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-luxury rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-luxury">
                <h2 className="text-xl font-serif-editorial font-extrabold text-white mb-6">Select Payment Method</h2>

                <div className="space-y-3 mb-6">
                  <label
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'upi' ? 'border-[#FF6B35] bg-[#FF6B35]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <input type="radio" name="pay" checked={paymentMethod === 'upi'} onChange={() => {}} className="mt-1 accent-[#FF6B35]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <QrCode size={18} className="text-[#FF6B35]" />
                        <span className="font-extrabold text-sm text-white">UPI / QR Code</span>
                        <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-bold">Fastest</span>
                      </div>
                      {paymentMethod === 'upi' && (
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="Enter VPA / UPI ID"
                          className="mt-3 w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-xs font-bold text-white outline-none"
                        />
                      )}
                    </div>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'card' ? 'border-[#FF6B35] bg-[#FF6B35]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => {}} className="accent-[#FF6B35]" />
                    <CreditCard size={18} className="text-[#FF6B35]" />
                    <span className="font-extrabold text-sm text-white">Credit / Debit Card</span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod' ? 'border-[#FF6B35] bg-[#FF6B35]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => {}} className="accent-[#FF6B35]" />
                    <Banknote size={18} className="text-[#45A735]" />
                    <span className="font-extrabold text-sm text-white">Cash on Delivery</span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('wallet')}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'wallet' ? 'border-[#FF6B35] bg-[#FF6B35]/15' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <input type="radio" name="pay" checked={paymentMethod === 'wallet'} onChange={() => {}} className="accent-[#FF6B35]" />
                    <Wallet size={18} className="text-[#FF6B35]" />
                    <span className="font-extrabold text-sm text-white">Paytm / PhonePe Wallet</span>
                  </label>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="md" onClick={() => setActiveStep(2)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handlePlaceOrderSubmit}
                  >
                    Place Order • ₹{finalTotal}
                  </Button>
                </div>
              </motion.div>
            )}

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-luxury rounded-[32px] p-6 border border-white/10 shadow-luxury space-y-4">
              <h3 className="font-serif-editorial font-extrabold text-lg text-white">Order Summary</h3>

              <div className="space-y-2 text-xs font-semibold text-gray-300 border-b border-white/10 pb-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#45A735]">
                    <span>Coupon Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-white">{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (5% GST)</span>
                  <span className="text-white">₹{taxes}</span>
                </div>
              </div>

              <div className="flex justify-between text-base font-black text-white">
                <span>Total Amount</span>
                <span className="text-[#FF6B35]">₹{finalTotal}</span>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl text-[11px] text-gray-300 space-y-1 border border-white/10">
                <p className="font-bold text-white flex items-center gap-1">
                  <MapPin size={12} className="text-[#FF6B35]" /> Delivering to:
                </p>
                <p className="font-semibold text-gray-300">{selectedAddress.street}, {selectedAddress.locality}</p>
              </div>

              <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-[#45A735]" /> Guaranteed Fresh & Secure
              </p>
            </div>
          </div>

        </div>

      </div>

      {showAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#161616] border border-white/15 rounded-3xl p-6 max-w-md w-full shadow-2xl text-white">
            <h3 className="text-lg font-serif-editorial font-extrabold text-white mb-4">Add Delivery Address</h3>
            <form onSubmit={handleAddNewAddressSubmit} className="space-y-3">
              <input
                type="text"
                value={newStreet}
                onChange={(e) => setNewStreet(e.target.value)}
                placeholder="Flat / Building / Street Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs outline-none focus:border-[#FF6B35] text-white"
                required
              />
              <input
                type="text"
                value={newLocality}
                onChange={(e) => setNewLocality(e.target.value)}
                placeholder="Locality / Landmark"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs outline-none focus:border-[#FF6B35] text-white"
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  placeholder="City"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs outline-none focus:border-[#FF6B35] text-white"
                  required
                />
                <input
                  type="text"
                  value={newPincode}
                  onChange={(e) => setNewPincode(e.target.value)}
                  placeholder="Pincode"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs outline-none focus:border-[#FF6B35] text-white"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setShowAddressModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" type="submit">
                  Save Address
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
