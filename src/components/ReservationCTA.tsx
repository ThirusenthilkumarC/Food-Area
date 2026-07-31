import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './UIElements';

export const ReservationCTA: React.FC = () => {
  const { showToast } = useApp();
  const [date, setDate] = useState('2026-08-01');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2 Guests');
  const [booked, setBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    showToast(`🎉 Table reserved for ${guests} on ${date} at ${time}!`, 'success');
  };

  return (
    <section className="py-32 md:py-40 bg-[#FFFFFF] text-[#24170F] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* White Luxury Reservation Interface */}
        <div className="bg-[#FFF8F2] rounded-[36px] p-8 sm:p-14 border border-[#FF6B35]/20 shadow-soft relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] font-black text-[#FF6B35]">VIP Table Reservation</span>
              <h3 className="text-3xl sm:text-5xl font-serif-editorial font-extrabold text-[#24170F]">
                Book Your Omakase Experience
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg">
                Experience chef-curated tasting menus and live culinary sushi masterclasses in an intimate luxury setting.
              </p>
            </div>

            {booked ? (
              <div className="bg-[#45A735]/15 border border-[#45A735]/40 text-[#45A735] p-6 rounded-3xl flex items-center gap-4">
                <CheckCircle2 size={28} />
                <span className="font-extrabold text-sm text-[#24170F]">Table Reserved for {guests} on {date}!</span>
                <button onClick={() => setBooked(false)} className="text-xs text-[#FF6B35] underline font-bold ml-2">Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
                
                {/* Date Picker */}
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-xs text-[#24170F] font-bold w-full sm:w-auto shadow-xs">
                  <Calendar size={18} className="text-[#FF6B35]" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-[#24170F] text-xs font-bold"
                  />
                </div>

                {/* Time Picker */}
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-xs text-[#24170F] font-bold w-full sm:w-auto shadow-xs">
                  <Clock size={18} className="text-[#FF6B35]" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-[#24170F] text-xs font-bold"
                  />
                </div>

                {/* Guest Picker */}
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-xs text-[#24170F] font-bold w-full sm:w-auto shadow-xs">
                  <Users size={18} className="text-[#FF6B35]" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-[#24170F] text-xs font-bold"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                  </select>
                </div>

                {/* Orange Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="rounded-2xl shadow-soft shrink-0 w-full sm:w-auto px-8 py-4 font-black"
                >
                  Book A Table
                </Button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
