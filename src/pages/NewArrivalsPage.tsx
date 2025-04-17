import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const newArrivals = [
  {
    id: 1,
    name: 'Nike Air Max 2025',
    brand: 'Nike',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Balenciaga Triple S',
    brand: 'Balenciaga',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Jordan 1 Retro High',
    brand: 'Jordan',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Gucci Ace Sneakers',
    brand: 'Gucci',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80'
  },
];

const NewArrivalsPage = () => {
  const [searchParams] = useSearchParams();
  const selectedBrand = searchParams.get('brand');
  const { dispatch } = useCart();

  const filteredProducts = selectedBrand
    ? newArrivals.filter(product => product.brand === selectedBrand)
    : newArrivals;

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">
          {selectedBrand ? `${selectedBrand} Collection` : 'New Arrivals'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-400">{product.brand}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;