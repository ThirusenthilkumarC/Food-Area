import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Utensils, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const ReservationSection: React.FC = () => {
  const { showToast } = useApp();
  const [date, setDate] = useState('2026-08-01');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reserved, setReserved] = useState(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setReserved(true);
      showToast(`🎉 Table reserved for ${guests} on ${date} at ${time}! Confirmation SMS sent to ${phone}`, 'success');
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-luxury rounded-[36px] p-8 sm:p-14 border border-white/10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#FF6B35]">VIP Dining</span>
            
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-white tracking-tight leading-tight">
              Reserve Your <br />
              Exclusive Table.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              Experience chef-curated tasting menus and live culinary performances in an intimate luxury setting. Reserve your table at Food Area dining rooms.
            </p>

            <div className="space-y-3 pt-2 text-xs text-gray-300 font-bold">
              <div className="flex items-center gap-3">
                <Utensils size={18} className="text-[#FF6B35]" />
                <span>Custom Chef's 7-Course Tasting Menu Available</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#45A735]" />
                <span>Priority Table Allocation & Sommelier Service</span>
              </div>
            </div>
          </div>

          {/* Right Reservation Form Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              
              <h3 className="text-xl font-serif-editorial font-bold text-white mb-6">
                Online Table Reservation
              </h3>

              {reserved ? (
                <div className="bg-[#45A735]/15 border border-[#45A735]/40 p-6 rounded-2xl text-center space-y-3">
                  <CheckCircle2 size={40} className="text-[#45A735] mx-auto" />
                  <h4 className="font-extrabold text-white text-lg">Table Reserved Successfully!</h4>
                  <p className="text-xs text-gray-300">
                    We look forward to welcoming you, <strong className="text-white">{name}</strong>. A reservation code has been sent to your phone.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setReserved(false)}>
                    Book Another Slot
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleReservationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Time</label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Party Size</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#161616] border border-white/10 rounded-2xl p-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35] cursor-pointer"
                    >
                      <option value="1 Guest">1 Guest (Single Diner)</option>
                      <option value="2 Guests">2 Guests (Couple Table)</option>
                      <option value="4 Guests">4 Guests (Family Dining)</option>
                      <option value="6 Guests">6 Guests (Party)</option>
                      <option value="8+ VIP Table">8+ VIP Banquet Table</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-xs font-bold text-white outline-none focus:border-[#FF6B35]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="rounded-2xl mt-2"
                  >
                    Confirm Table Booking
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
