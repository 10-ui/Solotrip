import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import Back from '../../public/images/background.png';
import Instagram from './@instagram/page';
import Sliders from './@sliders/page';
// import Test from './@test/page';
import Introduce from './@introduce/page';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="fixed mx-[6.5dvw] mt-[5dvh] z-50">
        <Image
          className="w-[30dvw] fixed bg-[#EEF2E8] py-1 px-2 box-content rounded"
          src={Logo}
          alt="ソロトリロゴ"
        ></Image>
        <div className="hbg-menu fixed right-[6.5dvw]">
          <Link href="/login">
            <div
              className=" menu relative w-10 h-1 bg-slate-50 rounded
                          before:absolute before:w-10 before:h-1 before:bg-slate-50 before:rounded before:top-3
                          after:absolute after:w-10 after:h-1 after:bg-slate-50 after:rounded after:top-6"
            ></div>
          </Link>
        </div>
      </header>
      <main>
        <section className="topview mb-[75px]">
          <div className="relative">
            <Sliders />
          </div>
          <div className="absolute w-full flex justify-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 ">
            <h1 className="text-5xl font-black text-white">
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
          <Instagram />
        </section>
        <Introduce />
      </main>
    </>
  );
}
