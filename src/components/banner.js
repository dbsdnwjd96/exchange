// eslint-disable-next-line
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper.scss'

import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard,Autoplay
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard,Autoplay]);
  



function Banner() {
    return (
        <div className="banner">
            <Swiper
            className="banner"
            pagination = {{clickable : true}}
            loop = {true}
            autoplay = {{delay : 3000}} 
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide><img src="img/banner/t1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="img/banner/t2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="img/banner/t3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="img/banner/t4.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;