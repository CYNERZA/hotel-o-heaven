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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl border-0 overflow-hidden">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-2">Complete Your Booking</h2>
              <p className="text-amber-100 text-lg">Select your dates and number of guests</p>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <X size={28} />
            </button>
          </div>
        </div>

        <CardContent className="pt-8 pb-8 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Room Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-6">{room.name}</h3>
                
                <div className="space-y-4 mb-8 pb-8 border-b-2 border-amber-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Price per Night</p>
                    <p className="text-3xl font-bold text-amber-600">₹{room.price.toLocaleString()}</p>
                  </div>
                  {hasValidDates && (
                    <>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Check-in</p>
                        <p className="text-lg font-medium text-gray-900">{checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Check-out</p>
                        <p className="text-lg font-medium text-gray-900">{checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Nights</p>
                        <p className="text-lg font-medium text-gray-900">{nights} night{nights > 1 ? 's' : ''}</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-amber-300">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Total Amount</p>
                  <p className="text-4xl font-bold text-amber-600">₹{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Right: Selection Options */}
            <div className="lg:col-span-2 space-y-8">
              {/* Date Selection */}
              <div>
                <label className="text-lg font-bold text-gray-900 mb-4 flex items-center block">
                  <Calendar className="w-6 h-6 mr-3 text-amber-600" />
                  Select Your Dates
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Check-in Date *</label>
                    <Input
                      type="date"
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        setShowDateError(false);
                      }}
                      className="border-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 py-3 text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Check-out Date *</label>
                    <Input
                      type="date"
                      value={checkOut}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                        setShowDateError(false);
                      }}
                      className="border-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 py-3 text-base"
                    />
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
                <label className="text-lg font-bold text-gray-900 mb-4 flex items-center block">
                  <Users className="w-6 h-6 mr-3 text-amber-600" />
                  How many guests?
                </label>

                <div className="grid grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuests(num.toString())}
                      className={`p-4 rounded-xl font-bold text-xl transition-all duration-300 border-2 transform hover:scale-110 ${
                        guests === num.toString()
                          ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white border-amber-700 shadow-lg scale-105'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-amber-400 hover:bg-amber-50'
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
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={onClose}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-base font-semibold rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirm}
                  disabled={parseInt(guests) > room.guests}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-base font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Check size={20} />
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
