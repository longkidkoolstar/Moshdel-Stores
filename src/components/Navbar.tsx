import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state, dispatch } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-sm'} ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 animate-fade-in">
            <Link to="/" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors">
              <span className="animate-pulse-subtle inline-block">MOSHDEL</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block animate-slide-down">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all ${location.pathname === '/' ? 'text-white after:w-full' : 'text-gray-300'}`}
              >
                Home
              </Link>
              <Link
                to="/brands"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all ${location.pathname === '/brands' ? 'text-white after:w-full' : 'text-gray-300'}`}
              >
                Brands
              </Link>
              <Link
                to="/new-arrivals"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all ${location.pathname === '/new-arrivals' ? 'text-white after:w-full' : 'text-gray-300'}`}
              >
                New Arrivals
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all ${location.pathname === '/contact' ? 'text-white after:w-full' : 'text-gray-300'}`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Cart button with animation */}
            <button
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors duration-300 relative animate-fade-in"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            >
              <ShoppingBag className="h-6 w-6 hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-zinc-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-3 animate-slide-down">
            <div className="flex flex-col space-y-2 border-t border-zinc-800 pt-3">
              <Link
                to="/"
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${location.pathname === '/' ? 'bg-zinc-800 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white'}`}
              >
                Home
              </Link>
              <Link
                to="/brands"
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${location.pathname === '/brands' ? 'bg-zinc-800 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white'}`}
              >
                Brands
              </Link>
              <Link
                to="/new-arrivals"
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${location.pathname === '/new-arrivals' ? 'bg-zinc-800 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white'}`}
              >
                New Arrivals
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${location.pathname === '/contact' ? 'bg-zinc-800 text-white' : 'text-gray-300 hover:bg-zinc-900 hover:text-white'}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;