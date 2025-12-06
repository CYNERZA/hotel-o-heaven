import React, { useState } from 'react';
import { X, Mail, Phone, CreditCard, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const BookingModal = ({ isOpen, onClose, room, bookingDates, onPaymentSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Calculate number of nights
      const checkIn = new Date(bookingDates.checkIn);
      const checkOut = new Date(bookingDates.checkOut);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      const totalAmount = room.price * nights * 100; // Razorpay expects amount in paise

      // Initialize Razorpay
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: totalAmount,
        currency: 'INR',
        name: process.env.REACT_APP_HOTEL_NAME || 'Grand Hotel',
        description: `Booking for ${room.name} - ${nights} night(s)`,
        image: 'https://images.unsplash.com/photo-1762417422532-7bdaaf7d457a?w=100&h=100&fit=crop',
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          room_id: room.id,
          room_name: room.name,
          check_in: bookingDates.checkIn,
          check_out: bookingDates.checkOut,
          nights: nights,
          price_per_night: room.price
        },
        handler: function (response) {
          // Payment successful - Close modal first, then show confirmation
          onClose();
          
          // Small delay to ensure modal closes before showing confirmation
          setTimeout(() => {
            onPaymentSuccess({
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
              bookingDetails: {
                ...formData,
                room: room.name,
                checkIn: bookingDates.checkIn,
                checkOut: bookingDates.checkOut,
                nights: nights,
                totalAmount: room.price * nights,
                roomPrice: room.price
              }
            });
          }, 300);
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
            setError('Payment cancelled. Please try again.');
          }
        },
        theme: {
          color: '#b45309'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setError('Failed to initiate payment. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen || !room) return null;

  const checkIn = new Date(bookingDates.checkIn);
  const checkOut = new Date(bookingDates.checkOut);
  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const totalAmount = room.price * nights;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-5xl shadow-2xl border-0 overflow-hidden">
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold mb-2">Guest Information</h2>
              <p className="text-amber-100 text-lg">Enter your details to complete the booking</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Room Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-6">{room.name}</h3>
                
                {/* Room Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b-2 border-amber-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Price/Night</p>
                    <p className="text-2xl font-bold text-amber-600">₹{room.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Capacity</p>
                    <p className="text-2xl font-bold text-gray-900">{room.guests}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Room Size</p>
                    <p className="text-lg font-bold text-gray-900">{room.size}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">Amenities</p>
                    <p className="text-lg font-bold text-gray-900">{room.amenities.length}+</p>
                  </div>
                </div>

                {/* Booking Dates */}
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-amber-200">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Check-in:</span>
                    <span className="font-medium text-gray-900">{checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Check-out:</span>
                    <span className="font-medium text-gray-900">{checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Nights:</span>
                    <span className="font-medium text-gray-900">{nights} night{nights > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Total Price */}
                <div className="bg-white rounded-xl p-4 border-2 border-amber-300">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Total Amount</p>
                  <p className="text-4xl font-bold text-amber-600">₹{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Right: Guest Information Form */}
            <div className="lg:col-span-1">
              <form onSubmit={handlePayment} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm font-semibold">
                    ⚠️ {error}
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name *</label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="border-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 py-3 text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-amber-600" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="border-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 py-3 text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-amber-600" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="border-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 py-3 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed py-3 font-semibold text-base rounded-xl flex items-center justify-center gap-2"
                >
                  <CreditCard size={20} />
                  {isLoading ? 'Processing...' : `Proceed to Pay ₹${totalAmount.toLocaleString()}`}
                </Button>

                <p className="text-xs text-gray-600 text-center leading-relaxed bg-amber-50 p-3 rounded-lg">
                  ✓ Secure payment via Razorpay
                  <br />
                  ✓ Your booking will be confirmed after payment
                </p>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;
