// Mock data for Hotel O Secret Heaven

// Facade Images (6)
export const facadeImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  url: `/images/facade-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Hotel Facade View ${i + 1}`
}));

// Room Images (28)
export const roomImages = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  url: `/images/room-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Room ${i + 1}`,
  category: i < 10 ? 'Deluxe' : i < 20 ? 'Suite' : 'Presidential'
}));

// Lobby Images (18)
export const lobbyImages = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  url: `/images/lobby-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Lobby View ${i + 1}`
}));

// Reception Images (8)
export const receptionImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  url: `/images/reception-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Reception Area ${i + 1}`
}));

// Entrance Images (6)
export const entranceImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  url: `/images/entrance-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Entrance ${i + 1}`
}));

// Washroom Images (5)
export const washroomImages = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  url: `/images/washroom-${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Washroom ${i + 1}`
}));

// Photo Showcase - Mixed images from different categories (30 images for masonry)
export const photoShowcase = [
  ...facadeImages.slice(0, 3),
  ...roomImages.slice(0, 8),
  ...lobbyImages.slice(0, 6),
  ...receptionImages.slice(0, 4),
  ...entranceImages.slice(0, 3),
  ...roomImages.slice(8, 14),
  ...lobbyImages.slice(6, 10)
].map((img, index) => ({ ...img, id: index + 1 }));

// Room Types - 3 different categories with detailed information
export const roomTypes = [
  {
    id: 1,
    name: "Deluxe Room",
    category: "Deluxe",
    description: "Experience comfort and elegance in our spacious deluxe rooms with modern amenities and contemporary design",
    price: 2499,
    images: [
      `/images/room-01.jpg`,
      `/images/room-02.jpg`,
      `/images/room-03.jpg`,
      `/images/room-04.jpg`,
      `/images/room-05.jpg`,
      `/images/room-06.jpg`
    ],
    size: "350 sq ft",
    guests: 2,
    bedType: "King Size Bed",
    amenities: [
      { name: "King Size Bed", icon: "bed", description: "Luxurious king-size bed with premium mattress" },
      { name: "Free Wi-Fi", icon: "wifi", description: "High-speed internet connectivity" },
      { name: "Smart TV", icon: "tv", description: "55-inch 4K Smart TV with streaming services" },
      { name: "Air Conditioning", icon: "ac", description: "Individual climate control" },
      { name: "Mini Bar", icon: "wine", description: "Stocked with premium beverages" },
      { name: "City View", icon: "building", description: "Panoramic city skyline views" },
      { name: "Work Desk", icon: "desk", description: "Spacious desk with ergonomic chair" },
      { name: "Coffee Maker", icon: "coffee", description: "Complimentary coffee and tea" },
      { name: "Safe Deposit", icon: "lock", description: "In-room electronic safe" },
      { name: "Bathroom Amenities", icon: "shower", description: "Premium toiletries and rainfall shower" }
    ],
    features: [
      "24/7 Room Service",
      "Daily Housekeeping",
      "Complimentary Breakfast",
      "Free Parking",
      "Airport Shuttle Service"
    ],
    availableRooms: 10
  },
  {
    id: 2,
    name: "Executive Suite",
    category: "Suite",
    description: "Indulge in luxury with separate living areas, premium furnishings, and enhanced amenities for the discerning traveler",
    price: 4199,
    images: [
      `/images/room-11.jpg`,
      `/images/room-12.jpg`,
      `/images/room-13.jpg`,
      `/images/room-14.jpg`,
      `/images/room-15.jpg`,
      `/images/room-16.jpg`,
      `/images/room-17.jpg`,
      `/images/room-18.jpg`
    ],
    size: "550 sq ft",
    guests: 3,
    bedType: "King Bed + Sofa Bed",
    amenities: [
      { name: "Separate Living Room", icon: "sofa", description: "Spacious living area with luxury seating" },
      { name: "King Size Bed", icon: "bed", description: "Premium king bed with luxury linens" },
      { name: "Work Desk & Chair", icon: "desk", description: "Executive workspace with office amenities" },
      { name: "Premium Bathroom", icon: "bath", description: "Marble bathroom with bathtub and rainfall shower" },
      { name: "Private Balcony", icon: "balcony", description: "Furnished balcony with stunning views" },
      { name: "Air Conditioning", icon: "ac", description: "Dual-zone climate control" },
      { name: "Smart TV (2)", icon: "tv", description: "65-inch TVs in bedroom and living room" },
      { name: "Mini Bar & Fridge", icon: "fridge", description: "Full-size refrigerator and premium bar" },
      { name: "Espresso Machine", icon: "coffee", description: "Nespresso machine with selection of pods" },
      { name: "Free Wi-Fi", icon: "wifi", description: "Ultra-high-speed internet" },
      { name: "Walk-in Closet", icon: "closet", description: "Spacious wardrobe with safe" },
      { name: "Premium Amenities", icon: "star", description: "Luxury toiletries and bathrobes" }
    ],
    features: [
      "Priority Check-in/Check-out",
      "Complimentary Breakfast & Evening Cocktails",
      "Butler Service Available",
      "Access to Executive Lounge",
      "Free Laundry (up to 5 items/day)",
      "Late Check-out (subject to availability)"
    ],
    availableRooms: 10
  },
  {
    id: 3,
    name: "Presidential Suite",
    category: "Presidential",
    description: "The ultimate in luxury and sophistication with panoramic views, exclusive amenities, and personalized butler service",
    price: 8499,
    images: [
      `/images/room-21.jpg`,
      `/images/room-22.jpg`,
      `/images/room-23.jpg`,
      `/images/room-24.jpg`,
      `/images/room-25.jpg`,
      `/images/room-26.jpg`,
      `/images/room-27.jpg`,
      `/images/room-28.jpg`
    ],
    size: "1200 sq ft",
    guests: 4,
    bedType: "King Bed + 2 Twin Beds",
    amenities: [
      { name: "Master Bedroom Suite", icon: "bed", description: "Luxurious master bedroom with king bed" },
      { name: "Second Bedroom", icon: "bed", description: "Additional bedroom with twin beds" },
      { name: "Grand Living Room", icon: "sofa", description: "Expansive living area with luxury furnishings" },
      { name: "Dining Area", icon: "dining", description: "Formal dining table for 6 guests" },
      { name: "Butler Service", icon: "butler", description: "24/7 dedicated butler service" },
      { name: "Premium Amenities", icon: "star", description: "Luxury toiletries, robes, and slippers" },
      { name: "Panoramic Ocean View", icon: "view", description: "Floor-to-ceiling windows with breathtaking views" },
      { name: "Private Terrace", icon: "terrace", description: "Spacious outdoor terrace with seating" },
      { name: "Two Bathrooms", icon: "bath", description: "Master bath with jacuzzi and guest bathroom" },
      { name: "Kitchen Bar", icon: "kitchen", description: "Kitchenette with premium appliances" },
      { name: "Entertainment System", icon: "tv", description: "75-inch 8K TV with surround sound" },
      { name: "Air Conditioning", icon: "ac", description: "Multi-zone climate control system" },
      { name: "Free Wi-Fi", icon: "wifi", description: "Dedicated high-speed fiber connection" },
      { name: "Grand Piano", icon: "piano", description: "Baby grand piano (upon request)" },
      { name: "Meeting Room", icon: "meeting", description: "Small conference area with video conferencing" }
    ],
    features: [
      "VIP Check-in/Check-out in Suite",
      "All Meals Included (In-room or Restaurant)",
      "24/7 Dedicated Butler & Concierge",
      "Complimentary Spa Treatment (2 per stay)",
      "Chauffeur Service within City",
      "Personal Chef Available",
      "Unlimited Laundry & Dry Cleaning",
      "Access to All Hotel Facilities"
    ],
    availableRooms: 8
  },
  {
    id: 4,
    name: "Family Suite",
    category: "Family",
    description: "Perfect for families with spacious accommodations, connecting rooms, and kid-friendly amenities",
    price: 5499,
    images: [
      `/images/room-07.jpg`,
      `/images/room-08.jpg`,
      `/images/room-09.jpg`,
      `/images/room-10.jpg`,
      `/images/room-19.jpg`,
      `/images/room-20.jpg`
    ],
    size: "750 sq ft",
    guests: 5,
    bedType: "King Bed + 2 Bunk Beds",
    amenities: [
      { name: "Master Bedroom", icon: "bed", description: "Separate master bedroom with king bed" },
      { name: "Kids Room", icon: "bed", description: "Fun kids room with bunk beds" },
      { name: "Living Area", icon: "sofa", description: "Family living space with entertainment" },
      { name: "Two Bathrooms", icon: "bath", description: "Master and family bathrooms" },
      { name: "Kitchenette", icon: "kitchen", description: "Microwave, fridge, and dining area" },
      { name: "Smart TVs (2)", icon: "tv", description: "TVs in both bedrooms" },
      { name: "Air Conditioning", icon: "ac", description: "Climate control throughout" },
      { name: "Free Wi-Fi", icon: "wifi", description: "High-speed internet" },
      { name: "Gaming Console", icon: "game", description: "PlayStation 5 with games for kids" },
      { name: "Baby Amenities", icon: "baby", description: "Crib, high chair available on request" },
      { name: "Balcony", icon: "balcony", description: "Safe, enclosed balcony" },
      { name: "Mini Bar", icon: "fridge", description: "Stocked with family-friendly options" }
    ],
    features: [
      "Kids Welcome Package",
      "Complimentary Breakfast for All",
      "Babysitting Services Available",
      "Kids Club Access",
      "Board Games & Books",
      "Priority Restaurant Reservations"
    ],
    availableRooms: 6
  }
];

// Legacy rooms data - kept for backward compatibility
export const rooms = roomImages.slice(0, 28).map((img, i) => ({
  id: i + 1,
  name: i < 10 ? `Deluxe Room ${i + 1}` : i < 20 ? `Executive Suite ${i - 9}` : `Presidential Suite ${i - 19}`,
  description: i < 10
    ? "Experience comfort and elegance in our spacious deluxe rooms with modern amenities"
    : i < 20
    ? "Indulge in luxury with separate living areas and premium furnishings"
    : "The ultimate in luxury and sophistication with panoramic views",
  price: i < 10 ? 2499 : i < 20 ? 4199 : 8499,
  image: img.url,
  size: i < 10 ? "350 sq ft" : i < 20 ? "550 sq ft" : "1200 sq ft",
  guests: i < 10 ? 2 : i < 20 ? 3 : 4,
  amenities: i < 10
    ? ["King Bed", "Free Wi-Fi", "Smart TV", "Mini Bar", "City View"]
    : i < 20
    ? ["Living Room", "King Bed", "Work Desk", "Premium Bath", "Balcony"]
    : ["Master Suite", "Dining Area", "Butler Service", "Premium Amenities", "Ocean View"]
}));

// Amenities with placeholder images
export const amenities = [
  {
    id: 1,
    name: "Infinity Pool",
    description: "Relax in our stunning infinity pool with breathtaking views",
    image: `/images/amenity-pool.jpg`,
    icon: "waves"
  },
  {
    id: 2,
    name: "Luxury Spa",
    description: "Rejuvenate your body and mind with our premium spa treatments",
    image: `/images/amenity-spa.jpg`,
    icon: "sparkles"
  },
  {
    id: 3,
    name: "Fine Dining",
    description: "Experience culinary excellence at our award-winning restaurant",
    image: `/images/amenity-dining.jpg`,
    icon: "utensils"
  },
  {
    id: 4,
    name: "Gourmet Cuisine",
    description: "Savor exquisite dishes prepared by world-class chefs",
    image: `/images/amenity-cuisine.jpg`,
    icon: "chef-hat"
  },
  {
    id: 5,
    name: "Fitness Center",
    description: "State-of-the-art gym equipment for your wellness routine",
    image: `/images/amenity-gym.jpg`,
    icon: "dumbbell"
  },
  {
    id: 6,
    name: "Conference Hall",
    description: "Modern meeting spaces for business events",
    image: `/images/amenity-conference.jpg`,
    icon: "presentation"
  },
  {
    id: 7,
    name: "Garden Terrace",
    description: "Beautiful outdoor spaces for relaxation",
    image: `/images/amenity-garden.jpg`,
    icon: "flower"
  },
  {
    id: 8,
    name: "Bar & Lounge",
    description: "Elegant bar with premium cocktails and beverages",
    image: `/images/amenity-bar.jpg`,
    icon: "wine"
  }
];

// Quick Highlights for diagonal blocks
export const quickHighlights = [
  {
    id: 1,
    title: "Luxury Rooms",
    description: "28 exquisitely designed rooms and suites",
    image: roomImages[0].url
  },
  {
    id: 2,
    title: "Grand Lobby",
    description: "Elegant reception and lobby areas",
    image: lobbyImages[0].url
  },
  {
    id: 3,
    title: "Stunning Facade",
    description: "Architectural excellence and beauty",
    image: facadeImages[0].url
  },
  {
    id: 4,
    title: "Premium Amenities",
    description: "World-class facilities for your comfort",
    image: amenities[0].image
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "Hotel O Secret Heaven exceeded all expectations! The rooms are absolutely stunning and the service is impeccable.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment: "A truly heavenly experience. The peaceful atmosphere and luxurious amenities made our stay unforgettable.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    comment: "Pure relaxation and comfort! Every detail has been thoughtfully designed. Highly recommend this gem.",
    avatar: "ER"
  }
];
