import React, { useState, useEffect } from 'react';
import './featured.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import FeaturedCard from '../../components/featuredCard/FeaturedCard';
import { IMovie } from '../../types/models';

function Featured() {
  const [slides, setSlides] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((res) => res.json())
      .then((data) => {
        const shuffledData = data.sort(() => Math.random() - 0.5); // Shuffle the array
        setSlides(shuffledData);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="featured" className="featured">
      <div className="container-fluid">
        {/* <div className="row" data-aos="fade-up" data-aos-delay="100">
          <h4 className="section-title">Featured Films</h4>
        </div> */}
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="featuredSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide: IMovie) => (
                <SwiperSlide key={slide._id}>
                  <FeaturedCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Featured;
