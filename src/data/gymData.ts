import { GymService, Trainer, Review, DayPeakData, EquipmentStatus, MembershipPlan } from '../types';

export const GYM_DETAILS = {
  name: "S.K.FITNESS Gym",
  rating: 4.9,
  reviewCount: 214,
  phone: "098232 19007",
  formattedPhone: "+91 98232 19007",
  whatsappPhone: "919823219007",
  address: "205A, Star plus Mall, Road, Mahatma Gandhi Rd, opp. NMC office, near muktidham mandir, Nashik Road, Nashik, Maharashtra 422101",
  landmark: "Opp. NMC Office, Near Muktidham Mandir, Star Plus Mall",
  city: "Nashik, Maharashtra",
  timing: "Open · Closes 10 pm",
  hoursText: "Mon - Sat: 6:00 AM - 10:00 PM | Sun: 7:00 AM - 1:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=S.K.FITNESS+Gym+Star+Plus+Mall+Nashik+Road",
  latitude: 19.9534,
  longitude: 73.8322,
  reviewsSummary: "People say this gym features a wide variety of modern and well-maintained equipment, suitable for all fitness levels. They also highlight the positive and motivating atmosphere, making workouts enjoyable. Guests mention the knowledgeable and supportive staff and trainers who provide excellent guidance.",
  reviewsBreakdown: {
    5: 198,
    4: 12,
    3: 3,
    2: 1,
    1: 0
  }
};

export const GYM_SERVICES: GymService[] = [
  {
    id: "hiit-exercise",
    name: "HIIT Exercise Classes",
    category: "group",
    description: "High-Intensity Interval Training designed to burn calories, boost metabolism, and build cardiovascular endurance in rapid 45-min rounds.",
    durationMinutes: 45,
    intensity: "High Intensity",
    schedule: "Mon, Wed, Fri (7:00 AM & 6:30 PM)",
    trainerName: "Coach Sameer Pawar",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    benefits: ["Maximized Calorie Burn", "Cardiovascular Stamina", "Afterburn Fat Loss", "Group Energy"]
  },
  {
    id: "aerobics",
    name: "Aerobics & Rhythm Dance",
    category: "group",
    description: "Fun, energizing rhythmic exercise session combining aerobic movements with music for flexibility, weight management, and stamina.",
    durationMinutes: 50,
    intensity: "All Levels",
    schedule: "Tue, Thu, Sat (8:00 AM & 5:30 PM)",
    trainerName: "Coach Priya Deshmukh",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    benefits: ["Core Agility", "Mood & Energy Elevation", "Fat Reduction", "Rhythm & Tone"]
  },
  {
    id: "crossfit",
    name: "Crossfit Functional Training",
    category: "group",
    description: "Functional movements performed at high intensity, including kettlebells, rope slams, plyometrics, and Olympic lift foundations.",
    durationMinutes: 60,
    intensity: "High Intensity",
    schedule: "Daily Morning (6:30 AM) & Evening (7:00 PM)",
    trainerName: "Coach Sachin Kadam",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    benefits: ["Full-Body Functional Strength", "Explosive Power", "Agility & Core Stability", "Team Motivation"]
  },
  {
    id: "personal-training",
    name: "1-on-1 Personal Training",
    category: "personal",
    description: "Dedicated personal fitness coach with customized workout plans, posture correction, tracking, and direct accountability.",
    durationMinutes: 60,
    intensity: "Intermediate",
    schedule: "Flexible Slot Booking (6 AM - 9 PM)",
    trainerName: "Head Coach S.K. Sir & Team",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    benefits: ["Customized Meal & Workout Plan", "Faster Body Transformation", "Form Correction & Injury Safety", "100% Dedicated Attention"]
  },
  {
    id: "weight-training",
    name: "Heavy Weight & Strength Training",
    category: "specialized",
    description: "Access to top-tier plates, Olympic bars, power racks, cable stations, and guided resistance machines for hypertrophy and power.",
    durationMinutes: 75,
    intensity: "All Levels",
    schedule: "Open Access (6:00 AM - 10:00 PM)",
    trainerName: "Coach Kiran Shinde",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    benefits: ["Muscle Mass Growth", "Bone Density Enhancement", "Metabolic Surge", "Strength Benchmarks"]
  },
  {
    id: "cycling",
    name: "Spinning & Indoor Cycling",
    category: "group",
    description: "High-energy group indoor cycling studio session with motivating light beats, hill sprints, and endurance intervals.",
    durationMinutes: 45,
    intensity: "Intermediate",
    schedule: "Mon, Wed, Fri (6:00 PM & 7:30 PM)",
    trainerName: "Coach Sameer Pawar",
    iconName: "Bike",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
    benefits: ["Low-Impact Cardio", "Leg & Glute Sculpting", "Calorie Burn up to 600 kcal", "Stamina Boost"]
  },
  {
    id: "nutrition-consulting",
    name: "Nutrition & Diet Consulting",
    category: "specialized",
    description: "Science-backed diet planning tailored to your fitness goals, body composition analysis (BMR/BMI/Fat%), and vegetarian/non-veg Maharashtrian diets.",
    durationMinutes: 30,
    intensity: "Beginner",
    schedule: "Tue, Thu, Sat (10 AM - 1 PM & 5 PM - 8 PM)",
    trainerName: "Dietitian Dr. Ritu Patil",
    iconName: "Apple",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    benefits: ["Inbody Composition Scan", "Macros Calculation", "Sustainable Meal Charts", "Supplements Advice"]
  },
  {
    id: "youth-classes",
    name: "Youth Fitness & Athlete Training",
    category: "group",
    description: "Specialized fitness program for kids and teenagers (ages 10-18) focusing on athletic agility, stamina, posture, and healthy habits.",
    durationMinutes: 50,
    intensity: "Beginner",
    schedule: "Daily Evening (5:00 PM - 6:00 PM)",
    trainerName: "Coach Kiran Shinde",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    benefits: ["Better Posture & Stamina", "Sports Conditioning", "Screen-time Reduction", "Confidence Building"]
  },
  {
    id: "private-lessons",
    name: "Private Lessons & VIP Coaching",
    category: "personal",
    description: "Exclusive private studio room sessions for individuals seeking privacy, specialized rehabilitation, or bodybuilding stage prep.",
    durationMinutes: 60,
    intensity: "Intermediate",
    schedule: "By Appointment Only",
    trainerName: "Head Coach S.K. Sir",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    benefits: ["100% Private Studio", "Competition Prep / Rehab", "Custom Pace & Focus", "Discreet & Premium"]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "sk-sir",
    name: "Head Coach S.K. Sir",
    role: "Founder & Master Fitness Coach",
    experienceYears: 14,
    specialization: ["Body Transformation", "Rehabilitation", "Powerlifting", "Private Lessons"],
    bio: "Pioneer in Nashik Road fitness community. Certified Master Trainer with over 14 years experience transforming 2000+ lives in Nashik.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "sameer-pawar",
    name: "Sameer Pawar",
    role: "Crossfit & HIIT Lead Specialist",
    experienceYears: 8,
    specialization: ["Crossfit", "HIIT", "Cycling", "Endurance"],
    bio: "Energetic conditioning expert known for high-power workouts and keeping class motivation sky-high.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "priya-deshmukh",
    name: "Priya Deshmukh",
    role: "Aerobics & Women's Fitness Specialist",
    experienceYears: 6,
    specialization: ["Aerobics", "Core Sculpting", "Fat Loss", "Youth Classes"],
    bio: "Passionate aerobic instructor creating friendly, non-judgmental environments for women and beginners.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  {
    id: "kiran-shinde",
    name: "Kiran Shinde",
    role: "Strength & Hypertrophy Coach",
    experienceYears: 7,
    specialization: ["Weight Training", "Youth Fitness", "Muscle Hypertrophy"],
    bio: "Detail-oriented strength practitioner ensuring correct lifting mechanics and zero injuries.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    authorName: "Aniket Salve",
    rating: 5,
    relativeTime: "1 week ago",
    text: "What I love most is the positive, no-judgement vibe here - everyone from beginners to pros feels welcome. The facility is also spotless, which is a huge plus.",
    verifiedMember: true,
    avatarBg: "bg-amber-600"
  },
  {
    id: "r2",
    authorName: "Pooja Kulkarni",
    rating: 5,
    relativeTime: "2 weeks ago",
    text: "The facility is super clean, and the overall vibe makes you want to push harder. Trainers like SK Sir and Priya ma'am guide step by step without imposing unnecessary supplements.",
    verifiedMember: true,
    avatarBg: "bg-emerald-600"
  },
  {
    id: "r3",
    authorName: "Rohan Gaikwad",
    rating: 5,
    relativeTime: "1 month ago",
    text: "A very nice experience to workout all the trainers are really well trained. Best gym near Muktidham mandir and Nashik Road area. Equipment is modern and well maintained.",
    verifiedMember: true,
    avatarBg: "bg-blue-600"
  },
  {
    id: "r4",
    authorName: "Saurabh Jadhav",
    rating: 5,
    relativeTime: "1 month ago",
    text: "Great atmosphere, spacious cardio section, clean washrooms, and top notch Crossfit gear. Peak hours 6-8 PM are lively but you never have to wait long for equipment.",
    verifiedMember: true,
    avatarBg: "bg-purple-600"
  },
  {
    id: "r5",
    authorName: "Meenal Wagh",
    rating: 5,
    relativeTime: "2 months ago",
    text: "Aerobics and HIIT classes are super energetic! I lost 6 kg in 2 months with diet guidance from S.K. FITNESS. Highly recommended for girls and women seeking safe vibe.",
    verifiedMember: true,
    avatarBg: "bg-rose-600"
  }
];

export const POPULAR_TIMES_DATA: DayPeakData[] = [
  {
    day: "Mon",
    hours: [
      { hour: "6 AM", occupancyPercent: 70, label: "Busy (Morning Rush)" },
      { hour: "7 AM", occupancyPercent: 88, label: "Peak Hours" },
      { hour: "8 AM", occupancyPercent: 78, label: "Busy" },
      { hour: "9 AM", occupancyPercent: 55, label: "Moderate" },
      { hour: "10 AM", occupancyPercent: 30, label: "Quiet" },
      { hour: "11 AM", occupancyPercent: 20, label: "Very Quiet" },
      { hour: "12 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "1 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "2 PM", occupancyPercent: 20, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 25, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 40, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 62, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 85, label: "Usually a little busy" },
      { hour: "7 PM", occupancyPercent: 92, label: "Peak Evening Crowd" },
      { hour: "8 PM", occupancyPercent: 82, label: "Busy" },
      { hour: "9 PM", occupancyPercent: 45, label: "Winding down" }
    ]
  },
  {
    day: "Tue",
    hours: [
      { hour: "6 AM", occupancyPercent: 65, label: "Busy" },
      { hour: "7 AM", occupancyPercent: 82, label: "Peak" },
      { hour: "8 AM", occupancyPercent: 72, label: "Busy" },
      { hour: "9 AM", occupancyPercent: 50, label: "Moderate" },
      { hour: "10 AM", occupancyPercent: 28, label: "Quiet" },
      { hour: "11 AM", occupancyPercent: 18, label: "Very Quiet" },
      { hour: "12 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "1 PM", occupancyPercent: 18, label: "Very Quiet" },
      { hour: "2 PM", occupancyPercent: 22, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 28, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 38, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 58, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 80, label: "Usually a little busy" },
      { hour: "7 PM", occupancyPercent: 88, label: "Peak Evening" },
      { hour: "8 PM", occupancyPercent: 78, label: "Busy" },
      { hour: "9 PM", occupancyPercent: 40, label: "Quiet" }
    ]
  },
  {
    day: "Wed",
    hours: [
      { hour: "6 AM", occupancyPercent: 68, label: "Busy" },
      { hour: "7 AM", occupancyPercent: 85, label: "Peak" },
      { hour: "8 AM", occupancyPercent: 75, label: "Busy" },
      { hour: "9 AM", occupancyPercent: 52, label: "Moderate" },
      { hour: "10 AM", occupancyPercent: 30, label: "Quiet" },
      { hour: "11 AM", occupancyPercent: 20, label: "Very Quiet" },
      { hour: "12 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "1 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "2 PM", occupancyPercent: 20, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 25, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 42, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 60, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 82, label: "Usually a little busy" },
      { hour: "7 PM", occupancyPercent: 90, label: "Peak Evening" },
      { hour: "8 PM", occupancyPercent: 80, label: "Busy" },
      { hour: "9 PM", occupancyPercent: 42, label: "Quiet" }
    ]
  },
  {
    day: "Thu",
    hours: [
      { hour: "6 AM", occupancyPercent: 64, label: "Busy" },
      { hour: "7 AM", occupancyPercent: 80, label: "Peak" },
      { hour: "8 AM", occupancyPercent: 70, label: "Busy" },
      { hour: "9 AM", occupancyPercent: 48, label: "Moderate" },
      { hour: "10 AM", occupancyPercent: 25, label: "Quiet" },
      { hour: "11 AM", occupancyPercent: 18, label: "Very Quiet" },
      { hour: "12 PM", occupancyPercent: 14, label: "Very Quiet" },
      { hour: "1 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "2 PM", occupancyPercent: 20, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 25, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 35, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 55, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 78, label: "Usually a little busy" },
      { hour: "7 PM", occupancyPercent: 86, label: "Peak Evening" },
      { hour: "8 PM", occupancyPercent: 75, label: "Busy" },
      { hour: "9 PM", occupancyPercent: 38, label: "Quiet" }
    ]
  },
  {
    day: "Fri",
    hours: [
      { hour: "6 AM", occupancyPercent: 66, label: "Busy" },
      { hour: "7 AM", occupancyPercent: 84, label: "Peak" },
      { hour: "8 AM", occupancyPercent: 74, label: "Busy" },
      { hour: "9 AM", occupancyPercent: 50, label: "Moderate" },
      { hour: "10 AM", occupancyPercent: 28, label: "Quiet" },
      { hour: "11 AM", occupancyPercent: 18, label: "Very Quiet" },
      { hour: "12 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "1 PM", occupancyPercent: 15, label: "Very Quiet" },
      { hour: "2 PM", occupancyPercent: 18, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 22, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 38, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 58, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 82, label: "Usually a little busy" },
      { hour: "7 PM", occupancyPercent: 89, label: "Peak Evening" },
      { hour: "8 PM", occupancyPercent: 78, label: "Busy" },
      { hour: "9 PM", occupancyPercent: 40, label: "Quiet" }
    ]
  },
  {
    day: "Sat",
    hours: [
      { hour: "6 AM", occupancyPercent: 72, label: "Busy Morning" },
      { hour: "7 AM", occupancyPercent: 90, label: "Weekend Peak" },
      { hour: "8 AM", occupancyPercent: 85, label: "Peak" },
      { hour: "9 AM", occupancyPercent: 68, label: "Busy" },
      { hour: "10 AM", occupancyPercent: 45, label: "Moderate" },
      { hour: "11 AM", occupancyPercent: 30, label: "Quiet" },
      { hour: "12 PM", occupancyPercent: 22, label: "Quiet" },
      { hour: "1 PM", occupancyPercent: 20, label: "Quiet" },
      { hour: "2 PM", occupancyPercent: 25, label: "Quiet" },
      { hour: "3 PM", occupancyPercent: 30, label: "Quiet" },
      { hour: "4 PM", occupancyPercent: 45, label: "Moderate" },
      { hour: "5 PM", occupancyPercent: 65, label: "A little busy" },
      { hour: "6 PM", occupancyPercent: 80, label: "Busy" },
      { hour: "7 PM", occupancyPercent: 84, label: "Busy" },
      { hour: "8 PM", occupancyPercent: 65, label: "Moderate" },
      { hour: "9 PM", occupancyPercent: 35, label: "Quiet" }
    ]
  },
  {
    day: "Sun",
    hours: [
      { hour: "7 AM", occupancyPercent: 50, label: "Moderate" },
      { hour: "8 AM", occupancyPercent: 75, label: "Sunday Morning Rush" },
      { hour: "9 AM", occupancyPercent: 80, label: "Peak Sunday" },
      { hour: "10 AM", occupancyPercent: 70, label: "Busy" },
      { hour: "11 AM", occupancyPercent: 55, label: "Moderate" },
      { hour: "12 PM", occupancyPercent: 35, label: "Winding down" },
      { hour: "1 PM", occupancyPercent: 10, label: "Gym Closing" }
    ]
  }
];

export const EQUIPMENT_AVAILABILITY: EquipmentStatus[] = [
  { id: "e1", name: "Commercial Treadmills", category: "Cardio", total: 8, inUse: 3, status: "High Availability" },
  { id: "e2", name: "Olympic Squat Racks", category: "Strength", total: 4, inUse: 2, status: "Moderate" },
  { id: "e3", name: "Dumbbell Set (2kg - 40kg)", category: "Free Weights", total: 24, inUse: 10, status: "High Availability" },
  { id: "e4", name: "Dual Cable Crossover Machine", category: "Strength", total: 2, inUse: 1, status: "Moderate" },
  { id: "e5", name: "Crossfit Rig & Rope Slams", category: "Functional", total: 6, inUse: 1, status: "High Availability" },
  { id: "e6", name: "Spinning Indoor Bikes", category: "Cardio", total: 12, inUse: 2, status: "High Availability" },
  { id: "e7", name: "Bench Press Stations", category: "Strength", total: 5, inUse: 3, status: "Moderate" }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "1 Month Trial / Pass",
    durationMonths: 1,
    priceINR: 1800,
    originalPriceINR: 2200,
    features: [
      "Full Gym & Weight Access",
      "Standard Locker Room",
      "Free Fitness Orientation",
      "Cardio & Functional Zone"
    ]
  },
  {
    id: "quarterly",
    name: "3 Months Growth",
    durationMonths: 3,
    priceINR: 4500,
    originalPriceINR: 5400,
    popular: true,
    features: [
      "All 1 Month Benefits Included",
      "Free InBody Fat Scan (1x)",
      "1 Complementary Group HIIT Session",
      "Custom Diet Starter Blueprint",
      "Trainer Guidance On Floor"
    ]
  },
  {
    id: "half-yearly",
    name: "6 Months Transformation",
    durationMonths: 6,
    priceINR: 7800,
    originalPriceINR: 9600,
    features: [
      "Unlimited Access to Gym & Aerobics",
      "Monthly Body Composition Scans",
      "Nutritionist Diet Chart Updates",
      "Free Gym Bag / Shaker",
      "Pause Membership up to 15 days"
    ]
  },
  {
    id: "annual",
    name: "12 Months VIP Champion",
    durationMonths: 12,
    priceINR: 12500,
    originalPriceINR: 16000,
    features: [
      "Best Value (₹1041 / month)",
      "Full Access to all 9 Services",
      "2 Personal Trainer Taster Sessions",
      "Quarterly Nutritionist Reviews",
      "Free Locker & Steam Access",
      "Pause Membership up to 30 days"
    ]
  }
];
