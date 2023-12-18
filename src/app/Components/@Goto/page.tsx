'use client';
import Image from 'next/image';
import hukidashi from '../../../../public/images/hukidashi.png';
import { useEffect } from 'react';

export default function Goto() {
  useEffect(() => {
    async function getApi() {
      const api = await fetch(
        'https://script.googleusercontent.com/macros/echo?user_content_key=4u7fea1Ru5BCGQmKNsdsBhBLBCWFEeXe8BHwq-vDMuKDeKAIPOOLk3j2yL9tyIzRLoL3EzF6LCnnCUabv73ppniC9_WLAg6Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOUnoHBK76pQbVQ0W2w7OUz05SlTAV5l_5Um1UydTiYLUbAJETptJlVjOd8g34fn0RxEfeq6XdefrmQyq74BWNTBm6NVG-vzJdz9Jw9Md8uu&lib=M2eqGbMQAKVztvyc-snnqWAlM_8jcpcwC'
      );
      return api.json();
    }

    getApi()
      .then((response) => {
        console.log(response.imgs);
      })
      .catch(() => {
        console.log('err');
      });
  }, []);
  return (
    <div className="mt-8">
      <Image
        src={hukidashi}
        alt={`ちょっと`}
        className="ml-16"
      />
      <h3 className="text-2xl px-5 font-bold mb-4">
        その役割、はずしてみませんか
      </h3>
      <div className="w-370 bg-bases mx-[10px] px-[15px] py-4 rounded-21">
        {/* <Image src={} alt={} className="mb-2 rounded-20" />
        <Image src={} alt={} className="mb-2 rounded-20" />
        <Image src={} alt={} className="rounded-20" /> */}
      </div>
    </div>
  );
}
