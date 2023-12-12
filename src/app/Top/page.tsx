<<<<<<< HEAD
'use client';
import { supabase } from '../../../utils/supabase';
import { useRouter } from 'next/navigation';
import Mail from './@Infomation/page';
export default function Top() {
  const router = useRouter();

  const Logout = async (e: any) => {
    e.preventDefault();
    try {
      const { error: logoutError } = await supabase.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      await router.push('/');
    } catch {
      alert('エラーが発生しました');
    }
  };
  return (
    <>
      <div className="h-[100dvh] w-[100dvw] grid items-center justify-center">
        <main className="inner">
          <div>
            <h1>トップページ</h1>
            <Mail />
            <form onSubmit={Logout}>
              <button type="submit">ログアウトする</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
=======
'use client';
import { supabase } from '../../../utils/supabase';
import { useRouter } from 'next/navigation';
import Mail from './@Infomation/page';
export default function Top() {
  const router = useRouter();

  const Logout = async (e: any) => {
    e.preventDefault();
    try {
      const { error: logoutError } = await supabase.auth.signOut();
      if (logoutError) {
        throw logoutError;
      }
      await router.push('/');
    } catch {
      alert('エラーが発生しました');
    }
  };
  return (
    <>
      <div className="h-[100dvh] w-[100dvw] grid items-center justify-center">
        <main className="inner">
          <div>
            <h1>トップページ</h1>
            <Mail />
            <form onSubmit={Logout}>
              <button type="submit">ログアウトする</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
>>>>>>> f20f0147035e3e46754a24a7f49a9d3405b4e780
