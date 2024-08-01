import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationArrowLeft, NavigationArrowRight } from "../../assets";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../css/PhotoGraphSlider.css";

function PhotoGraphSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [dataAvailable, setDataAvailable] = React.useState(false);

  useEffect(() => {
    if (data?.length > 0) {
      setDataAvailable(true);
    } else {
      setDataAvailable(false);
    }
  }, [data]);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(".mySwiper").swiper;
      if (swiper) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [dataAvailable]);

  const slides = data?.map((slide, index) => (
    <SwiperSlide key={uuidv4() + index}>
      <section key={`slide-home-${index + uuidv4()}`}>
        <img
          loading="lazy"
          src={slide}
          alt={`slides-home-${index + uuidv4()}`}
        />
      </section>
    </SwiperSlide>
  ));

  // Check the number of slides and adjust Swiper settings accordingly
  const loopMode = data?.length > 2;

  const duplicatedSlides = dataAvailable ? [...slides, ...slides] : [];

  return (
    <div className="photograph-slider-container-parent container">
      {dataAvailable ? (
        <div className="swiper-main-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={80}
            loop={loopMode}
            modules={[Navigation]}
            className="mySwiper"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                spaceBetween: 80,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              430: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {duplicatedSlides}
          </Swiper>
          <div ref={prevRef} className="swiper-prev">
            <img src={NavigationArrowLeft} alt="Previous button" />
          </div>
          <div ref={nextRef} className="swiper-next">
            <img src={NavigationArrowRight} alt="Next button" />
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default PhotoGraphSlider;
