import React, { useState } from 'react';
import { Dumbbell, Calendar, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMyBookings: () => void;
  onOpenAICoach: () => void;
  bookingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  onOpenAICoach,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 text-white">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-lime-400 flex items-center justify-center text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)] group-hover:scale-105 transition-transform">
            <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg sm:text-xl tracking-tighter uppercase italic text-white">
                S.K.FITNESS
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-lime-400 text-zinc-950 font-extrabold uppercase tracking-widest">
                GYM
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Star Plus Mall • Nashik Road</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
          <a href="#services" className="hover:text-lime-400 transition-colors">Services</a>
          <a href="#trainers" className="hover:text-lime-400 transition-colors">Trainers</a>
          <a href="#reviews" className="hover:text-lime-400 transition-colors">Reviews</a>
          <a href="#membership" className="hover:text-lime-400 transition-colors">Plans</a>
          <a href="#location" className="hover:text-lime-400 transition-colors">Location</a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2">
          {/* AI Fitness Coach Button */}
          <button
            onClick={onOpenAICoach}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-lime-400 transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
            <span>AI Coach</span>
          </button>

          {/* Book Session CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-white hover:bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Free Trial</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-zinc-300 font-bold hover:bg-zinc-800 border border-zinc-800/80"
            >
              💪 Services & Classes
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-zinc-300 font-bold hover:bg-zinc-800 border border-zinc-800/80"
            >
              🏋️ Expert Trainers
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-zinc-300 font-bold hover:bg-zinc-800 border border-zinc-800/80"
            >
              ⭐ Member Reviews
            </a>
            <a
              href="#membership"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-zinc-300 font-bold hover:bg-zinc-800 border border-zinc-800/80"
            >
              🏷️ Plans & Pricing
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-zinc-300 font-bold hover:bg-zinc-800 border border-zinc-800/80"
            >
              📍 Location & Contact
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMyBookings();
              }}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 text-xs text-lime-400 font-bold hover:bg-zinc-800 border border-zinc-800/80 flex items-center justify-between"
            >
              <span>🎟️ My Passes</span>
              {bookingCount > 0 && (
                <span className="bg-lime-400 text-zinc-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                  {bookingCount}
                </span>
              )}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAICoach();
              }}
              className="w-full py-3 rounded-full bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask S.K. AI Fitness Coach</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

