import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state, dispatch } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">MOSHDEL</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link>
              <Link to="/brands" className="hover:text-gray-300 px-3 py-2">Brands</Link>
              <Link to="/new-arrivals" className="hover:text-gray-300 px-3 py-2">New Arrivals</Link>
              <Link to="/contact" className="hover:text-gray-300 px-3 py-2">Contact</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-zinc-800 relative"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;