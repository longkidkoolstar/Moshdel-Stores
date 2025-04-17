import React from 'react';
import { Link } from 'react-router-dom';

const brands = [
  { name: 'Balenciaga', image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80' },
  { name: 'Gucci', image: 'https://images.unsplash.com/photo-1576672843344-f01907a9d40c?auto=format&fit=crop&q=80' },
  { name: 'Nike', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80' },
  { name: 'Jordan', image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80' },
];

const BrandSection = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Link 
              key={brand.name} 
              to={`/brands?brand=${encodeURIComponent(brand.name)}`}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold">{brand.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;