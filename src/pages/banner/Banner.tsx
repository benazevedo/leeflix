import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../../components/movieContent/MovieContent';
import MovieSwiper from '../../components/movieSwiper/MovieSwiper';
import PlayBtn from '../../components/playBtn/PlayBtn';
import MovieRanking from '../../components/movieRanking/MovieRanking';
import { IMovie } from '../../types/models';

function Banner() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data) => {
        // Set the first movie as active and the rest as inactive
        const initializedMovies = data.map((movie: IMovie, index: number) => ({
          ...movie,
          active: index === 0, // Set the first movie as active
        }));
        setMovies(initializedMovies);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id: number) => {
    const newMovies = movies.map((movie: IMovie) => {
      // movie.active = false;
      // if (movie._id === id) {
      //   movie.active = true;
      // }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="banner" data-aos="fade-up" data-aos-delay="100">
      {movies &&
        movies.length > 0 &&
        movies.map((movie: IMovie) => (
          <div key={movie._id} className="movie">
            <img
              src={movie.bgImg}
              alt=""
              className={`bgImg active`}
              // className={`bgImg ${movie.active ? 'active' : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center">
                  {/* <MovieRanking movie={movie} /> */}
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}
      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
