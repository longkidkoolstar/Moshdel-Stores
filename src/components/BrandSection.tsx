import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const brands = [
  {
    name: 'Balenciaga',
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80',
    description: 'Luxury fashion house known for bold designs and innovative footwear'
  },
  {
    name: 'Gucci',
    image: 'https://images.unsplash.com/photo-1576672843344-f01907a9d40c?auto=format&fit=crop&q=80',
    description: 'Iconic Italian brand combining contemporary aesthetics with traditional craftsmanship'
  },
  {
    name: 'Nike',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    description: 'Innovative athletic footwear with cutting-edge technology and design'
  },
  {
    name: 'Jordan',
    image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80',
    description: 'Legendary basketball shoes with a rich heritage and cultural impact'
  },
];

const BrandSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-4">Featured Brands</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Explore our curated collection of the world's most prestigious footwear brands</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              to={`/new-arrivals?brand=${encodeURIComponent(brand.name)}`}
              className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-lg shadow-black/20 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-smooth-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end p-6 opacity-100 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-2xl font-bold text-center group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">{brand.name}</h3>
                <p className="text-gray-300 text-sm text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{brand.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-flex items-center text-sm font-medium text-white">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse-subtle" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            to="/brands"
            className="inline-flex items-center text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <span>View All Brands</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;