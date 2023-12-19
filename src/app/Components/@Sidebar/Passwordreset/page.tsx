'use client';
import { supabase } from '../../../../../utils/supabase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PasswordReset() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { error: passwordResetError } = await supabase.auth.updateUser({
        password,
      });
      if (passwordResetError) {
        throw passwordResetError;
      }
      await router.push('/top');
      alert('パスワード変更が完了しました');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <>
      <main className="w-350 mx-auto mt-100 mb-160 text-bases">
        <h1 className="text-4xl font-bold text-left mb-8">リセットフォーム</h1>
          <form onSubmit={onSubmit}>
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
                パスワード(確認)
              </label>
              <input
                type="password"
                name="passwordConf"
                className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
                id="passwordConf"
                placeholder="パスワード(確認)"
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
                パスワード変更
              </button>
            </div>
          </form>
      </main>
    </>
  );
}
