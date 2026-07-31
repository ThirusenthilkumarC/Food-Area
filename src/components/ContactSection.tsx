import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const ContactSection: React.FC = () => {
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
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-extrabold text-white tracking-tight mt-2">
            Contact & Support
          </h2>
          <p className="text-sm text-gray-400 font-light mt-1">
            We are here to assist with VIP inquiries, corporate catering & delivery support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-luxury p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Flagship Sanctuary</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Connaught Place, Inner Circle, New Delhi 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-2xl bg-[#45A735]/20 text-[#45A735] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Direct Concierge Line</h4>
                  <p className="text-xs text-gray-400 mt-0.5">+91 1800-FOOD-AREA / +91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">VIP Inquiry Email</h4>
                  <p className="text-xs text-gray-400 mt-0.5">concierge@foodarea.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Service Hours</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Open Daily: 11:00 AM – 02:00 AM Midnight</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-luxury p-8 rounded-3xl border border-white/10 shadow-2xl">
              
              <h3 className="text-xl font-serif-editorial font-bold text-white mb-6">
                Send Us a Message
              </h3>

              {sent ? (
                <div className="bg-[#45A735]/15 border border-[#45A735]/40 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 size={36} className="text-[#45A735] mx-auto" />
                  <h4 className="font-extrabold text-white text-base">Message Sent!</h4>
                  <p className="text-xs text-gray-300">
                    Our VIP concierge desk will respond to your email shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rahul Sharma"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can our concierge assist you?"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="rounded-2xl shadow-glow-orange"
                    icon={<Send size={16} />}
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
