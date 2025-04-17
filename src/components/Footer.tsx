import React from 'react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MOSHDEL STORES</h3>
            <p className="text-gray-400">Your destination for luxury footwear</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-zinc-800">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-zinc-800">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-zinc-800">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Moshdel Stores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;