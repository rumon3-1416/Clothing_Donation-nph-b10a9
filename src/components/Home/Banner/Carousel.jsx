import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './carousel.css';
import Slide from './Slide';

const Carousel = () => {
  const [offersData, setOffersData] = useState([]);

  useEffect(() => {
    fetch('bannerCarouselData.json')
      .then(res => res.json())
      .then(data => setOffersData(data));
  }, []);

  return (
    <div className="slider-container">
      {offersData?.length > 2 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {offersData?.map(offerData => (
            <SwiperSlide key={offerData.productId}>
              <Slide offerData={offerData} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
