'use client';
import { supabase } from '../../../utils/supabase';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

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
    <main className="inner w-350 mx-auto mt-40 mb-160 text-bases">
      <h1 className="text-4xl font-bold text-left mb-8">ログイン</h1>
      <form onSubmit={onLogin}>
        <div className="mb-8">
          <div>
            <label className="w-full text-base mb-3 font-bold" htmlFor="email">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-form"
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
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-form"
              id="password"
              placeholder="パスワード"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label
              className="w-full text-base mb-3 font-bold"
              htmlFor="passwordConf"
            >
              パスワード(確認)
            </label>
            <input
              type="password"
              name="passwordConf"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-form"
              id="passwordConf"
              placeholder="パスワード(確認)"
              required
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </div>
          <button
            className="border-bases border-3 w-full font-bold text-base py-3 px-4 rounded-42 flex justify-end items-center"
            type="submit"
          >
            ログインする
            <img src="./images/Arrow.svg" alt="矢印" className="pl-[79px]" />
          </button>
        </div>
        <hr className="my-8" />
        <div className="signup">
          <h1 className="text-4xl font-bold text-left mb-4">新規登録</h1>
          <p className="text-sm text-bases mb-8">
            会員登録で「旅ビンゴ」を利用できます。
            <br />
            旅の記録や思い出をビンゴにして豪華景品をGET！！
          </p>
          <Link
            href="/signup"
            className="bg-accent block text-center w-full font-bold text-base py-3 px-4 rounded-42"
          >
            新規会員登録をする
          </Link>
        </div>
      </form>
    </main>
  );
}
