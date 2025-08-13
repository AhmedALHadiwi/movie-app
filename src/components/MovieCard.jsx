import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isMovieFavorite = isFavorite(movie.imdbID);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMovieFavorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="relative">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400'}
            alt={movie.Title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {movie.Title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{movie.Year}</span>
          </div>
        </div>
      </Link>
      
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
          isMovieFavorite 
            ? 'bg-red-600 text-white' 
            : 'bg-black/50 text-white hover:bg-red-600'
        }`}
      >
        <Heart className={`h-5 w-5 ${isMovieFavorite ? 'fill-current' : ''}`} />
      </button>
    </div>
  );
};

export default MovieCard;
