import React, { useState } from 'react';
import { Calendar, Star, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { GYM_DETAILS, GYM_SERVICES } from '../data/gymData';

interface HeroSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking
}) => {
  const [quickServiceId, setQuickServiceId] = useState(GYM_SERVICES[0].id);

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-zinc-800/80">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Block 1: Main Title & Brand Intro (col-span-8) */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              {/* Badges / Eyebrow */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-xs font-extrabold text-lime-400 uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-lime-400 text-lime-400" />
                  <span>4.9 / 5.0 (214 Google Reviews)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-bold text-white uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-lime-400" />
                  <span>Star Plus Mall • Nashik Road</span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase italic text-white">
                S.K.FITNESS GYM <br />
                <span className="text-lime-400 italic font-black">NASHIK ROAD</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Step into Nashik Road's top-rated fitness studio with a positive, <span className="text-white font-bold underline decoration-lime-400 decoration-2">no-judgement vibe</span>. Featuring modern well-maintained gear, certified trainers, and spotless facilities.
              </p>

              {/* Tag Pills Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border border-zinc-800">
                  ⚡ 9 Specialized Services
                </span>
                <span className="bg-lime-400 text-zinc-950 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-sm">
                  ✓ Certified Head Coach (14+ Yrs)
                </span>
                <span className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border border-zinc-800">
                  🧼 Spotless & Hygienic
                </span>
                <span className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border border-zinc-800">
                  ⏰ Open Till 10:00 PM
                </span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-zinc-800/80">
              <button
                onClick={() => onOpenBooking(quickServiceId)}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Trial Session</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappPhone}?text=Hi%20S.K.%20Fitness%20Gym,%20I%20want%20to%20inquire%20about%20membership%20and%20trial.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-lime-400 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>WhatsApp Desk ↗</span>
              </a>
            </div>
          </div>

          {/* Bento Block 2: High-Contrast Pure White Quick Booking Card (col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 text-zinc-950 shadow-2xl flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-zinc-950 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Quick Pass Booking
                </span>
                <span className="text-xs font-extrabold text-lime-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-lime-500 animate-ping"></span>
                  Instant Confirmation
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight leading-tight uppercase">
                  Reserve Your Gym Trial Slot
                </h3>
                <p className="text-xs text-zinc-600 font-medium">
                  Select a program & date to generate your digital QR entry pass.
                </p>
              </div>

              {/* Service Picker */}
              <div className="space-y-1.5 pt-2">
                <label className="block text-xs font-black uppercase text-zinc-800">Select Fitness Class</label>
                <select
                  value={quickServiceId}
                  onChange={(e) => setQuickServiceId(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-2xl bg-zinc-100 border border-zinc-300 text-xs font-bold text-zinc-900 focus:outline-none focus:ring-2 focus:ring-lime-400"
                >
                  {GYM_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.durationMinutes} mins)
                    </option>
                  ))}
                </select>
              </div>

              {/* Gym Details Snippet */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs space-y-1">
                <p className="font-extrabold text-zinc-900 flex items-center justify-between">
                  <span>Location:</span>
                  <a
                    href={GYM_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lime-600 hover:underline text-[11px]"
                  >
                    Star Plus Mall ↗
                  </a>
                </p>
                <p className="text-zinc-600 text-[11px] leading-snug">
                  Opposite NMC Office, Muktidham Road, Nashik Road
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking(quickServiceId)}
              className="w-full py-4 rounded-2xl bg-zinc-950 hover:bg-lime-400 hover:text-zinc-950 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-lime-400 group-hover:text-zinc-950" />
              <span>Confirm Trial Slot Now</span>
            </button>
          </div>

          {/* Bento Row 2: Visual Facility Card + Real-Time Stats (col-span-12 grid) */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 overflow-hidden relative group">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase text-lime-400 tracking-wider">Spotless Facility</span>
                <h3 className="text-2xl font-black text-white italic uppercase">
                  "Everyone from beginners to pros feels welcome."
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed italic">
                  Verified Google Review by Aniket Salve • Certified Cleanliness & High Performance Equipment
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                  alt="S.K.Fitness Gym Nashik Road"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-[10px] font-bold text-lime-400">
                  Open Today until 10:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Bento Row 2 Side Stats (col-span-4) */}
          <div className="lg:col-span-4 bg-lime-400 rounded-3xl p-6 text-zinc-950 border border-lime-500 flex items-center justify-around text-center shadow-lg">
            <div>
              <p className="text-3xl font-black italic">214+</p>
              <p className="text-[11px] font-extrabold uppercase">Google Reviews</p>
            </div>
            <div className="w-px h-10 bg-zinc-950/20"></div>
            <div>
              <p className="text-3xl font-black italic">9</p>
              <p className="text-[11px] font-extrabold uppercase">Services Offered</p>
            </div>
            <div className="w-px h-10 bg-zinc-950/20"></div>
            <div>
              <p className="text-3xl font-black italic">14+ Yrs</p>
              <p className="text-[11px] font-extrabold uppercase">Head Coach Exp.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

