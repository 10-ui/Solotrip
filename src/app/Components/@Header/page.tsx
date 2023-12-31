'use client';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.svg';
import Clogo from '../../../../public/images/solotori.svg';
import Ilogo from '../../../../public/images/Instagram.svg';
import Alogo from '../../../../public/images/account.svg';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../../../../utils/supabase';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let nowPos = 0;
  const toggleVisibility = () => {
    window.scrollY > nowPos
      ? setIsVisible(true)
      : setIsVisible(false);
    nowPos = window.scrollY;
  };

  const Logout = async () => {
    toggleMenu();
    try {
      const { error: logoutError } =
        await supabase.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      await router.push('/');
    } catch {
      alert('エラーが発生しました');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () =>
      window.removeEventListener(
        'scroll',
        toggleVisibility
      );
  }, []);
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
        <div
          className={` ${
            isVisible ? 'hide' : ''
          } fades flex z-20 fixed top-0 left-0 px-6 items-center justify-between h-60 w-vw bg-bases border-b-1 border-darks`}>
          <h1>
            <Link href="/">
              <Image
                src={Logo}
                alt="ソロトリロゴ"
                onClick={toggleMenu}></Image>
            </Link>
          </h1>
          <div className="hbg-menu" onClick={toggleMenu}>
            <div
              className={`menu relative w-25 h-line rounded-2
                            ${
                              isMenuOpen
                                ? 'bg-transparent'
                                : 'bg-darks'
                            }
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
                          }`}></div>
          </div>
        </div>
        <nav
          className={`fixed z-10 w-vw h-vh bg-bases transition-all ease-in duration-300 top-0 pt-76 px-6 ${
            isMenuOpen ? 'right-0' : '-right-vw'
          }`}>
          <ul className="flex">
            <li className="mr-1">
              <Link href="https://www.instagram.com/solotori_official/">
                <Image
                  src={Ilogo}
                  alt="ソロトリインスタ"></Image>
              </Link>
            </li>
            <li className="mr-1">
              <Link href="https://solotori.jp/">
                <Image src={Clogo} alt="ソロトリHP"></Image>
              </Link>
            </li>
            <li>
              <Link href="/Login" onClick={toggleMenu}>
                <Image
                  src={Alogo}
                  alt="loginフォーム"></Image>
              </Link>
            </li>
          </ul>
          <ul className="mt-48 text-center">
            <li
              className="py-2 rounded-2 border-y-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/">TOP</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/Tripmind">旅マインド</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/Bingo">旅ビンゴ</Link>
            </li>
            <li
              className="py-2 rounded-2 border-b-2 text-xl font-bold text-main"
              onClick={toggleMenu}>
              <Link href="/Handbook">旅のハンドブック</Link>
            </li>
            <li
              className={`py-2 rounded-2 border-b-2 text-xl font-bold text-main`}
              onClick={Logout}>
              <Link href="/Handbook">ログアウト</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
