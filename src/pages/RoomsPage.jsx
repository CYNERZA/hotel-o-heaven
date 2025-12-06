import React, { useState } from 'react';
import { Users, Wind, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { roomTypes, lobbyImages, receptionImages, facadeImages, entranceImages, washroomImages } from '../mock';
import BookingModal from '../components/BookingModal';
import PaymentConfirmation from '../components/PaymentConfirmation';
import GuestSelectionModal from '../components/GuestSelectionModal';
import RoomDetailModal from '../components/RoomDetailModal';

const RoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isRoomDetailOpen, setIsRoomDetailOpen] = useState(false);
  const [isGuestSelectionOpen, setIsGuestSelectionOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [paymentConfirmation, setPaymentConfirmation] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setIsRoomDetailOpen(true);
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
    setPaymentConfirmation(paymentData);
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: '2'
    });
    setSelectedRoom(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Rooms & Suites Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Accommodations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Our Room Types</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Choose from our carefully curated selection of luxurious accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {roomTypes.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base shadow-lg">
                    ₹{room.price}/night
                  </Badge>
                  <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 text-gray-800 px-2 py-1 text-xs sm:text-sm font-semibold">
                    {room.images.length} Photos
                  </Badge>
                </div>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-lg sm:text-xl font-bold">{room.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 line-clamp-2">{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border-purple-200 text-purple-700">
                        {amenity.name}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border-purple-200 text-purple-700">
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                    <span className="flex items-center">
                      <Wind className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-600" />
                      <span className="text-xs sm:text-sm">{room.size}</span>
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-600" />
                      <span className="text-xs sm:text-sm">{room.guests} Guests</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => handleViewDetails(room)}
                      variant="outline"
                      className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleRoomBooking(room)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base py-2 sm:py-2.5">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lobby & Reception Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Interior</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Lobby & Reception</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Where elegance meets hospitality
            </p>
          </div>

          {/* Lobby Images */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">Grand Lobby</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {lobbyImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-48 sm:h-60 md:h-72 overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-sm sm:text-base">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reception Images */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">Reception Area</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {receptionImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
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
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Facade & Entrance</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Architectural beauty that welcomes you
            </p>
          </div>

          {/* Facade Images */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">Hotel Facade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {facadeImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                    index === 0 ? 'md:col-span-2 h-64 sm:h-80 md:h-96' : 'h-56 sm:h-72 md:h-80'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/0 via-transparent to-indigo-600/30 transform -skew-x-12 scale-150 group-hover:scale-100 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Entrance Images */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">Grand Entrance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {entranceImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                    index === 0 ? 'md:col-span-2 h-64 sm:h-80 md:h-96' : 'h-56 sm:h-72 md:h-80'
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
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Luxury</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Premium Bathrooms</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Spa-like bathrooms with premium fixtures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {washroomImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white ${
                  index === 0 ? 'md:col-span-2 lg:col-span-3 h-64 sm:h-80 md:h-96' : 'h-56 sm:h-72 md:h-80'
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

      {/* Modals */}
      <RoomDetailModal
        isOpen={isRoomDetailOpen}
        onClose={() => setIsRoomDetailOpen(false)}
        room={selectedRoom}
        onBookNow={handleRoomBooking}
      />

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
    </div>
  );
};

export default RoomsPage;
