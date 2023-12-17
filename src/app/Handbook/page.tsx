'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
export default function HandBook() {
  const router = useRouter();
  const doRedirect = () => {
    router.push('/Handbook');
  };

  return (
    <>
      <main className="w-350 mx-auto mt-100 mb-160 text-bases">
        <h1 className="text-4xl font-bold text-left mb-2">旅のハンドブック</h1>
        <p className="text-base font-bold">依頼フォーム</p>
        <hr className="my-8" />
        <p className="text-sm">
          旅先のお困りごとを解決できちゃう！？
          <br />
          ひとり旅の先輩方が作成した
          <br />
          旅のハンドブックをお配りしております。
          <br />
          費用はかかりませんのでお気軽にお申し込みください。
        </p>
        <hr className="my-8" />
        <form
          action="https://script.google.com/macros/s/AKfycbzq1HG2GmcVs90gPR5SSuR0j7QGBSGJB9tDxK0U5ZvhBtSftT6vY1oADbVSu60Zq14e/exec"
          method="post"
          onSubmit={doRedirect}
        >
          <div className="mb-8">
            <label className="w-full text-base mb-3 font-bold" htmlFor="sei">
              氏名
            </label>
            <input
              type="text"
              name="sei"
              className="w-full rounded-2 py-3 px-4 mb-4 text-base text-darks"
              id="sei"
              placeholder="性"
            />
            <input
              type="text"
              name="mei"
              className="w-full rounded-2 py-3 px-4 text-base text-darks"
              id="mei"
              placeholder="名"
            />
          </div>
          <div className="mb-8">
            <label className="w-full text-base mb-3 font-bold" htmlFor="email">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-2 py-3 px-4 text-base text-darks"
              id="email"
              placeholder="contact@solotori.jp"
            />
          </div>
          <div>
            <label
              className="w-full text-base mb-3 font-bold"
              htmlFor="postcode"
            >
              ご住所
            </label>
            <div className="mb-3">
              <input
                type="text"
                name="postcode"
                className="float-left w-120 rounded-2 py-3 px-4 text-base text-darks"
                id="postcode"
                placeholder="000-000"
              />
              <button
                className="border-bases h-48 box-border border-1 w-200 text-base ml-3 py-3 px-4 rounded-42"
                type="button"
              >
                郵便番号から自動入力
              </button>
            </div>
            <input
              type="text"
              name="pref"
              className="w-full rounded-2 py-3 px-4 mb-3 text-base text-darks"
              id="pref"
              placeholder="都道府県"
            />
            <input
              type="text"
              name="city"
              className="w-full rounded-2 py-3 px-4 mb-3 text-base text-darks"
              id="city"
              placeholder="市区町村"
            />
            <input
              type="text"
              name="town"
              className="w-full rounded-2 py-3 px-4 mb-3 text-base text-darks"
              id="town"
              placeholder="町名・番地"
            />
            <input
              type="text"
              name="num"
              className="w-full rounded-2 py-3 px-4 mb-3 text-base text-darks"
              id="num"
              placeholder="建物名・部屋番号(戸建て)"
            />
          </div>
          <hr className="my-8" />
          <div className="flex justify-center items-center">
            <input
              className="bg-transparent"
              type="checkbox"
              name="conf"
              id="conf"
            />
            <p>
              <Link href="/Policy" className="ml-3 inline underline">
                プライバシーポリシー
              </Link>
              に同意します。
            </p>
          </div>
          <button
            type="submit"
            className="bg-accent text-center w-full font-bold text-base py-4 px-4 mt-8 rounded-42"
          >
            申し込みを確定する
          </button>
        </form>
      </main>
    </>
  );
}
