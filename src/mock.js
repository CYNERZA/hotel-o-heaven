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

// Rooms data with individual images
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
