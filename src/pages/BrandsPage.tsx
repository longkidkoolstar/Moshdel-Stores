import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const brands = [
  { name: 'Balenciaga', image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80' },
  { name: 'Alexander McQueen', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80' },
  { name: 'Supreme', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80' },
  { name: 'Dior', image: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80' },
  { name: 'Louis Vuitton', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80' },
  { name: 'Gucci', image: 'https://images.unsplash.com/photo-1576672843344-f01907a9d40c?auto=format&fit=crop&q=80' },
  { name: 'Nike', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80' },
  { name: 'Jordan', image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80' },
  { name: 'Adidas', image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80' },
  { name: 'Sacai', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80' },
  { name: 'Travis Scott', image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80' },
  { name: 'Off-White', image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80' },
];

const BrandsPage = () => {
  const [searchParams] = useSearchParams();
  const selectedBrand = searchParams.get('brand');

  const filteredBrands = selectedBrand
    ? brands.filter(brand => brand.name === selectedBrand)
    : brands;

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">
          {selectedBrand || 'Our Brands'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <Link
              key={brand.name}
              to={`/new-arrivals?brand=${encodeURIComponent(brand.name)}`}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold">{brand.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;