'use client';
import Copy from './Components/@Copy/page';
import Instagram from './Components/@Instagram/page';
import Slider from './Components/@Slider/page';
import Lead from './Components/@Lead/page';
import Goto from './Components/@Goto/page';
import { useEffect } from 'react';
export default function Home() {
  let startPos = 0,
    winScrollTop = 0;

  useEffect(() => {
    const scroll: HTMLElement | null =
      document.querySelector('.scroll');
    const fades: HTMLElement | null =
      document.querySelector('.fades');
    window.addEventListener('scroll', () => {
      winScrollTop = window.scrollY;
      if (winScrollTop >= startPos) {
        fades?.classList.add('hide');
        scroll?.classList.add('hide');
      } else {
        fades?.classList.remove('hide');
        scroll?.classList.remove('hide');
      }
      startPos = winScrollTop;
      console.log(winScrollTop);
      console.log(startPos);
    });
  }, []);
  return (
    <>
      <Slider />
      <Copy />
      <main className="w-vw text-bases">
        <Lead />
        <Goto />
        <Instagram />
      </main>
    </>
  );
}
