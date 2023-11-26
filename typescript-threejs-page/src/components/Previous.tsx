import React from 'react'
import nft from "../images/nftmonkey.jpg"
import nft2 from "../images/white-nft.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Previous = () => {
  return (
    <>
        <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={nft} alt="Slide 1" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft} alt="Slide 2" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft2} alt="Slide 3" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft} alt="Slide 4" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft} alt="Slide 5" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft} alt="Slide 6" />
          <p>NEO</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nft} alt="Slide 7" />
          <p>NEO</p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Previous