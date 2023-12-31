import Copy from './Components/@Copy/page';
import Instagram from './Components/@Instagram/page';
import Slider from './Components/@Slider/page';
import Lead from './Components/@Lead/page';
import Goto from './Components/@Goto/page';
import Sidebar from './Components/@Sidebar/page';
export default function Home() {
  return (
    <>
      <Slider />
      <Copy />
      <Sidebar />
      <main className="w-vw text-bases">
        <Lead />
        <Goto />
        <Instagram />
      </main>
    </>
  );
}
