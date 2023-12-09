import type { Metadata } from 'next';
import Favicon from '../../public/images/favicon/solo.ico';
import '../styles/globals.scss';
import Header from './Components/@Header/page';
import Footer from './Components/@Footer/page';

export const metadata: Metadata = {
  title: {
    default: 'Solotrip スペシャルサイト',
    template: '%s | Solotrip',
  },
  description: 'ソロトリスペシャルサイトです。',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
