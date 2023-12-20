import { Dela_Gothic_One } from 'next/font/google';
const bingo = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Bingo() {
  return (
    <main className="w-350 mx-auto mt-100 text-bases">
      <section>
        <h2 className="text-4xl font-bold">旅ビンゴ</h2>
        <hr className="my-8" />
        <p className="text-base">
          旅でやりたいことや今までの旅でできたこと！
          <br />
          思い出を書き出して、
          <br />
          新しい体験に向けてビンゴしませんか？
        </p>
        <hr className="my-8" />
        <div className="w-250 mx-auto">
          <p className={`${bingo.className} text-2xl text-center py-2 bg-bh tracking-widest`}>
            ★ BINGO! ★
          </p>
        </div>
      </section>
    </main>
  );
}
