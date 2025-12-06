import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Heart, Shield, Users, MapPin, Calendar, Star, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Guests' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'We treat every guest like family, ensuring warmth and care in every interaction.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in service, comfort, and quality.'
    },
    {
      icon: Sparkles,
      title: 'Luxury',
      description: 'Creating unforgettable experiences through premium amenities and attention to detail.'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Perfectly situated in the heart of paradise, close to all major attractions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Welcome to Hotel O Secret Heaven
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Where luxury meets tranquility, and every stay becomes a cherished memory
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Founded over 15 years ago, Hotel O Secret Heaven has been a beacon of luxury and comfort
                  in the heart of Paradise City. Our journey began with a simple vision: to create a sanctuary
                  where guests can escape the ordinary and embrace the extraordinary.
                </p>
                <p>
                  What started as a boutique hotel with just 10 rooms has grown into a prestigious
                  establishment featuring 28 exquisitely designed rooms and suites. Each space is
                  thoughtfully crafted to provide the perfect blend of modern amenities and timeless elegance.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a hotel. We are a destination where
                  memories are made, celebrations come to life, and every guest is treated to an experience
                  that exceeds expectations.
                </p>
              </div>
              <Button
                onClick={() => navigate('/rooms')}
                className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Rooms
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="/images/lobby-01.jpg"
                  alt="Hotel Lobby"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
                <img
                  src="/images/reception-01.jpg"
                  alt="Reception"
                  className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <img
                  src="/images/facade-01.jpg"
                  alt="Hotel Facade"
                  className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
                <img
                  src="/images/entrance-01.jpg"
                  alt="Entrance"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">What We Stand For</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              The principles that guide us in delivering exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-95">
                To provide every guest with an exceptional experience that combines luxury, comfort,
                and personalized service, creating moments of pure bliss and lasting memories in an
                atmosphere of warmth and tranquility.
              </p>
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Button>
                <Button
                  onClick={() => navigate('/amenities')}
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 transition-all duration-300"
                >
                  View Amenities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
