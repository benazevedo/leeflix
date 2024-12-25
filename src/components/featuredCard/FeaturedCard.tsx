import React from 'react';
import { IMovie } from '../../types/models';
import './featuredCard.css';

interface IFeaturedCard {
  slide: IMovie;
}

function FeaturedCard({ slide }: IFeaturedCard) {
  return (
    <div className="featured-card">
      <img className="img-fluid" src={slide.previewImg} />
      {/* <a href="#">
       Add to Watch List <ion-icon name="calendar-outline"></ion-icon>
      </a> */}
    </div>
  );
}

export default FeaturedCard;
