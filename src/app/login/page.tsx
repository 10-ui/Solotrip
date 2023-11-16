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
    <div className="h-[100dvh] w-[100dvw] grid items-center justify-center">
      <main className="inner">
        <div>
          <form onSubmit={onLogin}>
            <div>
              <label>メールアドレス</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード（確認）</label>
              <input
                type="password"
                required
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">ログイン</button>
              <br />
              <Link href="/signup">
                ユーザー登録がお済みでない方はこちらから
              </Link>
              <br />
              <Link href="/sendemail">パスワードをお忘れの方はこちらから</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
