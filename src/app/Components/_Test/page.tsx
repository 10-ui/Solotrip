<<<<<<< HEAD
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as RealSwiper } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { truncate } from 'fs';
RealSwiper.use([Autoplay]);
const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-r"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-l"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-r"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
=======
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as RealSwiper } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { truncate } from 'fs';
RealSwiper.use([Autoplay]);
const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-r"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-l"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={2500}
        allowTouchMove={false}
        className="swiper slide-to-r"
      >
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=2" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=3" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://placehold.jp/700x400.png?text=4" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
>>>>>>> f20f0147035e3e46754a24a7f49a9d3405b4e780
