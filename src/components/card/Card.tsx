import React from 'react';
import './card.css';
import { IMovie } from '../../types/models';
import LazyImage from '../lazyImage';
import path from 'path-browserify';

interface ICard {
  movie: IMovie;
  onPlayMovie: (moviePath: string) => void;
}

function Card({ movie, onPlayMovie }: ICard) {
  const isElectron = Boolean(
    typeof window !== 'undefined' &&
      window.process &&
      window.process.versions &&
      window.process.versions.electron,
  );

  const getFilePath = (pathStr: string) => {
    if (isElectron) {
      // Ensure correct path reference for Electron
      const correctedPath = path.resolve(`E:/${pathStr}`).replace(/\\/g, '/');
      return `file:///${correctedPath}`;
    } else {
      // Ensure correct path for web mode
      return `http://localhost:8080/${pathStr}`;
    }
  };

  // Updated movie path logic
  const moviePath = getFilePath(`movies/${movie.title} (${movie.year}).mp4`);
  const movieImagePath = getFilePath(movie.previewImg);

  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <h4>{movie.title}</h4>
      <div
        className="movie-card"
        onClick={() => onPlayMovie(moviePath)}
        style={{ cursor: 'pointer' }}
      >
        <LazyImage src={movieImagePath} alt={movie.title} />
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
