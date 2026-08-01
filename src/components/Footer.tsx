import React from 'react';
import { Dumbbell, MapPin, Phone, Star, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800/80 pt-16 pb-12">
      <div className="container mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-lime-400 text-zinc-950 flex items-center justify-center font-black shadow-lg">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-black text-2xl tracking-tight uppercase italic text-white">
                S.K.FITNESS GYM
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Nashik Road's premier modern fitness studio. Featuring 9 certified programs, expert coaches, spotless equipment, and a welcoming no-judgement vibe for all fitness levels.
            </p>
            <div className="flex items-center gap-2 text-xs text-lime-400 font-extrabold uppercase">
              <span>★ 4.9 Rating based on 214 Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-bold uppercase">
              <li><a href="#services" className="hover:text-lime-400 transition-colors">Gym Services</a></li>
              <li><a href="#trainers" className="hover:text-lime-400 transition-colors">Expert Trainers</a></li>
              <li><a href="#reviews" className="hover:text-lime-400 transition-colors">Google Reviews</a></li>
              <li><a href="#membership" className="hover:text-lime-400 transition-colors">Membership Plans</a></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Services Offered</h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-zinc-400 font-medium">
              <li>• HIIT Exercise Classes</li>
              <li>• Aerobics & Rhythm Dance</li>
              <li>• CrossFit Functional Training</li>
              <li>• 1-on-1 Personal Training</li>
              <li>• Heavy Weight & Power Training</li>
              <li>• Indoor Spinning & Cycling</li>
              <li>• Nutrition & Diet Consulting</li>
              <li>• Youth Fitness Classes</li>
              <li>• Private Lessons & VIP Prep</li>
            </ul>
          </div>

          {/* Location & Desk Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Address & Desk</h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span className="font-medium">{GYM_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <a href={`tel:${GYM_DETAILS.phone}`} className="font-black text-lime-400 hover:underline">
                  {GYM_DETAILS.phone}
                </a>
              </p>
              <p className="text-[11px] text-zinc-400 pt-1 font-mono">
                ⏰ Mon-Sat: 6 AM - 10 PM | Sun: 7 AM - 1 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} S.K.FITNESS Gym Nashik Road. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400 font-bold uppercase text-[11px]">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              Hygiene Certified Facility
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-lime-400 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

