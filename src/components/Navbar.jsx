import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
            <Film className="h-8 w-8" />
            <span className="text-xl font-bold">MovieFinder</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Search
            </Link>
            <Link
              to="/favorites"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/favorites' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
