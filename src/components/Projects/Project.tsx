import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow,FreeMode } from "swiper";

export function Projects() {
  return (
    <section id="projects">
      <article>
        <header>
          <h2>Projelerimiz</h2>
          <p>
            Tüm projelerimizde modern,yenilikçi,kaliteye önem veren bir bakış
            açısıyla çalışıyoruz.
          </p>
        </header>
        <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={"auto"}
     
         spaceBetween={30}
         freeMode={true}
         pagination={{
           clickable: true,
         }}
         modules={[FreeMode,EffectCoverflow, Pagination]}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <img src="yaseminkent.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="yaseminkent2.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="yaseminkent3.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="dimore.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="dimore2.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="dimore3.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="dimore4.jpeg" alt="" />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
}
