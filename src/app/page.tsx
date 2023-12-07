import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import Back from '../../public/images/background.png';
import Instagram from './@instagram/page';
import Sliders from './@sliders/page';
import Link from 'next/link';
import Header from './@header/page';
import Footer from './@footer/page';
import Goheimochi from '../../public/images/slider/Goheimochi.png';
import Guiter from '../../public/images/slider/Guiter.png';
import Ichigo from '../../public/images/slider/Ichigo.png';
import Kaminari from '../../public/images/slider/Kaminari.png';
import Night from '../../public/images/slider/Night.png';
import Shisa from '../../public/images/slider/Shisa.png';
export default function Home() {
  // let count = 0;
  // const countUp = () => {
  //   console.log(count++);
  // };
  // setInterval(countUp, 1000);
  return (
    <>
      {/* <div className="sliders">
        <ul>
          <li className="slider-imgs">
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
          <li className="slider-imgs"></li>
          <li className="slider-imgs"></li>
          <li className="slider-imgs"></li>
          <li className="slider-imgs"></li>
          <li className="slider-imgs"></li>
        </ul>
      </div> */}
      {/* <Header/> */}
      {/* <main>
        <section className="topview mb-[75px]">
          <div className="relative">
            <Sliders />
          </div>
          <div className="absolute w-full flex justify-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 ">
            <h1 className="copy text-5xl font-black text-white">
              とりあえず、
              <br />
              旅してみない？
            </h1>
          </div>
        </section>
        <section className="contents1 mb-[75px]">
          <h2 className="text-2xl font-bold text-center">
            難しいことは考えずに&#128512;
          </h2>
          <p className="text-base text-center mb-[50px]">
            気ままな旅をしながら探してみませんか？
          </p>

        </section>
        <Introduce />
      </main> */}
      <Instagram />
    </>
  );
}
