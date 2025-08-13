import React from 'react';
import { Heart } from 'lucide-react';
import MovieList from '../components/MovieList';
import { useFavorites } from '../contexts/FavoritesContext';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Heart className="h-8 w-8 text-red-500 fill-current" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">My Favorites</h1>
        </div>
        <p className="text-gray-300">Your personal movie collection</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <Heart className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
              <p className="text-gray-300">Start exploring movies and add them to your favorites!</p>
            </div>
          </div>
        </div>
      ) : (
        <MovieList movies={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
