import React, { useState } from 'react';
import { X, Users, Maximize2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const RoomDetailModal = ({ isOpen, onClose, room, onBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <Card className="w-full max-w-6xl shadow-2xl border-0 overflow-hidden my-4 bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
          <div className="relative z-10 flex justify-between items-start gap-4">
            <div className="flex-1">
              <Badge className="mb-2 sm:mb-3 bg-white/20 text-white border-white/30 text-xs sm:text-sm px-2 sm:px-3 py-1">
                {room.category}
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{room.name}</h2>
              <p className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-3xl">{room.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              <X size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Image Gallery */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Room Gallery</h3>
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={room.images[currentImageIndex]}
                  alt={`${room.name} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                  {currentImageIndex + 1} / {room.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-3 sm:mt-4 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {room.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-16 sm:h-20 overflow-hidden rounded-lg transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'ring-4 ring-purple-600 scale-105'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Room Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Quick Info */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Price per Night</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-600">₹{room.price.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Room Size</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{room.size}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Max Guests</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  {room.guests}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">Bed Type</p>
                <p className="text-sm sm:text-base font-bold text-gray-900">{room.bedType}</p>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Room Amenities & Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-base text-gray-900 mb-0.5">{amenity.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Included Features & Services</h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border-2 border-green-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-gray-800">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Rooms */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm sm:text-base font-semibold text-gray-700">Available Rooms</p>
              <Badge className="bg-blue-600 text-white px-3 py-1 text-sm sm:text-base">
                {room.availableRooms} rooms available
              </Badge>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={() => {
                onClose();
                onBookNow(room);
              }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl transform hover:scale-[1.02]"
            >
              Book This Room Now
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="sm:w-auto border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl"
            >
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RoomDetailModal;
