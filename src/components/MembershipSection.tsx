import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, Flame, Sparkles, Tag } from 'lucide-react';

interface MembershipSectionProps {
  onOpenBooking: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenBooking }) => {
  const [isStudentDiscount, setIsStudentDiscount] = useState(false);

  const calculatePrice = (basePrice: number) => {
    if (isStudentDiscount) {
      return Math.round(basePrice * 0.9); // 10% OFF
    }
    return basePrice;
  };

  return (
    <section id="membership" className="py-16 sm:py-20 bg-zinc-950 border-b border-zinc-800/80 text-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest inline-block">
            Transparent Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            JOIN S.K.FITNESS GYM TODAY
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Zero hidden admission fees. All plans include floor trainer guidance, locker access, and clean shower rooms.
          </p>

          {/* Student & Couple Discount Toggle */}
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-2 rounded-full mt-4">
            <span className="text-xs font-bold text-zinc-300 pl-3 uppercase">Student / Couple Discount:</span>
            <button
              onClick={() => setIsStudentDiscount(!isStudentDiscount)}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase transition-all flex items-center gap-1.5 ${
                isStudentDiscount
                  ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{isStudentDiscount ? '10% OFF Applied!' : 'Apply 10% OFF'}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => {
            const finalPrice = calculatePrice(plan.priceINR);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative border ${
                  isPopular
                    ? 'bg-white text-zinc-950 border-0 shadow-2xl scale-105 z-10'
                    : 'bg-zinc-900 border-zinc-800 text-white hover:border-lime-400/50 shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-zinc-950 text-[10px] font-black uppercase tracking-wider shadow-lg">
                    🔥 Most Popular Plan
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase italic">{plan.name}</h3>
                    <p className={`text-xs font-bold uppercase ${isPopular ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      {plan.durationMonths} Month{plan.durationMonths > 1 ? 's' : ''} Membership
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black italic tracking-tight">₹{finalPrice.toLocaleString()}</span>
                      <span className={`text-xs line-through ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>₹{plan.originalPriceINR.toLocaleString()}</span>
                    </div>
                    {isStudentDiscount && (
                      <p className={`text-[10px] font-black uppercase ${isPopular ? 'text-lime-700' : 'text-lime-400'}`}>
                        Includes 10% Savings
                      </p>
                    )}
                  </div>

                  {/* Feature check list */}
                  <div className={`space-y-2 pt-3 border-t text-xs ${isPopular ? 'border-zinc-200' : 'border-zinc-800'}`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>Included Perks:</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-lime-600' : 'text-lime-400'}`} />
                        <span className={`leading-tight font-medium ${isPopular ? 'text-zinc-800' : 'text-zinc-300'}`}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-lg transition-all ${
                      isPopular
                        ? 'bg-zinc-950 hover:bg-lime-400 hover:text-zinc-950 text-white'
                        : 'bg-lime-400 hover:bg-lime-300 text-zinc-950'
                    }`}
                  >
                    Select Plan & Book Trial
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

