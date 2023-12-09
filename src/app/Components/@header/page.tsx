'use client';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.svg';
import Clogo from '../../../../public/images/solotori.svg';
import Ilogo from '../../../../public/images/Instagram.svg';
import Alogo from '../../../../public/images/account.svg';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }
  return (
    <>
      <header>
        <div className="flex z-20 fixed top-0 left-0 px-6 items-center justify-between h-60 w-vw bg-bases border-b-1 border-darks">
          <h1>
            <Link href="/">
              <Image src={Logo} alt="ソロトリロゴ"></Image>
            </Link>
          </h1>
          <div className="hbg-menu" onClick={toggleMenu}>
            <div
              className={`menu relative w-25 h-line rounded-2
                            ${isMenuOpen ? 'bg-transparent' : 'bg-darks'}
                            before:absolute before:w-25 before:h-line
                          before:bg-darks before:rounded-2 
                          ${
                            isMenuOpen
                              ? 'before:top-0 before:rotate-45'
                              : 'before:-top-2'
                          }
                            after:absolute after:w-25 after:h-line 
                          after:bg-darks after:rounded-2
                          ${
                            isMenuOpen
                              ? 'after:top-0 after:-rotate-45'
                              : 'after:top-2'
                          }`}
            ></div>
          </div>
        </div>
        <nav
          className={`fixed z-10 w-vw h-vh bg-bases transition-all ease-in duration-300 top-0 pt-76 px-6 ${
            isMenuOpen ? 'right-0' : '-right-vw'
          }`}
        >
          <ul className="flex">
            <li className="mr-1">
              <Link href="https://www.instagram.com/solotori_official/">
                <Image src={Ilogo} alt="ソロトリインスタ"></Image>
              </Link>
            </li>
            <li className="mr-1">
              <Link href="https://solotori.jp/">
                <Image src={Clogo} alt="ソロトリHP"></Image>
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={toggleMenu}>
                <Image src={Alogo} alt="loginフォーム"></Image>
              </Link>
            </li>
          </ul>
          <ul className="mt-48 text-center">
            <li
              className="py-2 rounded-2 border-y-2 text-xl font-bold text-main"
              onClick={toggleMenu}
            >
              <Link href="/">TOP</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}
            >
              <Link href="#">旅マインド</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}
            >
              <Link href="#">旅ビンゴ</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}
            >
              <Link href="/handbook">旅のハンドブック</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
