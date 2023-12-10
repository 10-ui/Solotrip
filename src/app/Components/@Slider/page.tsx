import Image from 'next/image';
import Goheimochi from '../../../../public/images/slider/Goheimochi.png';
import Guiter from '../../../../public/images/slider/Guiter.png';
import Ichigo from '../../../../public/images/slider/Ichigo.png';
import Kaminari from '../../../../public/images/slider/Kaminari.png';
import Night from '../../../../public/images/slider/Night.png';
import Shisa from '../../../../public/images/slider/Shisa.png';

export default function Slider() {
  return (
    <div className="sliders mb-8">
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
    </div>
  );
}
