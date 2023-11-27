import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import Favicon from '../../public/images/favicon/solo.ico';
import '../css/globals.css';

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
      <body>{children}</body>
    </html>
  );
}
