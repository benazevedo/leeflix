import React from 'react';
import './movieContent.css';
import Button from '../button/Button';
import { IMovie } from '../../types/models';

interface IMovieContent {
  movie: IMovie;
}

function MovieContent({ movie }: IMovieContent) {
  return (
    // <div className={`content ${movie.active ? 'active' : undefined}`}>
    <div className={`content`}>
      <img className="movie-title" src={movie.titleImg} alt={movie.title} />
      <h4>
        <span>{movie.title}</span>
        <span>{movie.year}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        {/* <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Watch Later"
          color="var(--primary)"
          bgColor="#ffffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
        /> */}
      </div>
    </div>
  );
}

export default MovieContent;
