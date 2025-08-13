import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Star, Heart, Users, User } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useFavorites } from '../contexts/FavoritesContext';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    axios
      .get(`https://www.omdbapi.com/?apikey=1bd74fb7&i=${id}&plot=full`)
      .then(res => {
        if (res.data && res.data.Response === 'True') {
          setMovie(res.data);
        } else {
          setError(res.data.Error || 'Movie not found');
        }
      })
      .catch(() => {
        setError('Failed to fetch movie details');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleFavoriteClick = () => {
    if (!movie) return;

    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return <ErrorMessage message="Movie not found" />;

  const isMovieFavorite = isFavorite(movie.imdbID);

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-300 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back</span>
      </button>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=400'}
              alt={movie.Title}
              className="h-96 w-full object-cover md:h-full md:w-80"
            />
          </div>
          
          <div className="p-8 flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{movie.Title}</h1>
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{movie.Year}</span>
                  </div>
                  {movie.Runtime && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{movie.Runtime}</span>
                    </div>
                  )}
                  {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{movie.imdbRating}/10</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleFavoriteClick}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isMovieFavorite 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-700 text-white hover:bg-red-600'
                }`}
              >
                <Heart className={`h-5 w-5 ${isMovieFavorite ? 'fill-current' : ''}`} />
                <span>{isMovieFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
              </button>
            </div>

            {movie.Genre && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {movie.Genre.split(', ').map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.Plot && movie.Plot !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Plot</h3>
                <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {movie.Director && movie.Director !== 'N/A' && (
                <div>
                  <h4 className="flex items-center text-sm font-semibold text-gray-400 mb-1">
                    <User className="h-4 w-4 mr-1" />
                    Director
                  </h4>
                  <p className="text-white">{movie.Director}</p>
                </div>
              )}

              {movie.Actors && movie.Actors !== 'N/A' && (
                <div>
                  <h4 className="flex items-center text-sm font-semibold text-gray-400 mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    Cast
                  </h4>
                  <p className="text-white">{movie.Actors}</p>
                </div>
              )}

              {movie.Released && movie.Released !== 'N/A' && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-1">Release Date</h4>
                  <p className="text-white">{movie.Released}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
