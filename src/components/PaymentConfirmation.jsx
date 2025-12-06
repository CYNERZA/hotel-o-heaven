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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-5xl shadow-2xl border-0 overflow-hidden">
        {/* Success Header */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">🎉 Payment Successful!</h1>
              <p className="text-green-100 text-lg">Your booking has been confirmed</p>
            </div>
            <CheckCircle size={80} className="animate-bounce" />
          </div>
        </div>

        <CardContent className="pt-8 pb-8 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Confirmation & Guest Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 h-full">
                {/* Confirmation Number */}
                <div className="mb-8 pb-8 border-b-2 border-amber-200">
                  <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Confirmation Number</p>
                  <p className="text-3xl font-bold text-amber-700 font-mono mb-2">{confirmationNumber}</p>
                  <p className="text-xs text-gray-600">Save this for your records</p>
                </div>

                {/* Guest Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Guest Name</p>
                    <p className="text-lg font-bold text-gray-900">{bookingDetails.fullName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-amber-600" />
                      Email
                    </p>
                    <p className="text-sm font-medium text-gray-900 break-all">{bookingDetails.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Phone</p>
                    <p className="text-lg font-bold text-gray-900">{bookingDetails.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Booking Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Booking Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Room Type</p>
                    <p className="text-lg font-bold text-gray-900">{bookingDetails.room}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Check-in</p>
                    <p className="text-lg font-bold text-gray-900">
                      {new Date(bookingDetails.checkIn).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Check-out</p>
                    <p className="text-lg font-bold text-gray-900">
                      {new Date(bookingDetails.checkOut).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Number of Nights</p>
                    <p className="text-lg font-bold text-gray-900">{bookingDetails.nights}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Payment Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Summary</h3>
                  
                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-purple-200">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Room Rate (per night)</span>
                      <span className="font-bold text-gray-900">₹{bookingDetails.roomPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Number of Nights</span>
                      <span className="font-bold text-gray-900">{bookingDetails.nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-700">Taxes & Fees</span>
                      <span className="font-bold text-gray-900">₹0</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border-2 border-purple-300 mb-6">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Total Amount Paid</p>
                    <p className="text-3xl font-bold text-purple-600">₹{bookingDetails.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                {emailLoading ? (
                  <div className="p-3 bg-blue-50 border-2 border-blue-200 rounded-lg text-blue-700 text-sm font-semibold text-center">
                    📧 Sending confirmation email...
                  </div>
                ) : emailSent ? (
                  <div className="p-3 bg-green-50 border-2 border-green-200 rounded-lg text-green-700 text-sm font-semibold text-center">
                    ✓ Confirmation email sent
                  </div>
                ) : (
                  <div className="p-3 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm font-semibold text-center">
                    ⚠️ Email sending failed
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-8 border-t-2 border-gray-200 flex gap-4">
            <Button
              onClick={handleDownloadReceipt}
              className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold text-base rounded-xl flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Receipt
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold text-base rounded-xl flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </Button>
          </div>

          {/* Auto-close Message */}
          <p className="text-xs text-gray-500 text-center mt-4">
            This page will automatically close in a few seconds...
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
