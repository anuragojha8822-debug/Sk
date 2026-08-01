import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, Clock, Mail, Send, ExternalLink, CheckCircle2 } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMsg('');
    }, 4000);
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-zinc-950 border-b border-zinc-800/80 text-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest inline-block">
            Convenient Location & Hours
          </span>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            VISIT S.K.FITNESS GYM
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Located right opposite the NMC Office near Muktidham Mandir at Star Plus Mall, Nashik Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6 shadow-2xl">
              {/* Address Box */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-lime-400 text-zinc-950 shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black uppercase italic text-white">Full Address</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-lime-400 font-extrabold uppercase pt-1">
                    Landmark: {GYM_DETAILS.landmark}
                  </p>
                </div>
              </div>

              {/* Phone & Hours Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-zinc-400">
                    <Phone className="w-4 h-4 text-lime-400" />
                    <span>Call Gym Directly</span>
                  </div>
                  <a
                    href={`tel:${GYM_DETAILS.phone}`}
                    className="text-base font-black text-lime-400 hover:underline block"
                  >
                    {GYM_DETAILS.phone}
                  </a>
                  <p className="text-[10px] text-zinc-500 font-medium">Tap to call desk instantly</p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-zinc-400">
                    <Clock className="w-4 h-4 text-lime-400" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs font-black text-white">Mon-Sat: 6:00 AM - 10:00 PM</p>
                  <p className="text-[11px] text-zinc-400 font-medium">Sun: 7:00 AM - 1:00 PM</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Maps Navigation</span>
                </a>

                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="py-3.5 px-5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-lime-400" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

            {/* Simulated Google Map View Frame */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 h-56 relative shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Map representation of Star Plus Mall Nashik Road"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 space-y-2">
                <div className="p-3 rounded-full bg-lime-400 text-zinc-950 shadow-2xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-base font-black uppercase italic text-white drop-shadow">S.K.FITNESS Gym Nashik Road</p>
                <p className="text-xs text-zinc-300 font-medium drop-shadow">Opposite NMC Office, Star Plus Mall</p>
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-700 text-xs font-black uppercase text-lime-400 hover:underline"
                >
                  Open Full Directions ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Inquiry Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-black uppercase italic text-white">Have Questions? Send Direct Inquiry</h3>
              <p className="text-xs text-zinc-400">Our desk manager will respond to your query or callback within 30 mins.</p>
            </div>

            {sent ? (
              <div className="p-6 rounded-2xl bg-lime-400/20 border border-lime-400/40 text-lime-400 text-xs space-y-2 text-center font-bold">
                <CheckCircle2 className="w-8 h-8 mx-auto text-lime-400" />
                <p className="font-black text-base uppercase">Inquiry Received!</p>
                <p>Thank you {inquiryName}! S.K.FITNESS desk team will contact you at {inquiryPhone} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase text-zinc-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sameer Patil"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-zinc-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 098232 19007"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-zinc-300 mb-1">What would you like to ask about?</label>
                  <textarea
                    rows={3}
                    placeholder="Inquire about personal training fees, HIIT class timings, or diet plans..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry To Gym Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

