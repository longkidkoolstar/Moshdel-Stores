import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    dispatch({ type: 'TOGGLE_CART' });
    navigate('/checkout');
  };

  // Reference to the cart panel for animations
  const cartRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    if (!state.isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        dispatch({ type: 'TOGGLE_CART' });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.isOpen, dispatch]);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [state.isOpen]);

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      />

      {/* Cart panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-md flex animate-slide-in-right" style={{ animationDuration: '400ms' }}>
        <div ref={cartRef} className="flex h-full w-full flex-col bg-zinc-900/95 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-zinc-800 animate-slide-down" style={{ animationDuration: '500ms' }}>
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="h-6 w-6 mr-3 animate-bounce-in" style={{ animationDuration: '600ms' }} />
              <span className="animate-slide-in-right" style={{ animationDuration: '600ms', animationDelay: '100ms' }}>Shopping Cart</span>
            </h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors duration-200"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-5">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 animate-fade-in" style={{ animationDuration: '600ms' }}>
                <ShoppingBag className="h-16 w-16 mb-4 opacity-30" />
                <p className="text-lg mb-2">Your cart is empty</p>
                <p className="text-sm max-w-xs mx-auto mb-6">Looks like you haven't added any items to your cart yet.</p>
                <button
                  onClick={() => {
                    dispatch({ type: 'TOGGLE_CART' });
                    navigate('/new-arrivals');
                  }}
                  className="text-white border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-zinc-800/80 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-md h-20 w-20 group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.brand}</p>
                      <p className="font-semibold mt-1 text-white/90">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                        className="text-red-400 hover:text-red-300 transition-colors p-1 hover:bg-zinc-700/50 rounded-full"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="flex items-center bg-zinc-700/50 rounded-full p-1">
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                          })}
                          className="p-1 hover:bg-zinc-600/70 rounded-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 }
                          })}
                          className="p-1 hover:bg-zinc-600/70 rounded-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with total and checkout button */}
          <div className="border-t border-zinc-800 p-5 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-400 text-sm">Subtotal</p>
                <p className="text-2xl font-bold">${total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">{state.items.reduce((sum, item) => sum + item.quantity, 0)} items</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
              disabled={state.items.length === 0}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;