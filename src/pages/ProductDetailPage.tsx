import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Star, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import shoes from '../data/shoes';
import ProductViewer360 from '../components/ProductViewer360';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<typeof shoes[0] | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Find the product by ID
    if (id) {
      const foundProduct = shoes.find(shoe => shoe.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }

    // Set loaded state after a short delay for animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch({ 
        type: 'ADD_TO_CART', 
        payload: { ...product, quantity } 
      });
      setAddedToCart(true);
      
      // Reset the added state after a delay
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
  };

  // Handle quantity changes
  const updateQuantity = (value: number) => {
    setQuantity(Math.max(1, value)); // Ensure quantity is at least 1
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Go back to previous page
  const goBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="pt-24 flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <button 
            onClick={goBack}
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center mx-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <button 
          onClick={goBack}
          className={`mb-8 px-4 py-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all duration-300 flex items-center ${loaded ? 'opacity-100' : 'opacity-0 -translate-x-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product image/viewer section */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {product.has360View && product.image360BaseUrl && product.image360Frames ? (
              <ProductViewer360 
                baseUrl={product.image360BaseUrl}
                totalFrames={product.image360Frames}
                autoRotate={true}
              />
            ) : (
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Product details section */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="mb-2 text-gray-400">{product.brand}</div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400 ml-2">{product.rating}</span>
            </div>
            
            {/* Price */}
            <div className="text-3xl font-bold mb-8">${product.price.toFixed(2)}</div>
            
            {/* Quantity selector */}
            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-2">Quantity</label>
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(quantity - 1)}
                  className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-l-lg transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center py-1 bg-zinc-800 border-none focus:outline-none"
                />
                <button 
                  onClick={() => updateQuantity(quantity + 1)}
                  className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 rounded-full font-semibold flex items-center justify-center transition-all duration-300 ${
                  addedToCart 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
              
              <button 
                onClick={toggleFavorite}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                aria-label="Add to favorites"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </button>
            </div>
            
            {/* Product features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Product Details</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Premium quality materials</li>
                <li>• Authentic product</li>
                <li>• Limited edition</li>
                {product.has360View && (
                  <li>• Interactive 360° view available</li>
                )}
              </ul>
            </div>
            
            {/* Shipping info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <p className="text-gray-300 mb-2">Free shipping on all orders over $200</p>
              <p className="text-gray-300">Estimated delivery: 3-5 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
