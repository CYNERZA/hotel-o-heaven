import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent tracking-tight">
                Hotel O Secret Heaven
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-all duration-300 font-medium relative group text-sm lg:text-base ${
                    location.pathname === item.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            <Link to="/rooms">
              <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm lg:text-base px-4 lg:px-6">
                Book Now
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors font-medium text-left ${
                    location.pathname === item.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/rooms" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full">
                  Book Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Secret Heaven
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Experience comfort, peace & pure relaxation in the heart of paradise.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Room Service</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Concierge</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Spa & Wellness</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Fine Dining</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li>123 Heaven Street</li>
                <li>Paradise City, DL 10001</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">+1 (555) 732-7384</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer break-all">info@secretheaven.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm md:text-base">&copy; 2025 Hotel O Secret Heaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
