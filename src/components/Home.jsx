import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Star, Phone, Mail, ChevronDown, Menu, X, Wifi, Tv, Coffee, Wind, Waves, Sparkles, UtensilsCrossed, ChefHat, Dumbbell, Presentation, Flower, Wine } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import {
  rooms,
  amenities,
  testimonials,
  facadeImages,
  lobbyImages,
  receptionImages,
  entranceImages,
  washroomImages,
  photoShowcase,
  quickHighlights
} from '../mock';
import BookingModal from './BookingModal';
import PaymentConfirmation from './PaymentConfirmation';
import GuestSelectionModal from './GuestSelectionModal';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2'
  });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isGuestSelectionOpen, setIsGuestSelectionOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [paymentConfirmation, setPaymentConfirmation] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleBookingSearch = (e) => {
    e.preventDefault();
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    scrollToSection('rooms');
  };

  const handleRoomBooking = (room) => {
    setSelectedRoom(room);
    setIsGuestSelectionOpen(true);
  };

  const handleGuestSelection = (numGuests) => {
    setBookingData(prev => ({
      ...prev,
      guests: numGuests.toString()
    }));
    setIsGuestSelectionOpen(false);
    setIsBookingModalOpen(true);
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment Success Handler Called:', paymentData);
    setPaymentConfirmation(paymentData);
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: '2'
    });
    setSelectedRoom(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a frontend demo)');
  };

  const iconMap = {
    'waves': Waves,
    'sparkles': Sparkles,
    'utensils': UtensilsCrossed,
    'chef-hat': ChefHat,
    'dumbbell': Dumbbell,
    'presentation': Presentation,
    'flower': Flower,
    'wine': Wine
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent tracking-tight">
                Hotel O Secret Heaven
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'highlights', 'rooms', 'lobby', 'facade', 'amenities', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium capitalize relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection('rooms')}>
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <nav className="flex flex-col space-y-4 p-4">
              {['home', 'highlights', 'rooms', 'lobby', 'facade', 'amenities', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left capitalize"
                >
                  {item}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full" onClick={() => scrollToSection('rooms')}>Book Now</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/facade-01.jpg"
            alt="Hotel O Secret Heaven"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/30">
              <span className="text-purple-200 text-sm font-medium tracking-wide">Welcome to Heaven</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Hotel O Secret Heaven
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
              Experience Comfort, Peace & Pure Relaxation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('rooms')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg px-10 py-6 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('rooms')}
                variant="outline"
                className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-lg px-10 py-6 transition-all duration-300"
              >
                View Rooms
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={40} />
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section id="highlights" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Discover</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Experience Heaven</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A perfect blend of luxury, comfort, and tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickHighlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-80">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-900/30"></div>

                  {/* Diagonal overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-indigo-600/20 transform rotate-12 scale-150 group-hover:scale-100 transition-transform duration-700"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-2xl mb-2">{highlight.title}</h3>
                    <p className="text-purple-100 opacity-90">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Wall - Masonry Gallery */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Gallery</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Visual Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in the beauty and elegance of our hotel
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photoShowcase.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ height: index % 3 === 0 ? '400px' : index % 2 === 0 ? '300px' : '350px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Accommodations</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Rooms & Suites</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              28 exquisitely designed rooms offering unparalleled comfort and luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 text-base shadow-lg">
                    ${room.price}/night
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">{room.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-1 border-purple-200 text-purple-700">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center">
                      <Wind className="w-4 h-4 mr-2 text-purple-600" />
                      {room.size}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      {room.guests} Guests
                    </span>
                  </div>
                  <Button
                    onClick={() => handleRoomBooking(room)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lobby & Reception Section */}
      <section id="lobby" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Interior</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Lobby & Reception</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Where elegance meets hospitality
            </p>
          </div>

          {/* Lobby Images */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grand Lobby</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {lobbyImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-72 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reception Images */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Reception Area</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {receptionImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facade & Entrance Section */}
      <section id="facade" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Architecture</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Facade & Entrance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Architectural beauty that welcomes you
            </p>
          </div>

          {/* Facade Images - Wide horizontal layout */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hotel Facade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facadeImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                    index === 0 ? 'md:col-span-2 h-96' : 'h-80'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Diagonal split overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/0 via-transparent to-indigo-600/30 transform -skew-x-12 scale-150 group-hover:scale-100 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Entrance Images */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grand Entrance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {entranceImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                    index === 0 ? 'md:col-span-2 h-96' : 'h-80'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Washroom Gallery */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Luxury</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Premium Bathrooms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spa-like bathrooms with premium fixtures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {washroomImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white ${
                  index === 0 ? 'md:col-span-2 lg:col-span-3 h-96' : 'h-80'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Facilities</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">World-Class Amenities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a perfect stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = iconMap[amenity.icon];
              return (
                <Card key={amenity.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent className="w-6 h-6 text-purple-600" />}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{amenity.name}</CardTitle>
                    <CardDescription>{amenity.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <Avatar className="h-14 w-14 mr-4 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-lg font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-sm font-semibold">Contact</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to make your stay unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start group cursor-pointer p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Location</h3>
                    <p className="text-gray-600">123 Heaven Street, Paradise City<br />Dreamland, DL 10001</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <p className="text-gray-600">+1 (555) SECRET-HEAVEN<br />+1 (555) 732-7384</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-600">info@secretheaven.com<br />reservations@secretheaven.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                <CardDescription className="text-base">We'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Name</label>
                    <Input placeholder="Your name" required className="border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Email</label>
                    <Input type="email" placeholder="your@email.com" required className="border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Message</label>
                    <Textarea placeholder="Your message" rows={4} required className="border-gray-300 focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modals */}
      <GuestSelectionModal
        isOpen={isGuestSelectionOpen}
        onClose={() => setIsGuestSelectionOpen(false)}
        room={selectedRoom}
        bookingDates={bookingData}
        onConfirm={handleGuestSelection}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        room={selectedRoom}
        bookingDates={bookingData}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <PaymentConfirmation
        paymentData={paymentConfirmation}
        onClose={() => setPaymentConfirmation(null)}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        {/* Footer Image Strip */}
        <div className="w-full h-24 mb-12 relative overflow-hidden">
          <div className="flex gap-2 h-full opacity-30">
            {facadeImages.slice(0, 6).map((img) => (
              <div key={img.id} className="h-full w-64 flex-shrink-0">
                <img src={img.url} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Secret Heaven
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Experience comfort, peace & pure relaxation in the heart of paradise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {['home', 'rooms', 'amenities', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="hover:text-purple-400 transition-colors duration-300 capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Room Service</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Concierge</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Spa & Wellness</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Fine Dining</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li>123 Heaven Street</li>
                <li>Paradise City, DL 10001</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">+1 (555) 732-7384</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">info@secretheaven.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hotel O Secret Heaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
