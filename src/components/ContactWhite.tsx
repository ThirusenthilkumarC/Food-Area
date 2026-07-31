import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const ContactWhite: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSent(true);
      showToast('🎉 Message sent to Food Area VIP Support desk!', 'success');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="py-28 bg-[#FFFFFF] text-[#24170F] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Get in Touch</span>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-[#24170F] tracking-tight mt-2">
            Flagship Sanctuary & Contact
          </h2>
          <p className="text-sm text-gray-600 font-light mt-2">
            Visit our dining rooms or reach out to our VIP concierge team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Restaurant Image & Contact Info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Restaurant Cover Image */}
            <div className="h-64 sm:h-72 rounded-[32px] overflow-hidden shadow-soft border border-gray-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Food Area Flagship Dining Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#FF6B35] tracking-widest">Flagship Location</span>
                  <h4 className="text-xl font-serif-editorial font-bold">Connaught Place Sanctuary</h4>
                </div>
              </div>
            </div>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FFF8F2] p-5 rounded-3xl border border-[#FF6B35]/20 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#FF6B35] font-extrabold text-xs">
                  <MapPin size={16} />
                  <span>ADDRESS</span>
                </div>
                <p className="text-xs font-bold text-[#24170F]">Block B, Inner Circle, Connaught Place, New Delhi 110001</p>
              </div>

              <div className="bg-[#FFF8F2] p-5 rounded-3xl border border-[#FF6B35]/20 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#45A735] font-extrabold text-xs">
                  <Clock size={16} />
                  <span>OPENING HOURS</span>
                </div>
                <p className="text-xs font-bold text-[#24170F]">Mon - Sun: 11:00 AM – 02:00 AM Midnight</p>
              </div>
            </div>

          </div>

          {/* Interactive Reservation / Inquiry Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFF8F2] p-8 sm:p-10 rounded-[36px] border border-[#FF6B35]/20 shadow-soft h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-2xl font-serif-editorial font-extrabold text-[#24170F] mb-2">
                  VIP Support & Inquiries
                </h3>
                <p className="text-xs text-gray-600 mb-6 font-light">
                  Have questions regarding your order or corporate event catering? Send us a direct message.
                </p>

                {sent ? (
                  <div className="bg-[#45A735]/15 border border-[#45A735]/30 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 size={36} className="text-[#45A735] mx-auto" />
                    <h4 className="font-extrabold text-[#24170F] text-base">Message Sent!</h4>
                    <p className="text-xs text-gray-600">Our concierge desk will respond to your email shortly.</p>
                    <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                      Send Another Note
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Your Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rahul Sharma"
                          className="w-full bg-white border border-gray-200 rounded-2xl p-3.5 text-xs font-bold text-[#24170F] outline-none focus:border-[#FF6B35]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rahul@example.com"
                          className="w-full bg-white border border-gray-200 rounded-2xl p-3.5 text-xs font-bold text-[#24170F] outline-none focus:border-[#FF6B35]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can our concierge assist you today?"
                        rows={4}
                        className="w-full bg-white border border-gray-200 rounded-2xl p-3.5 text-xs font-bold text-[#24170F] outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="rounded-2xl shadow-soft"
                      icon={<Send size={16} />}
                    >
                      Submit Message
                    </Button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
