import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a frontend demo)');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Heaven Street, Paradise City', 'Dreamland, DL 10001'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) SECRET-HEAVEN', '+1 (555) 732-7384'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@secretheaven.com', 'reservations@secretheaven.com'],
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Front Desk: 24/7', 'Check-in: 3:00 PM | Check-out: 11:00 AM'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Contact</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're here to make your stay unforgettable. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-xs sm:text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Have a question or special request? Fill out the form and our team will get back to you
                within 24 hours. We're committed to providing you with the best service possible.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Quick Response</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      We typically respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">24/7 Support</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Our front desk is available around the clock for immediate assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">Contact Form</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill in your details and we'll be in touch soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 block">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600 mx-auto mb-3 sm:mb-4" />
              <p className="text-lg sm:text-xl font-semibold text-gray-700">Interactive Map</p>
              <p className="text-sm sm:text-base text-gray-600 mt-2">123 Heaven Street, Paradise City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
