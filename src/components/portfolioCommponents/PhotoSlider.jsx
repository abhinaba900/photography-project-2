import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationArrowLeft, NavigationArrowRight } from "../../assets";

function PhotoSlider({ data, BodySections }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [dataAvailable, setDataAvailable] = React.useState(false);
  const [slides, setSlides] = React.useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      setDataAvailable(true);
    } else {
      setDataAvailable(false);
    }
  }, [data, BodySections]);

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
  }, [dataAvailable, BodySections]);

  useEffect(() => {
    const slides =
      data?.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <section key={`section-${index}`}>
            <img loading="lazy" src={slide} alt={`Slide ${index + 1}`} />
          </section>
        </SwiperSlide>
      )) || [];
    if (data?.length > 0) {
      setSlides(slides);
    }
  }, [data, BodySections]);

  // Check the number of slides and adjust Swiper settings accordingly
  const loopMode = data?.length > 2;

  return (
    <div className="photograph-slider-container-parent photograph-slider-container-parent-2 container">
      {dataAvailable ? (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={80}
            loop={loopMode}
            modules={[Navigation]}
            className="mySwiper"
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides}
          </Swiper>
          <div ref={prevRef} className="swiper-prev-el">
            <img src={NavigationArrowLeft} alt="Previous button" />
          </div>
          <div ref={nextRef} className="swiper-next-el">
            <img src={NavigationArrowRight} alt="Next button" />
          </div>
        </>
      ) : (
        <p className="w-100 text-center fw-bold fs-1">No data available</p>
      )}
    </div>
  );
}

export default PhotoSlider;
