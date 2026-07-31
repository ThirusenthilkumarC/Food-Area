import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const Newsletter: React.FC = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      showToast('🎉 Thank you for subscribing! FOOD30 promo code has been sent.', 'success');
      setEmail('');
    } else {
      showToast('Please enter a valid email address.', 'error');
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-luxury text-white rounded-[36px] p-8 sm:p-14 relative overflow-hidden shadow-luxury text-center max-w-4xl mx-auto border border-white/10">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B35]/15 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Exclusive Circle</span>
          
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold tracking-tight mt-2 mb-3">
            Get Epicurean Deals in Your Inbox
          </h2>

          <p className="text-gray-400 text-sm font-light max-w-lg mx-auto mb-8 leading-relaxed">
            Subscribe to receive private tasting invitations, new restaurant unveilings, and seasonal promo codes.
          </p>

          {subscribed ? (
            <div className="bg-[#45A735]/15 border border-[#45A735]/40 text-[#45A735] p-4 rounded-2xl flex items-center justify-center gap-3 max-w-md mx-auto">
              <CheckCircle2 size={22} />
              <span className="font-bold text-sm text-white">Subscribed! Use code <strong className="text-[#FF6B35]">FOOD30</strong> for 30% off.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3.5 text-white text-xs font-bold outline-none focus:border-[#FF6B35]"
                required
              />
              <Button type="submit" variant="primary" size="md" className="rounded-full shrink-0" icon={<Send size={16} />}>
                Subscribe
              </Button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
