import React, { useEffect, useMemo, useState } from 'react';
import './categories.css';
import Card from '../../components/card/Card';
import { IMovie } from '../../types/models';
import useMovieData from '../../hooks/useMovieData'; // Import the hook here

type FilterType = 'ACTORS' | 'CATEGORIES' | 'GENRES' | 'SERIES' | 'All';

interface CategoriesProps {
  activeNav: FilterType;
  setActiveNav: (nav: FilterType) => void;
  onPlayMovie: (moviePath: string) => void;
  searchQuery: string;
}

function Categories({
  activeNav,
  setActiveNav,
  onPlayMovie,
  searchQuery,
}: CategoriesProps) {
  const { movies: data, loading, error } = useMovieData(); // Use the hook
  const [movies, setMovies] = useState<IMovie[]>([]);
  const filterOptions: Record<Exclude<FilterType, 'All'>, string[]> = {
    ACTORS: [
      'Jason Statham',
      'Sylvester Stallone',
      'Liam Neeson',
      'Bruce Willis',
      'Clint Eastwood',
      'Denzel Washington',
      'Tom Cruise',
      'Morgan Freeman',
    ],
    CATEGORIES: [
      'Spy',
      'Revenge',
      'Heist',
      'Assassin',
      'Buddy Cop',
      'Superhero',
      'Family',
    ],
    GENRES: [
      'Action',
      'Adventure',
      'Biography',
      'Comedy',
      'Crime',
      'Drama',
      'Fantasy',
      'Horror',
      'Mystery',
      'Romance',
      'Sci-Fi',
      'Thriller',
      'War',
      'Western',
    ],
    SERIES: [
      '21 Jump Street',
      'Bourne',
      'Dirty Harry',
      'Die Hard',
      'Fast & Furious',
      'Indiana Jones',
      'Iron Man',
      'John Wick',
      'The Equalizer',
      'The Transporter',
    ],
  };

  const [activeFilter, setActiveFilter] = useState('All');

  // Efficient Data Filtering using useMemo
  const filteredMovies = useMemo(() => {
    return data.filter((movie) => {
      const matchesSearch = searchQuery
        ? movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesFilter =
        activeFilter === 'All' ||
        (activeNav === 'ACTORS' && movie.cast.includes(activeFilter)) ||
        (activeNav === 'CATEGORIES' && movie.category.includes(activeFilter)) ||
        (activeNav === 'GENRES' && movie.genre.includes(activeFilter)) ||
        (activeNav === 'SERIES' && movie.series === activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [data, searchQuery, activeNav, activeFilter]);

  // Load sorted data when available
  useEffect(() => {
    const sortedData = [...filteredMovies].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setMovies(sortedData);
  }, [filteredMovies]);

  // Handle Filter Selection
  const handleFilterMovies = (filterName: string) => {
    setActiveFilter(filterName);
  };

  // Loading/Error Handling
  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="categories" className="categories">
      <div className="container-fluid">
        <ul className="filters">
          <li
            className={activeFilter === 'All' ? 'active' : ''}
            onClick={() => handleFilterMovies('All')}
          >
            All
          </li>
          {filterOptions[activeNav as Exclude<FilterType, 'All'>]?.map(
            (filter) => (
              <li
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => handleFilterMovies(filter)}
              >
                {filter}
              </li>
            ),
          )}
        </ul>

        <div className="row mt-5">
          {movies.map((movie) => (
            <Card key={movie._id} movie={movie} onPlayMovie={onPlayMovie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
