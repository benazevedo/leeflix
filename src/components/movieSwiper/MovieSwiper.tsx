import React from 'react';
import './movieSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { IMovie } from '../../types/models';

interface IMovieSwiper {
  slides: IMovie[];
  slideChange: (id: number) => void;
}

function MovieSwiper({ slides, slideChange }: IMovieSwiper) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide: IMovie) => (
        <SwiperSlide key={slide._id}>
          <div className="image-container">
            <span className="ranking-badge">#{slide.ranking}</span>
            <img
              src={slide.previewImg}
              alt={slide.title}
              onClick={() => slideChange(slide._id)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
