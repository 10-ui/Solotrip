'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as RealSwiper } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
RealSwiper.use([Autoplay]);

const food: Array<string> = [
  '/images/slider/Ichigo.png',
  '/images/slider/Goheimochi.png',
  '/images/slider/Kiri.png',
];

const place: Array<string> = [
  '/images/slider/Backpack.png',
  '/images/slider/Night.png',
  '/images/slider/Guiter.png',
];

const pref: Array<string> = [
  '/images/slider/Shisa.png',
  '/images/slider/Kaminari.png',
  '/images/slider/Yuki.png',
];

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={4500}
        allowTouchMove={false}
        className="swiper"
      >
        {food.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} width={390} height={285} alt="food_img" />
          </SwiperSlide>
        ))}
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
        speed={4500}
        allowTouchMove={false}
        className="swiper slide-to-l"
      >
        {place.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} width={390} height={285} alt="place_img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: true }}
        centeredSlides={true}
        loop={true}
        speed={4500}
        allowTouchMove={false}
        className="swiper slide-to-r"
      >
        {pref.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} width={390} height={285} alt="pref_img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
