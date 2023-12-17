import Image from 'next/image';
import logo from '../../../../public/images/logo.svg';

export default function Footer() {
  return (
    <>
      <footer className="bg-bases mt-160">
        <div className="px-5 py-10">
          <Image src={logo} alt="ソロトリロゴ"></Image>
          <ul className='mt-4'>
            <li className="font-bold">概要</li>
            <li>トップページ</li>
            <li>旅マインドのつくり方</li>
            <li className="mb-4">ハンドブック依頼フォーム</li>
            <li className="font-bold">特別コンテンツ</li>
            <li>旅ビンゴ</li>
            <li>ログイン</li>
            <li className="mb-4">新規登録</li>
            <li className="font-bold">企業情報 </li>
            <li>運営会社</li>
            <li>利用規約</li>
            <li>プライバシーポリシー</li>
          </ul>
        </div>
        <p className="py-4 text-sm text-bases bg-main text-center w-vw">
          Copyright &copy; ソロトリ All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
