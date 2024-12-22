import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AuthContext } from "../../Context/AuthProvider";

export default function App() {
                    const {user} = useContext(AuthContext)
  return (
    <>
    {user && (
        <h1 className="text-3xl sm:mt-10 mb-10 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {/*  */}
          Hello {user.displayName},Welcome To
          <Typewriter
            words={[" Home", " Dashboard", " Website"]}
            loop={30}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/1KN7BXj/images-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/cc2YsWK/download-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/PcGGVwc/download.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full lg:w-10/12 mx-auto h-[300px] md:h-[450px] lg:h-[600px] rounded-xl"
            src="https://i.ibb.co.com/rZdMKdh/images-3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
