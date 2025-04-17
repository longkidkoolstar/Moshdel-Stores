import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Images for the hero slider
  const heroImages = [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Set loaded state after component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image slider */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-2000 ease-smooth-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Luxury shoes ${index + 1}`}
            className="w-full h-full object-cover scale-105 transition-transform duration-2000"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className={`max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="block">Luxury Footwear</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Discover the finest collection of designer shoes
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Link
              to="/new-arrivals"
              className="group inline-flex items-center bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <span>Shop Now</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Animated overlay elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

      {/* Animated dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;