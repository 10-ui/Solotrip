'use client';
import { supabase } from '../../../utils/supabase';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState('');
  const [forgotemail, setForgotEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleReset() {
    if (reset) {
      setReset(false);
    } else {
      setReset(true);
    }
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { error: sendEmailError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: 'http://localhost:3000/passwordreset/',
        });
      if (sendEmailError) {
        throw sendEmailError;
      }
      alert('パスワード設定メールを確認してください');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (signInError) {
        throw signInError;
      }
      await router.push('/top');
    } catch {
      alert('エラーが発生しました');
    }
  };

  return (
    <main className="w-350 mx-auto mt-100 mb-160 text-bases" id="login">
      <section className={`${reset ? 'hidden' : ''}`} id="loging">
        <h1 className="text-4xl font-bold text-left mb-8">ログイン</h1>
        <form className="mb-8" onSubmit={onLogin}>
          <div>
            <label className="w-full text-base mb-3 font-bold" htmlFor="email">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="email"
              placeholder="メールアドレス"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="w-full text-base mb-3 font-bold"
              htmlFor="password"
            >
              パスワード
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="password"
              placeholder="パスワード"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link href="#forgot" className="mb-8 underline" onClick={toggleReset}>
            パスワードをお忘れですか？
          </Link>
          <button
            className="border-bases border-3 w-full font-bold text-base py-3 px-4 rounded-42 flex justify-end items-center"
            type="submit"
          >
            ログインする
            <img src="./images/Arrow.svg" alt="矢印" className="pl-[79px]" />
          </button>
        </form>
      </section>
      <hr className={`my-8 ${reset ? 'hidden' : ''}`} />
      <section className={`${reset ? 'hidden' : ''}`} id="signup">
        <h2 className="text-4xl font-bold text-left mb-4">新規登録</h2>
        <p className="text-sm text-bases mb-8">
          会員登録で「旅ビンゴ」を利用できます。
          <br />
          旅の記録や思い出をビンゴにして豪華景品をGET！！
        </p>
        <Link
          href="/signup"
          className="bg-accent text-center w-full font-bold text-base py-3 px-4 rounded-42 flex justify-end items-center"
        >
          新規会員登録をする
          <img src="./images/Arrow.svg" alt="矢印" className="pl-[59px]" />
        </Link>
      </section>
      <section className={`mt-100 mb-160 ${reset ? '' : 'hidden'}`} id="forgot">
        <h3 className="text-4xl font-bold text-left mb-4">
          パスワードリセット
        </h3>
        <form onSubmit={onSubmit}>
          <p className="text-sm text-bases mb-8">
            ご登録のメールアドレスを入力してください。
            <br />
            パスワードの再設定をメールでご案内いたします。
          </p>
          <hr className="my-8" />
          <div>
            <label className="w-full text-base mb-3 font-bold" htmlFor="email">
              メールアドレス
            </label>
            <input
              type="email"
              name="forgotemail"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="forgotemail"
              placeholder="メールアドレス"
              required
              value={forgotemail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
          </div>
          <Link
            href="/signup"
            className="bg-accent text-center w-full font-bold text-base py-4 px-4 mt-8 rounded-42"
          >
            送信
          </Link>
          <Link
            href="#login"
            className="mt-4 text-center underline"
            onClick={toggleReset}
          >
            ログインへ戻る
          </Link>
        </form>
      </section>
    </main>
  );
}
