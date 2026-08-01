import React from 'react';
import { Home, Calendar, Sparkles, PhoneCall } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
  onOpenAICoach: () => void;
  bookingCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenBooking,
  onOpenAICoach,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800/90 px-3 py-2 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-4 gap-1 text-center items-center">
        {/* Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center py-1 text-zinc-400 hover:text-white transition-colors active:scale-95"
        >
          <Home className="w-5 h-5 text-zinc-400" />
          <span className="text-[10px] font-bold uppercase tracking-tight mt-1">Home</span>
        </button>

        {/* Main CTA: Book Free Trial Pass */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center -mt-5"
        >
          <div className="w-12 h-12 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center font-black shadow-[0_0_20px_rgba(163,230,53,0.5)] border-2 border-zinc-950 active:scale-95 transition-transform">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase text-lime-400 tracking-tight mt-0.5">Book Pass</span>
        </button>

        {/* AI Fitness Coach */}
        <button
          onClick={onOpenAICoach}
          className="flex flex-col items-center justify-center py-1 text-zinc-400 hover:text-white transition-colors active:scale-95"
        >
          <Sparkles className="w-5 h-5 text-lime-400" />
          <span className="text-[10px] font-bold uppercase tracking-tight mt-1 text-zinc-300">AI Coach</span>
        </button>

        {/* Direct Call Gym */}
        <a
          href={`tel:${GYM_DETAILS.phone}`}
          className="flex flex-col items-center justify-center py-1 text-zinc-400 hover:text-white transition-colors active:scale-95"
        >
          <PhoneCall className="w-5 h-5 text-lime-400" />
          <span className="text-[10px] font-bold uppercase tracking-tight mt-1 text-zinc-300">Call Desk</span>
        </a>
      </div>
    </div>
  );
};
