import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { quickHighlights, photoShowcase } from '../mock';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-4">
              Hotel O Secret Heaven
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Experience Comfort, Peace & Pure Relaxation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button
                size="lg"
                onClick={() => navigate('/rooms')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                onClick={() => navigate('/rooms')}
                variant="outline"
                className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto"
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
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Discover</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Experience Heaven</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              A perfect blend of luxury, comfort, and tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {quickHighlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative h-64 sm:h-72 md:h-80">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-900/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-indigo-600/20 transform rotate-12 scale-150 group-hover:scale-100 transition-transform duration-700"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-xl sm:text-2xl mb-1 sm:mb-2">{highlight.title}</h3>
                    <p className="text-purple-100 opacity-90 text-sm sm:text-base">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Wall - Masonry Gallery */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Visual Journey</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Immerse yourself in the beauty and elegance of our hotel
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {photoShowcase.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ height: index % 3 === 0 ? '300px' : index % 2 === 0 ? '250px' : '280px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-base sm:text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
