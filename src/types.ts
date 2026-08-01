export interface GymService {
  id: string;
  name: string;
  category: 'group' | 'personal' | 'specialized';
  description: string;
  durationMinutes: number;
  intensity: 'Beginner' | 'Intermediate' | 'High Intensity' | 'All Levels';
  schedule: string;
  trainerName: string;
  iconName: string;
  image: string;
  benefits: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialization: string[];
  bio: string;
  rating: number;
  image: string;
  availableDays: string[];
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  memberName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  trainerName?: string;
  bookingType: 'Free Trial' | 'Member Session' | 'Personal Training Pass';
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  qrCodeValue: string;
  createdAt: string;
  notes?: string;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  relativeTime: string;
  text: string;
  verifiedMember: boolean;
  avatarBg: string;
}

export interface HourlyData {
  hour: string; // e.g., '6 AM', '7 AM'
  occupancyPercent: number;
  label: string; // 'Usually quiet', 'Usually a little busy', 'Usually busy', 'Peak'
}

export interface DayPeakData {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  hours: HourlyData[];
}

export interface EquipmentStatus {
  id: string;
  name: string;
  category: 'Cardio' | 'Strength' | 'Free Weights' | 'Functional';
  total: number;
  inUse: number;
  status: 'High Availability' | 'Moderate' | 'Nearly Full';
}

export interface MembershipPlan {
  id: string;
  name: string;
  durationMonths: number;
  priceINR: number;
  originalPriceINR: number;
  popular?: boolean;
  features: string[];
}
