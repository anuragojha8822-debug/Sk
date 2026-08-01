import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GYM_SERVICES, TRAINERS, GYM_DETAILS } from '../data/gymData';
import { Booking } from '../types';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, QrCode, X, Sparkles, Download, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  onClose: () => void;
  onBookingConfirmed: (newBooking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialServiceId,
  onClose,
  onBookingConfirmed
}) => {
  const [step, setStep] = useState<1 | 2>(1); // 1 = Form, 2 = Confirmation Pass
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || GYM_SERVICES[0].id
  );
  const [trainerName, setTrainerName] = useState<string>('Head Coach S.K. Sir');
  const [bookingType, setBookingType] = useState<'Free Trial' | 'Member Session' | 'Personal Training Pass'>('Free Trial');
  const [bookingDate, setBookingDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [timeSlot, setTimeSlot] = useState<string>('7:00 AM (Morning Peak)');
  const [memberName, setMemberName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentService = GYM_SERVICES.find((s) => s.id === selectedServiceId) || GYM_SERVICES[0];

  const timeSlots = [
    { slot: "6:00 AM", crowd: "Busy Morning Rush", isPeak: true },
    { slot: "7:00 AM (Morning Peak)", crowd: "Peak Morning Hours", isPeak: true },
    { slot: "8:30 AM", crowd: "Moderate Crowd", isPeak: false },
    { slot: "10:30 AM (Quiet Slot)", crowd: "Quiet & Ideal", isPeak: false },
    { slot: "1:00 PM (Quiet Slot)", crowd: "Quiet & Ideal", isPeak: false },
    { slot: "5:00 PM", crowd: "Moderate Crowd", isPeak: false },
    { slot: "6:30 PM (Evening Peak)", crowd: "Peak Evening Hours", isPeak: true },
    { slot: "8:00 PM", crowd: "Winding Down", isPeak: false }
  ];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !phone) return;

    const qrVal = `SKFIT-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      serviceId: currentService.id,
      serviceName: currentService.name,
      memberName,
      phone,
      email,
      date: bookingDate,
      timeSlot,
      trainerName,
      bookingType,
      status: 'Confirmed',
      qrCodeValue: qrVal,
      createdAt: new Date().toLocaleDateString(),
      notes
    };

    setCreatedBooking(newBooking);
    onBookingConfirmed(newBooking);
    setStep(2);

    // Trigger confetti celebrating booking!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl relative text-white">
        {/* Top Header Bar with Back & Close */}
        <div className="flex items-center justify-between p-4 px-6 sm:px-8 border-b border-zinc-800 bg-zinc-900/60">
          <button
            type="button"
            onClick={() => {
              if (step === 2) {
                setStep(1);
              } else {
                onClose();
              }
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-black uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-lime-400" />
            <span>{step === 2 ? 'Back to Form' : 'Back'}</span>
          </button>

          <span className="text-[11px] font-black uppercase text-zinc-400 tracking-wider">
            {step === 1 ? 'Step 1 of 2: Booking Form' : 'Step 2 of 2: Confirmed Ticket'}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmitBooking} className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Instant Gym Pass Booking</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tight">
                SCHEDULE WORKOUT AT S.K.FITNESS
              </h2>
              <p className="text-xs text-zinc-400">
                Book a free trial or member workout pass. Instant QR ticket generated.
              </p>
            </div>

            {/* Select Pass Type */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <button
                type="button"
                onClick={() => setBookingType('Free Trial')}
                className={`py-2.5 rounded-full text-xs font-black uppercase transition-all ${
                  bookingType === 'Free Trial'
                    ? 'bg-lime-400 text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                🎁 Free Day Trial
              </button>
              <button
                type="button"
                onClick={() => setBookingType('Member Session')}
                className={`py-2.5 rounded-full text-xs font-black uppercase transition-all ${
                  bookingType === 'Member Session'
                    ? 'bg-lime-400 text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                💪 Member Slot
              </button>
              <button
                type="button"
                onClick={() => setBookingType('Personal Training Pass')}
                className={`py-2.5 rounded-full text-xs font-black uppercase transition-all ${
                  bookingType === 'Personal Training Pass'
                    ? 'bg-lime-400 text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                👑 1-on-1 PT Pass
              </button>
            </div>

            {/* Select Service */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase text-zinc-300">Choose Service / Program *</label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-white focus:outline-none focus:border-lime-400"
              >
                {GYM_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.name} ({srv.durationMinutes} mins - {srv.intensity})
                  </option>
                ))}
              </select>
            </div>

            {/* Trainer Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase text-zinc-300">Select Trainer / Instructor</label>
              <select
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-lime-400"
              >
                <option value="Head Coach S.K. Sir">Head Coach S.K. Sir (14+ Yrs Exp)</option>
                <option value="Coach Sameer Pawar">Coach Sameer Pawar (Crossfit & HIIT)</option>
                <option value="Coach Priya Deshmukh">Coach Priya Deshmukh (Aerobics Lead)</option>
                <option value="Coach Kiran Shinde">Coach Kiran Shinde (Strength & Hypertrophy)</option>
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase text-zinc-300">Workout Date *</label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-lime-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase text-zinc-300">Time Slot *</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-white focus:outline-none focus:border-lime-400"
                >
                  {timeSlots.map((ts, idx) => (
                    <option key={idx} value={ts.slot}>
                      {ts.slot} [{ts.crowd}]
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase text-zinc-300">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase text-zinc-300">Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098232 19007"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase text-zinc-300">Fitness Goals (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Weight loss, posture improvement, beginner level..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="py-4 px-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider border border-zinc-800 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-lime-400" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="flex-1 py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm & Generate Gym Pass QR Ticket</span>
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Confirmation Pass Ticket */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-400 text-zinc-950 font-black mx-auto animate-bounce shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="px-3.5 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[11px] font-black uppercase tracking-wider">
                Booking Confirmed!
              </span>
              <h3 className="text-2xl font-black uppercase italic text-white pt-2">
                YOUR S.K.FITNESS GYM PASS
              </h3>
              <p className="text-xs text-zinc-400">
                Present this QR code ticket at Star Plus Mall desk upon arrival.
              </p>
            </div>

            {/* Visual Gym Ticket Pass */}
            {createdBooking && (
              <div className="bg-zinc-900 border-2 border-lime-400 rounded-3xl p-6 text-left space-y-4 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div>
                    <span className="font-black text-lg text-white uppercase italic">S.K.FITNESS GYM</span>
                    <p className="text-[10px] text-zinc-400 font-medium">Nashik Road • Star Plus Mall</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-lime-400 text-zinc-950 font-black text-xs uppercase">
                    {createdBooking.bookingType}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase font-black">Member Name</span>
                    <span className="font-extrabold text-white">{createdBooking.memberName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase font-black">Service</span>
                    <span className="font-extrabold text-lime-400">{createdBooking.serviceName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase font-black">Date & Time</span>
                    <span className="font-bold text-white">{createdBooking.date} @ {createdBooking.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase font-black">Assigned Trainer</span>
                    <span className="font-bold text-zinc-200">{createdBooking.trainerName}</span>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase font-black">PASS ID:</span>
                    <p className="font-mono font-black text-lime-400 text-sm tracking-wider">
                      {createdBooking.qrCodeValue}
                    </p>
                    <p className="text-[10px] text-lime-400 font-bold">✓ Synchronized with Gym Desk</p>
                  </div>
                  <div className="w-16 h-16 bg-white p-1.5 rounded-2xl flex items-center justify-center shrink-0 shadow">
                    <QrCode className="w-full h-full text-zinc-950" />
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3.5 px-6 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider border border-zinc-800 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-lime-400" />
                <span>Back to Edit</span>
              </button>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappPhone}?text=Hi%20S.K.%20Fitness,%20I%20have%20booked%20${encodeURIComponent(createdBooking?.serviceName || '')}%20for%20${encodeURIComponent(createdBooking?.date || '')}%20@%20${encodeURIComponent(createdBooking?.timeSlot || '')}.%20Pass%20ID:%20${createdBooking?.qrCodeValue}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send Pass to WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase"
              >
                Done / View My Passes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

