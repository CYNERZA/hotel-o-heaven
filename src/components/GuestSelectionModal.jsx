import React, { useState } from 'react';
import { X, Users, Calendar, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

const GuestSelectionModal = ({ isOpen, onClose, room, bookingDates, onConfirm }) => {
  const [guests, setGuests] = useState('2');
  const [checkIn, setCheckIn] = useState(bookingDates.checkIn || '');
  const [checkOut, setCheckOut] = useState(bookingDates.checkOut || '');
  const [showDateError, setShowDateError] = useState(false);

  if (!isOpen || !room) return null;

  const hasValidDates = checkIn && checkOut;
  const checkInDate = hasValidDates ? new Date(checkIn) : null;
  const checkOutDate = hasValidDates ? new Date(checkOut) : null;
  const nights = hasValidDates ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) : 1;
  const totalAmount = room.price * (nights > 0 ? nights : 1);

  const handleConfirm = () => {
    if (!checkIn || !checkOut) {
      setShowDateError(true);
      return;
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      setShowDateError(true);
      return;
    }
    onConfirm(parseInt(guests));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <Card className="w-full max-w-4xl shadow-2xl border-0 overflow-hidden my-4">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/20 rounded-full blur-3xl -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
          <div className="relative z-10 flex justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Complete Your Booking</h2>
              <p className="text-amber-100 text-sm sm:text-base lg:text-lg">Select your dates and number of guests</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              <X size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>

        <CardContent className="pt-6 pb-6 px-4 sm:pt-8 sm:pb-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left: Room Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-4 sm:p-6 lg:p-8 h-full">
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6">{room.name}</h3>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-amber-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Price per Night</p>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-600">₹{room.price.toLocaleString()}</p>
                  </div>
                  {hasValidDates && (
                    <>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Check-in</p>
                        <p className="text-base sm:text-lg font-medium text-gray-900">{checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Check-out</p>
                        <p className="text-base sm:text-lg font-medium text-gray-900">{checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Nights</p>
                        <p className="text-base sm:text-lg font-medium text-gray-900">{nights} night{nights > 1 ? 's' : ''}</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-amber-300 shadow-md">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Total Amount</p>
                  <p className="text-3xl sm:text-4xl font-bold text-amber-600">₹{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Right: Selection Options */}
            <div className="lg:col-span-2 space-y-8">
              {/* Date Selection */}
              <div>
                <label className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center block">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-amber-600" />
                  Select Your Dates
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Check-in Date *</label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => {
                          setCheckIn(e.target.value);
                          setShowDateError(false);
                        }}
                        className="border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 py-3 px-4 text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Check-out Date *</label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => {
                          setCheckOut(e.target.value);
                          setShowDateError(false);
                        }}
                        className="border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 py-3 px-4 text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        min={checkIn || new Date().toISOString().split('T')[0]}
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {showDateError && (
                  <div className="mt-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm font-semibold">
                    ⚠️ Please select valid dates (check-out must be after check-in)
                  </div>
                )}
              </div>

              {/* Guest Selection */}
              <div>
                <label className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center block">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-amber-600" />
                  How many guests?
                </label>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuests(num.toString())}
                      className={`p-3 sm:p-4 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 border-2 transform hover:scale-110 active:scale-95 ${
                        guests === num.toString()
                          ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white border-amber-700 shadow-lg scale-105 ring-2 ring-amber-300'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-amber-400 hover:bg-amber-50 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                {/* Room Capacity Info */}
                <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900 font-semibold">
                    Room Capacity: Up to {room.guests} guests
                  </p>
                  {parseInt(guests) > room.guests && (
                    <p className="text-sm text-red-600 mt-2 font-bold">
                      ⚠️ This room can accommodate maximum {room.guests} guests
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  onClick={onClose}
                  className="w-full sm:flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 py-3 text-sm sm:text-base font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirm}
                  disabled={parseInt(guests) > room.guests}
                  className="w-full sm:flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Check size={18} className="sm:w-5 sm:h-5" />
                  Continue to Payment
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestSelectionModal;
