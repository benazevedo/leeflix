import React from 'react';
import './card.css';
import { IMovie } from '../../types/models';

interface ICard {
  movie: IMovie;
  onPlayMovie: (moviePath: string) => void;
}

function Card({ movie, onPlayMovie }: ICard) {
  const moviePath = `http://localhost:8080/movies/${movie.title} (${movie.year}).mp4`;
  const movieImagePath = `http://localhost:8080/images/${movie.previewImg}`;

  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div
        className="movie-card"
        onClick={() => onPlayMovie(moviePath)}
        style={{ cursor: 'pointer' }}
      >
        <img className="img-fluid" src={movieImagePath} alt={movie.title} />
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <h6>{movie.year}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
