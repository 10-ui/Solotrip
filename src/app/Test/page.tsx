'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Goheimochi from '../../../public/images/slider/Goheimochi.png';
import Guiter from '../../../public/images/slider/Guiter.png';
import Ichigo from '../../../public/images/slider/Ichigo.png';
import Kaminari from '../../../public/images/slider/Kaminari.png';
import Night from '../../../public/images/slider/Night.png';
import Shisa from '../../../public/images/slider/Shisa.png';

export default function Test() {
  const [current, setCurrent] = useState(0);
  const [x, setX] = useState(0);
  const refX = useRef(x);
  useEffect(() => {
    x === 6 ? setX(0) : null;
    refX.current = x;
  }, [x]);
  useEffect(() => {
    const count = setInterval(() => {
      setX(refX.current + 1);
      const num = refX.current;
      console.log(num);
      const slider = document.querySelectorAll('.test img');
      console.log(slider);
      slider.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-r')
          : item.classList.remove('enter-r');
      });
      if (num === 0) {
        slider[5].classList.add('leave-r');
        console.log(slider[5]);
      } else {
        slider.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-r')
            : item.classList.remove('leave-r');
        });
      }
    }, 2000);
    return () => clearInterval(count);
  }, []);

  return (
    <div className="sliders">
      <ul className="grid grid-cols-3 grid-rows-3 bg-bases gap-0.5 w-vw h-vh">
        <li className="slider-imgs test">
          <Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image>
        </li>
        <li className="slider-imgs">
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          {/*<Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
          
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image> */}
        </li>
        <li className="slider-imgs">
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          {/*<Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
         <Image src={Goheimochi} alt="輝く五平餅"></Image>

          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image> */}
        </li>
        <li className="slider-imgs">
          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          {/*<Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
         <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image> */}
        </li>
        <li className="slider-imgs">
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          {/*<Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
         <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image> */}
        </li>
        <li className="slider-imgs">
          <Image src={Kaminari} alt="東京の浅草寺雷門"></Image>
          {/*<Image src={Ichigo} alt="佐賀県名物白いちご"></Image>
         <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"
          ></Image>
          <Image src={Night} alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
           */}
        </li>
      </ul>
    </div>
  );
}
