import React, { useState } from 'react';
import { GYM_SERVICES } from '../data/gymData';
import { GymService } from '../types';
import { Zap, Activity, Dumbbell, UserCheck, Flame, Bike, Apple, Smile, ShieldCheck, Clock, Calendar, CheckCircle2, Search, ArrowRight, X, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'group' | 'personal' | 'specialized'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailService, setActiveDetailService] = useState<GymService | null>(null);

  const filteredServices = GYM_SERVICES.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-lime-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-lime-400" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-lime-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-lime-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-lime-400" />;
      case 'Bike': return <Bike className="w-5 h-5 text-lime-400" />;
      case 'Apple': return <Apple className="w-5 h-5 text-lime-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-lime-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-lime-400" />;
      default: return <Dumbbell className="w-5 h-5 text-lime-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-zinc-950 border-b border-zinc-800/80 text-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest inline-block">
              9 Certified Fitness Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
              GYM SERVICES & CLASSES
            </h2>
            <p className="text-zinc-400 text-sm">
              From high-intensity group calorie burning to 1-on-1 personal coaching & youth fitness — structured for all Nashik Road gym members.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search classes, HIIT, Crossfit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Programs (9)
          </button>
          <button
            onClick={() => setSelectedCategory('group')}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'group'
                ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            🔥 Group Workouts
          </button>
          <button
            onClick={() => setSelectedCategory('personal')}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'personal'
                ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            👑 Personal Coaching
          </button>
          <button
            onClick={() => setSelectedCategory('specialized')}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === 'specialized'
                ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            🏋️ Strength & Nutrition
          </button>
        </div>

        {/* Services Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative border ${
                  isFeatured
                    ? 'bg-white text-zinc-950 border-0 shadow-2xl'
                    : 'bg-zinc-900 border-zinc-800 text-white hover:border-lime-400/50 shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  {/* Image & Badges */}
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="p-2.5 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                        {getServiceIcon(service.iconName)}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[10px] font-black uppercase text-lime-400">
                        {service.intensity}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300">
                      <span className="flex items-center gap-1 font-bold">
                        <Clock className="w-3.5 h-3.5 text-lime-400" />
                        {service.durationMinutes} mins
                      </span>
                      <span className="text-zinc-400 font-medium">{service.trainerName}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight italic">
                      {service.name}
                    </h3>
                    <p className={`text-xs line-clamp-2 leading-relaxed ${isFeatured ? 'text-zinc-700' : 'text-zinc-400'}`}>
                      {service.description}
                    </p>

                    <div className={`p-3 rounded-2xl border text-xs space-y-1 ${isFeatured ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-950 border-zinc-800'}`}>
                      <p className={`text-[10px] font-black uppercase tracking-widest ${isFeatured ? 'text-zinc-700' : 'text-zinc-400'}`}>Schedule:</p>
                      <p className={`font-bold ${isFeatured ? 'text-zinc-950' : 'text-lime-400'}`}>{service.schedule}</p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1.5 pt-2">
                      <p className={`text-[10px] font-black uppercase tracking-widest ${isFeatured ? 'text-zinc-700' : 'text-zinc-400'}`}>Key Benefits:</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {service.benefits.slice(0, 4).map((b, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isFeatured ? 'text-lime-600' : 'text-lime-400'}`} />
                            <span className={`truncate ${isFeatured ? 'text-zinc-800 font-medium' : 'text-zinc-300'}`}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveDetailService(service)}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase transition-colors border ${
                      isFeatured
                        ? 'bg-zinc-100 text-zinc-900 border-zinc-300 hover:bg-zinc-200'
                        : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:text-white'
                    }`}
                  >
                    Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className={`w-full py-3 rounded-full font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-lg ${
                      isFeatured
                        ? 'bg-zinc-950 hover:bg-lime-400 hover:text-zinc-950 text-white'
                        : 'bg-lime-400 hover:bg-lime-300 text-zinc-950'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Pass</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        {activeDetailService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setActiveDetailService(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-700 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-52 bg-zinc-900">
                <img
                  src={activeDetailService.image}
                  alt={activeDetailService.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-lime-400 text-zinc-950 font-black text-[10px] uppercase tracking-wider">
                    {activeDetailService.category}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white italic mt-1">{activeDetailService.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeDetailService.description}
                </p>

                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs">
                  <div>
                    <p className="text-zinc-500 font-bold uppercase text-[10px]">Duration:</p>
                    <p className="font-extrabold text-white">{activeDetailService.durationMinutes} Minutes</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 font-bold uppercase text-[10px]">Intensity:</p>
                    <p className="font-extrabold text-lime-400">{activeDetailService.intensity}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 font-bold uppercase text-[10px]">Coach:</p>
                    <p className="font-extrabold text-white">{activeDetailService.trainerName}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 font-bold uppercase text-[10px]">Schedule:</p>
                    <p className="font-extrabold text-lime-400">{activeDetailService.schedule}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Program Benefits:</h4>
                  <ul className="space-y-1.5">
                    {activeDetailService.benefits.map((b, idx) => (
                      <li key={idx} className="text-xs text-zinc-200 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const id = activeDetailService.id;
                      setActiveDetailService(null);
                      onOpenBooking(id);
                    }}
                    className="w-full py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Proceed to Book Session Pass</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

