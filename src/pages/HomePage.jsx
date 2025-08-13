import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) return;
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=1bd74fb7&s=${searchTerm}`);
      if (res.data.Response === 'True') {
        setMovies(res.data.Search);
      } else {
        setError(res.data.Error);
        setMovies([]);
      }
    } catch {
      setError('Failed to fetch movies');
      setMovies([]);
    }

    setLoading(false);
  };

  return (
    <div >
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your Next
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Movie</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover movies, read reviews, and build your favorites collection
        </p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && hasSearched && movies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No movies found. Try a different search term.</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <MovieList movies={movies} title="Search Results" />
      )}

      {!hasSearched && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-2">Welcome to MovieFinder</h3>
              <p className="text-gray-300">Search for any movie to get started!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
