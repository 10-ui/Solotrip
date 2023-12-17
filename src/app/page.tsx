import Copy from './Components/@Copy/page';
import Instagram from './Components/@Instagram/page';
import Slider from './Components/@Slider/page';
export default function Home() {
  return (
    <>
      <Slider />
      <Copy />
      <main className="w-350 mx-auto mt-100 text-bases">
        <Instagram />
      </main>
    </>
  );
}
