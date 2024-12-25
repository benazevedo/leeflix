import React, { useState, useEffect } from 'react';
import './categories.css';
import Card from '../../components/card/Card';
import { IMovie } from '../../types/models';

interface CategoriesProps {
  activeNav: any;
  setActiveNav: (nav: any) => void;
  onPlayMovie: (moviePath: string) => void;
  searchQuery: string; // Receive search query
}

function Categories({
  activeNav,
  setActiveNav,
  onPlayMovie,
  searchQuery,
}: CategoriesProps) {
  const [data, setData] = useState<IMovie[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filters, setFilters] = useState([
    { _id: 1, name: 'All', active: true },
    {
      _id: 2,
      name: 'Action',
      active: false,
    },
    {
      _id: 3,
      name: 'Adventure',
      active: false,
    },
    // {
    //   _id: 4,
    //   name: 'Animation',
    //   active: false,
    // },
    {
      _id: 6,
      name: 'Biography',
      active: false,
    },
    {
      _id: 7,
      name: 'Comedy',
      active: false,
    },
    {
      _id: 8,
      name: 'Crime',
      active: false,
    },
    // {
    //   _id: 8,
    //   name: 'Documentary',
    //   active: false,
    // },
    {
      _id: 9,
      name: 'Drama',
      active: false,
    },
    {
      _id: 10,
      name: 'Family',
      active: false,
    },
    {
      _id: 11,
      name: 'Fantasy',
      active: false,
    },
    {
      _id: 12,
      name: 'History',
      active: false,
    },
    {
      _id: 13,
      name: 'Horror',
      active: false,
    },
    {
      _id: 14,
      name: 'Mystery',
      active: false,
    },
    {
      _id: 15,
      name: 'Romance',
      active: false,
    },
    {
      _id: 16,
      name: 'Sci-Fi',
      active: false,
    },
    {
      _id: 17,
      name: 'Sport',
      active: false,
    },
    {
      _id: 18,
      name: 'Thriller',
      active: false,
    },
    {
      _id: 19,
      name: 'War',
      active: false,
    },
    {
      _id: 20,
      name: 'Western',
      active: false,
    },
  ]);

  const [actorFilters, setActorFilters] = useState([
    { _id: 1, name: 'All', active: true },
    {
      _id: 2,
      name: 'Jason Statham',
      active: false,
    },
    {
      _id: 3,
      name: 'Sylvester Stallone',
      active: false,
    },
    {
      _id: 4,
      name: 'Liam Neeson',
      active: false,
    },
    {
      _id: 5,
      name: 'Bruce Willis',
      active: false,
    },
    {
      _id: 6,
      name: 'Clint Eastwood',
      active: false,
    },
    {
      _id: 7,
      name: 'Mark Wahlberg',
      active: false,
    },
    {
      _id: 8,
      name: 'Denzel Washington',
      active: false,
    },
    {
      _id: 9,
      name: 'Tom Cruise',
      active: false,
    },
    {
      _id: 10,
      name: 'Mel Gibson',
      active: false,
    },
    {
      _id: 11,
      name: 'Harrison Ford',
      active: false,
    },
    {
      _id: 12,
      name: 'Robert De Niro',
      active: false,
    },
    {
      _id: 13,
      name: 'Sean Connery',
      active: false,
    },
    {
      _id: 14,
      name: 'Nicolas Cage',
      active: false,
    },
    {
      _id: 15,
      name: 'Brad Pitt',
      active: false,
    },
    {
      _id: 16,
      name: 'Russell Crowe',
      active: false,
    },
    {
      _id: 17,
      name: 'Will Ferrell',
      active: false,
    },
    {
      _id: 18,
      name: 'Keanu Reeves',
      active: false,
    },
    {
      _id: 19,
      name: 'Morgan Freeman',
      active: false,
    },
    {
      _id: 20,
      name: 'John Travolta',
      active: false,
    },
  ]);
  const [categoryFilters, setCategoryFilters] = useState([
    { _id: 1, name: 'All', active: true },
    {
      _id: 2,
      name: 'Spy',
      active: false,
    },
    {
      _id: 3,
      name: 'Revenge',
      active: false,
    },
    {
      _id: 4,
      name: 'Heist',
      active: false,
    },
    {
      _id: 5,
      name: 'Assassin',
      active: false,
    },
    {
      _id: 6,
      name: 'Buddy Cop',
      active: false,
    },
    {
      _id: 7,
      name: 'Superhero',
      active: false,
    },
    {
      _id: 8,
      name: 'Family',
      active: false,
    },
    {
      _id: 9,
      name: 'Historical',
      active: false,
    },
    {
      _id: 10,
      name: 'Police',
      active: false,
    },
    {
      _id: 11,
      name: 'Hostage',
      active: false,
    },
    {
      _id: 12,
      name: 'Gangster',
      active: false,
    },
    {
      _id: 13,
      name: 'Boxing',
      active: false,
    },
    {
      _id: 14,
      name: 'Kidnapping',
      active: false,
    },
    {
      _id: 15,
      name: 'Road Trip',
      active: false,
    },
    {
      _id: 16,
      name: 'Archaeology',
      active: false,
    },
  ]);
  const [genreFilters, setGenreFilters] = useState([
    { _id: 1, name: 'All', active: true },
    {
      _id: 2,
      name: 'Action',
      active: false,
    },
    {
      _id: 3,
      name: 'Adventure',
      active: false,
    },
    // {
    //   _id: 4,
    //   name: 'Animation',
    //   active: false,
    // },
    {
      _id: 6,
      name: 'Biography',
      active: false,
    },
    {
      _id: 7,
      name: 'Comedy',
      active: false,
    },
    {
      _id: 8,
      name: 'Crime',
      active: false,
    },
    // {
    //   _id: 8,
    //   name: 'Documentary',
    //   active: false,
    // },
    {
      _id: 9,
      name: 'Drama',
      active: false,
    },
    {
      _id: 10,
      name: 'Family',
      active: false,
    },
    {
      _id: 11,
      name: 'Fantasy',
      active: false,
    },
    {
      _id: 12,
      name: 'History',
      active: false,
    },
    {
      _id: 13,
      name: 'Horror',
      active: false,
    },
    {
      _id: 14,
      name: 'Mystery',
      active: false,
    },
    {
      _id: 15,
      name: 'Romance',
      active: false,
    },
    {
      _id: 16,
      name: 'Sci-Fi',
      active: false,
    },
    {
      _id: 17,
      name: 'Sport',
      active: false,
    },
    {
      _id: 18,
      name: 'Thriller',
      active: false,
    },
    {
      _id: 19,
      name: 'War',
      active: false,
    },
    {
      _id: 20,
      name: 'Western',
      active: false,
    },
  ]);
  const [seriesFilters, setSeriesFilters] = useState([
    { _id: 1, name: 'All', active: true },
    { _id: 2, name: '21 Jump Street', active: false },
    { _id: 3, name: 'Bourne', active: false },
    { _id: 4, name: 'Dirty Harry', active: false },
    { _id: 5, name: 'Die Hard', active: false },
    { _id: 6, name: 'Dollars Trilogy', active: false },
    { _id: 7, name: 'Fast & Furious', active: false },
    { _id: 8, name: 'Indiana Jones', active: false },
    { _id: 9, name: 'Iron Man', active: false },
    { _id: 10, name: 'Jack Reacher', active: false },
    { _id: 11, name: 'Jack Ryan', active: false },
    { _id: 12, name: 'John Wick', active: false },
    { _id: 13, name: 'Kingsman', active: false },
    { _id: 14, name: 'Lethal Weapon', active: false },
    { _id: 15, name: 'Meet the Parents', active: false },
    { _id: 16, name: 'Mission: Impossible', active: false },
    { _id: 17, name: 'National Treasure', active: false },
    { _id: 18, name: "Ocean's", active: false },
    { _id: 19, name: 'Pirates of the Caribbean', active: false },
    { _id: 20, name: 'Rambo', active: false },
    { _id: 21, name: 'Red', active: false },
    { _id: 22, name: 'Rush Hour', active: false },
    { _id: 23, name: 'Sicario', active: false },
    { _id: 24, name: 'Taken', active: false },
    { _id: 25, name: 'Ted', active: false },
    { _id: 26, name: 'The Dark Knight Trilogy', active: false },
    { _id: 27, name: 'The Equalizer', active: false },
    { _id: 28, name: 'The Expendables', active: false },
    { _id: 29, name: 'The Godfather', active: false },
    { _id: 30, name: 'The Hangover', active: false },
    { _id: 31, name: 'The Transporter', active: false },
    { _id: 32, name: 'Top Gun', active: false },
  ]);

  // Fetch and load movie data
  useEffect(() => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data: IMovie[]) => {
        // Sort the data array alphabetically by title
        const sortedData = data.sort((a: IMovie, b: IMovie) => {
          return a.title.localeCompare(b.title);
        });
        setData(data);
        setMovies(sortedData);
      })
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    const searchResults = data.filter((movie) => {
      const searchFields = [
        movie.title,
        ...movie.genre,
        ...movie.cast,
        ...movie.category,
        movie.series,
      ];
      return searchFields.some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    });
    setMovies(searchQuery ? searchResults : data);
  }, [searchQuery, data]);

  // Update filters dynamically based on activeNav
  useEffect(() => {
    switch (activeNav) {
      case 'ACTORS':
        setFilters(actorFilters);
        break;
      case 'CATEGORIES':
        setFilters(categoryFilters);
        break;
      case 'GENRES':
        setFilters(genreFilters);
        break;
      case 'SERIES':
        setFilters(seriesFilters);
        break;
      case 'SEARCH':
        setFilters([]);
        break;
      default:
        setFilters([]);
    }
  }, [activeNav, actorFilters, categoryFilters, genreFilters, seriesFilters]);

  const handleFilterMovies = (filterName: string) => {
    let filteredMovies = data;

    if (activeNav === 'ACTORS') {
      setActorFilters((prevFilters) =>
        prevFilters.map((filter) => ({
          ...filter,
          active: filter.name === filterName,
        })),
      );

      if (filterName !== 'All') {
        filteredMovies = data.filter((movie) =>
          movie.cast.includes(filterName),
        );
      }
    } else if (activeNav === 'CATEGORIES') {
      setCategoryFilters((prevFilters) =>
        prevFilters.map((filter) => ({
          ...filter,
          active: filter.name === filterName,
        })),
      );

      if (filterName !== 'All') {
        filteredMovies = data.filter((movie) =>
          movie.category.includes(filterName),
        );
      }
    } else if (activeNav === 'GENRES') {
      setGenreFilters((prevFilters) =>
        prevFilters.map((filter) => ({
          ...filter,
          active: filter.name === filterName,
        })),
      );

      if (filterName !== 'All') {
        filteredMovies = data.filter((movie) =>
          movie.genre.includes(filterName),
        );
      }
    } else if (activeNav === 'SERIES') {
      setSeriesFilters((prevFilters) =>
        prevFilters.map((filter) => ({
          ...filter,
          active: filter.name === filterName,
        })),
      );

      if (filterName !== 'All') {
        filteredMovies = data.filter((movie) => movie.series === filterName);
      }
    }

    setMovies(filteredMovies);
  };

  return (
    <section id="categories" className="categories">
      <div className="container-fluid">
        <ul className="filters">
          {filters.map((filter) => (
            <li
              key={filter._id}
              className={filter.active ? 'active' : ''}
              onClick={() => handleFilterMovies(filter.name)}
            >
              {filter.name}
            </li>
          ))}
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
