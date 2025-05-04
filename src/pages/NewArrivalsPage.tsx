import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Star, Plus } from 'lucide-react';
import shoes from '../data/shoes';

const NewArrivalsPage = () => {
  const [searchParams] = useSearchParams();
  const selectedBrand = searchParams.get('brand');
  const { dispatch } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [addedToCart, setAddedToCart] = useState<{[key: number]: boolean}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter products based on selected brand
  const filteredProducts = selectedBrand
    ? shoes.filter(product => product.brand === selectedBrand)
    : shoes;

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  // Add to cart with animation
  const handleAddToCart = (product: typeof shoes[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });

    // Show added animation
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));

    // Reset animation after delay
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-black to-zinc-900">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold mb-4 text-center">
            {selectedBrand ? `${selectedBrand} Collection` : 'New Arrivals'}
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Discover our latest collection of premium footwear from the world's top designers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                {/* New badge */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 bg-white text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse-subtle">
                    NEW
                  </div>
                )}

                {/* Favorite button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-3 right-3 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                  />
                </button>

                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-smooth-out"
                />

                {/* Quick add overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white text-black p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-200 flex items-center space-x-2"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              <div className="p-5">
                {/* Brand name */}
                <p className="text-sm text-gray-400 mb-1">{product.brand}</p>

                {/* Product name */}
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 ml-2">{product.rating}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* Price */}
                  <span className="text-xl font-bold">${product.price.toFixed(2)}</span>

                  {/* Add to cart button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`relative overflow-hidden bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-1 ${addedToCart[product.id] ? 'bg-green-500 text-white hover:bg-green-600' : ''}`}
                  >
                    {addedToCart[product.id] ? (
                      <>
                        <span>Added</span>
                        <span className="animate-bounce-in">✓</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products found message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No products found for {selectedBrand}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivalsPage;