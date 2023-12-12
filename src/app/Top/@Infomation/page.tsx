<<<<<<< HEAD
'use client';
import { useEffect, useState } from 'react';

// supabaseをインポート
import { supabase } from '../../../../utils/supabase';

const Header = () => {
  const [currentUser, setcurrentUser] = useState('');

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data); // デバッグ：セッションデータをログに出力

    if (data && data.session !== null) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user); // デバッグ：ユーザーデータをログに出力

      if (user) {
        setcurrentUser(user.email || '');
      }
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      {currentUser ? (
        // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
        <div suppressHydrationWarning={true}>
          <div style={{ paddingBottom: '1rem' }}>
            {currentUser} でログインしています。
          </div>
        </div>
      ) : (
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  );
};

export default Header;
=======
'use client';
import { useEffect, useState } from 'react';

// supabaseをインポート
import { supabase } from '../../../../utils/supabase';

const Header = () => {
  const [currentUser, setcurrentUser] = useState('');

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data); // デバッグ：セッションデータをログに出力

    if (data && data.session !== null) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user); // デバッグ：ユーザーデータをログに出力

      if (user) {
        setcurrentUser(user.email || '');
      }
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      {currentUser ? (
        // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
        <div suppressHydrationWarning={true}>
          <div style={{ paddingBottom: '1rem' }}>
            {currentUser} でログインしています。
          </div>
        </div>
      ) : (
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  );
};

export default Header;
>>>>>>> f20f0147035e3e46754a24a7f49a9d3405b4e780
