import React from 'react';
import { Waves, Sparkles, UtensilsCrossed, ChefHat, Dumbbell, Presentation, Flower, Wine, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { amenities, testimonials } from '../mock';

const AmenitiesPage = () => {
  const iconMap = {
    'waves': Waves,
    'sparkles': Sparkles,
    'utensils': UtensilsCrossed,
    'chef-hat': ChefHat,
    'dumbbell': Dumbbell,
    'presentation': Presentation,
    'flower': Flower,
    'wine': Wine
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Amenities Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">World-Class Amenities</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Everything you need for a perfect stay
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = iconMap[amenity.icon];
              return (
                <Card key={amenity.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg">
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent"></div>
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-bold">{amenity.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{amenity.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-700 text-xs sm:text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Guest Reviews</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Hear what our guests have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group">
                <CardHeader>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14 mr-3 sm:mr-4 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-base sm:text-lg font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{testimonial.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
