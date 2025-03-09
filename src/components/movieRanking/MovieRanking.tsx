import React from 'react';
import './movieRanking.css';
import { IMovie } from '../../types/models';

interface IMovieRanking {
  movie: IMovie;
}

function MovieRanking({ movie }: IMovieRanking) {
  return (
    // <div className={`ranking ${movie.active ? 'active' : undefined}`}>
    <div className={`ranking`}>{/* <h2>#{movie.ranking}</h2> */}</div>
  );
}

export default MovieRanking;
