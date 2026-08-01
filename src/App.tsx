import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TrainersSection } from './components/TrainersSection';
import { ReviewsSection } from './components/ReviewsSection';
import { MembershipSection } from './components/MembershipSection';
import { LocationContact } from './components/LocationContact';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { AIAssistantModal } from './components/AIAssistantModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { Booking } from './types';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('sk_fitness_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [myBookingsModalOpen, setMyBookingsModalOpen] = useState(false);
  const [aiCoachModalOpen, setAiCoachModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sk_fitness_bookings', JSON.stringify(bookings));
    } catch (e) {
      // ignore
    }
  }, [bookings]);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setBookingModalOpen(true);
  };

  const handleBookingConfirmed = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-400 selection:text-zinc-950 pb-16 md:pb-0">
      {/* Sticky Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenMyBookings={() => setMyBookingsModalOpen(true)}
        onOpenAICoach={() => setAiCoachModalOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
        />

        <ServicesSection onOpenBooking={handleOpenBooking} />

        <TrainersSection onOpenBooking={handleOpenBooking} />

        <ReviewsSection />

        <MembershipSection onOpenBooking={() => handleOpenBooking()} />

        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Navigation Bar */}
      <MobileBottomNav
        onOpenBooking={() => handleOpenBooking()}
        onOpenAICoach={() => setAiCoachModalOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialServiceId={selectedServiceForBooking}
        onClose={() => setBookingModalOpen(false)}
        onBookingConfirmed={handleBookingConfirmed}
      />

      <MyBookingsModal
        isOpen={myBookingsModalOpen}
        bookings={bookings}
        onClose={() => setMyBookingsModalOpen(false)}
        onCancelBooking={handleCancelBooking}
      />

      <AIAssistantModal
        isOpen={aiCoachModalOpen}
        onClose={() => setAiCoachModalOpen(false)}
        onOpenBooking={() => {
          setAiCoachModalOpen(false);
          handleOpenBooking();
        }}
      />
    </div>
  );
}

