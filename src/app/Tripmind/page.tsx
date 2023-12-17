'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Baloo_Bhaijaan_2 } from 'next/font/google';
import { Yusei_Magic } from 'next/font/google';
import { useRef, useEffect } from 'react';

const steps = Baloo_Bhaijaan_2({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
});
const ttl = Yusei_Magic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Tripmind() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: 'play none none reverse',
          start: 'top center', //開始時のトリガー条件
          end: 'bottom center', //終了時のトリガー条件
          markers: true, // マーカー表示
        },
      }
    );
  };

  return (
    <>
      <main className="w-350 mx-auto mt-100 text-bases">
        <h2 className="text-4xl text-left font-bold drop-shadow-ttl mb-2">
          <span className="text-accent">旅マインド</span>
          の
          <br />
          つくり方
        </h2>
        <p className="text-2xl font-bold drop-shadow-ttl">
          How to make
          <span className="text-accent"> trip mind</span>?
        </p>
        <hr className="my-8 mb-[999px]" />
        <section className="mb-8">
          <h3
            className={`${steps.className} text-2xl mb-4`}
            ref={ref}>
            Step1.
            <br />
            <span
              className={`${ttl.className} text-[28px]`}>
              誰かと比較しないこと
            </span>
          </h3>
          <p className={`${ttl.className} text-base`}>
            今回は自分を再認識する旅。
            <br />
            誰かと比べて劣っているとか
            <br />
            周りにどう思われるとかは
            <br />
            一切関係ありません。
            <br />
            思いっきり自分を楽しみましょう！
          </p>
        </section>
        <section className="mb-8">
          <h3
            className={`${steps.className} text-2xl mb-4`}>
            Step2.
            <br />
            <span
              className={`${ttl.className} text-[28px]`}>
              できたことに目を向ける
            </span>
          </h3>
          <p className={`${ttl.className} text-base`}>
            できたことにだけ目を向ける。
            <br />
            小さな成功体験に目を向けるのも
            <br />
            大切なポイント
          </p>
        </section>
        <section className="mb-8">
          <h3
            className={`${steps.className} text-2xl mb-4`}>
            Step3.
            <br />
            <span
              className={`${ttl.className} text-[28px]`}>
              旅の恥は掻き捨て
            </span>
          </h3>
          <p className={`${ttl.className} text-base`}>
            旅先に知り合いや今後関わる人が <br />
            いることは稀なケース。 <br />
            だったらどんどん挑戦して、 <br />
            話しかけて、少しでも多くの考え方や
            <br />
            人に触れ合ってみよう
          </p>
        </section>
      </main>
    </>
  );
}
