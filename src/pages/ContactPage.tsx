import React from 'react';
import { Instagram, Youtube, BookIcon as TiktokIcon, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
            <p className="text-gray-400 mb-8">
              Have questions about our products or services? We're here to help!
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                    className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <TiktokIcon className="h-6 w-6" />
                  </a>
                  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;