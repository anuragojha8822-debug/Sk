import React from 'react';
import { Booking } from '../types';
import { Ticket, QrCode, Calendar, Clock, Trash2, X, CheckCircle2, ArrowLeft } from 'lucide-react';

interface MyBookingsModalProps {
  isOpen: boolean;
  bookings: Booking[];
  onClose: () => void;
  onCancelBooking: (id: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  bookings,
  onClose,
  onCancelBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 my-8 shadow-2xl relative text-white space-y-6">
        {/* Top Header Bar with Back and Close */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-xs font-black uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-lime-400" />
            <span>Back</span>
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3.5 rounded-2xl bg-lime-400 text-zinc-950 font-black">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase italic">MY GYM PASSES & BOOKINGS</h2>
            <p className="text-xs text-zinc-400">Active appointment tickets at S.K.FITNESS Gym Nashik Road</p>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="p-8 text-center rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3">
            <Ticket className="w-10 h-10 text-zinc-600 mx-auto" />
            <p className="text-xs font-black uppercase text-zinc-300">No active passes found</p>
            <p className="text-[11px] text-zinc-500 font-medium">Book a free trial or class session to generate your QR ticket pass.</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-lime-400 text-zinc-950 text-[10px] font-black uppercase">
                    {b.bookingType}
                  </span>
                  <span className="text-[10px] font-mono text-lime-400 font-black">
                    ID: {b.qrCodeValue}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black uppercase italic text-white">{b.serviceName}</h3>
                  <p className="text-xs text-zinc-400 font-medium">Trainer: {b.trainerName}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-black block">Member Name</span>
                    <span className="font-extrabold text-white">{b.memberName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-black block">Date & Time</span>
                    <span className="font-bold text-lime-400">{b.date} @ {b.timeSlot}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="flex items-center gap-1 text-[11px] text-lime-400 font-black uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Status: {b.status}
                  </span>

                  <button
                    onClick={() => onCancelBooking(b.id)}
                    className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-zinc-950 hover:bg-rose-950/80 border border-zinc-800 hover:border-rose-800 text-[11px] font-bold text-zinc-400 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Cancel Pass</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

