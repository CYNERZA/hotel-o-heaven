import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, Download, Home, Send, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PaymentConfirmation = ({ paymentData, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(true);

  useEffect(() => {
    // Simulate email sending after 1 second
    const emailTimer = setTimeout(() => {
      setEmailSent(true);
      setEmailLoading(false);
    }, 1500);

    // Auto-close after 12 seconds
    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 12000);

    return () => {
      clearTimeout(emailTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  if (!isVisible || !paymentData) {
    return null;
  }

  const { paymentId, bookingDetails } = paymentData;
  const confirmationNumber = `GH${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

  const handleDownloadReceipt = () => {
    // Create a simple receipt
    const receiptContent = `
GRAND HOTEL - BOOKING CONFIRMATION
=====================================

Confirmation Number: ${confirmationNumber}
Payment ID: ${paymentId}

GUEST DETAILS
Name: ${bookingDetails.fullName}
Email: ${bookingDetails.email}
Phone: ${bookingDetails.phone}

BOOKING DETAILS
Room: ${bookingDetails.room}
Check-in: ${new Date(bookingDetails.checkIn).toLocaleDateString()}
Check-out: ${new Date(bookingDetails.checkOut).toLocaleDateString()}
Number of Nights: ${bookingDetails.nights}

PAYMENT DETAILS
Price per Night: ₹${bookingDetails.roomPrice.toLocaleString()}
Total Amount: ₹${bookingDetails.totalAmount.toLocaleString()}
Status: PAID

Booking Date: ${new Date().toLocaleString()}

Thank you for choosing Grand Hotel!
We look forward to your stay.

For any queries, contact: info@grandhotel.com
Phone: +1 (555) 123-4567
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(receiptContent));
    element.setAttribute('download', `booking_${confirmationNumber}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in">
      <Card className="w-full max-w-5xl shadow-2xl border-0 overflow-hidden my-4">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-400/20 rounded-full blur-3xl -mr-32 sm:-mr-48 -mt-32 sm:-mt-48"></div>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">🎉 Payment Successful!</h1>
              <p className="text-green-100 text-sm sm:text-base lg:text-lg">Your booking has been confirmed</p>
            </div>
            <CheckCircle size={48} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-bounce flex-shrink-0" />
          </div>
        </div>

        <CardContent className="pt-6 pb-6 px-4 sm:pt-8 sm:pb-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left: Confirmation & Guest Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-4 sm:p-6 lg:p-8 h-full">
                {/* Confirmation Number */}
                <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-amber-200">
                  <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Confirmation Number</p>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-700 font-mono mb-2 break-all">{confirmationNumber}</p>
                  <p className="text-xs text-gray-600">Save this for your records</p>
                </div>

                {/* Guest Info */}
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Guest Name</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{bookingDetails.fullName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-amber-600" />
                      Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 break-all">{bookingDetails.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{bookingDetails.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Booking Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-4 sm:p-6 lg:p-8 h-full">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Booking Details</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Room Type</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{bookingDetails.room}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Check-in</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      {new Date(bookingDetails.checkIn).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Check-out</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      {new Date(bookingDetails.checkOut).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Number of Nights</p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">{bookingDetails.nights}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Payment Summary</h3>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-purple-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Room Rate (per night)</span>
                      <span className="text-sm sm:text-base font-bold text-gray-900">₹{bookingDetails.roomPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Number of Nights</span>
                      <span className="text-sm sm:text-base font-bold text-gray-900">{bookingDetails.nights}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-700">Taxes & Fees</span>
                      <span className="text-sm sm:text-base font-bold text-gray-900">₹0</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border-2 border-purple-300 mb-4 sm:mb-6 shadow-md">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Total Amount Paid</p>
                    <p className="text-2xl sm:text-3xl font-bold text-purple-600">₹{bookingDetails.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                {emailLoading ? (
                  <div className="p-2 sm:p-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-700 text-xs sm:text-sm font-semibold text-center">
                    📧 Sending confirmation email...
                  </div>
                ) : emailSent ? (
                  <div className="p-2 sm:p-3 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-xs sm:text-sm font-semibold text-center">
                    ✓ Confirmation email sent
                  </div>
                ) : (
                  <div className="p-2 sm:p-3 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-xs sm:text-sm font-semibold text-center">
                    ⚠️ Email sending failed
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-2 border-gray-200 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={handleDownloadReceipt}
              className="w-full sm:flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Receipt
            </Button>
            <Button
              onClick={onClose}
              className="w-full sm:flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Home size={18} className="sm:w-5 sm:h-5" />
              Back to Home
            </Button>
          </div>

          {/* Auto-close Message */}
          <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
            This page will automatically close in a few seconds...
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
