'use client';
import { useState } from 'react';
import { supabase } from '../../../utils/supabase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (signUpError) {
        throw signUpError;
      }
      alert('登録完了メールを確認してください。');
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <>
      <main className="inner w-350 mx-auto mt-100 text-bases">
        <h1 className="text-4xl font-bold text-left mb-8">新規登録</h1>
        <form className="w-full" onSubmit={onSubmit}>
          <div>
            <label className="w-full text-base mb-3 font-bold" htmlFor="text">
              ニックネーム
            </label>
            <input
              type="text"
              name="text"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="text"
              placeholder="ニックネーム"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
              placeholder="パスワード(5文字以上)"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label
              className="w-full text-base mb-3 font-bold"
              htmlFor="passwordConf"
            >
              パスワード(再入力)
            </label>
            <input
              type="password"
              name="passwordConf"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="passwordConf"
              placeholder="パスワード(再入力)"
              required
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-accent w-full font-bold text-base py-3 px-4 rounded-42"
              type="submit"
            >
              新規登録する
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
