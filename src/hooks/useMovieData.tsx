import { useEffect, useState } from 'react';
import { IMovie } from '../types/models'; // Ensure correct path for your movie type

function useMovieData() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        // Check if data is already cached in localStorage
        const cachedMovies = localStorage.getItem('movies');
        if (cachedMovies) {
          setMovies(JSON.parse(cachedMovies));
          setLoading(false);
          return;
        }

        // Load data from external JSON file (or adapt for your file structure)
        const response = await fetch('http://localhost:8080/data/movies.json');
        if (!response.ok) throw new Error('Failed to fetch movie data');

        const data = await response.json();

        // Sort data for better UI experience
        const sortedData = [...data].sort((a, b) =>
          a.title.localeCompare(b.title),
        );

        // Cache in localStorage to reduce repeated fetches
        localStorage.setItem('movies', JSON.stringify(sortedData));

        setMovies(sortedData);
      } catch (err) {
        setError('Failed to load movie data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
}

export default useMovieData;
