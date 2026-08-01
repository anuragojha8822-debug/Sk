import React from 'react';
import { TRAINERS } from '../data/gymData';
import { Star, Award, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

interface TrainersSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="trainers" className="py-16 sm:py-20 bg-zinc-950 border-b border-zinc-800/80 text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest inline-block">
            Certified & Dedicated Coaches
          </span>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            MEET OUR EXPERT TRAINERS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            "All the trainers are really well trained, supportive, and knowledgeable." Led by Head Coach S.K. Sir with 14+ years experience in Nashik Road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Trainer Image */}
                <div className="relative h-64 overflow-hidden bg-zinc-950">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[10px] font-black text-lime-400 flex items-center gap-1 uppercase">
                    <Star className="w-3 h-3 fill-lime-400 text-lime-400" />
                    <span>{trainer.rating} Rating</span>
                  </div>

                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-lime-400 text-zinc-950 text-[10px] font-black uppercase shadow-sm">
                    {trainer.experienceYears}+ Yrs Exp
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-xl font-black uppercase italic text-white">{trainer.name}</h3>
                    <p className="text-xs text-lime-400 font-extrabold uppercase">{trainer.role}</p>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Specializations:</p>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-300 font-bold uppercase"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBooking('personal-training')}
                  className="w-full py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Personal Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

