'use client';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Instagram() {
  // const [url, setUrl] = useState('');
  // useEffect(() => {
  //   async function getApi() {
  //     const api = await fetch(
  //       'https://script.googleusercontent.com/macros/echo?user_content_key=neTMqQWoo6oflj1N-V4W9oqazd_1tK2G2A7wOW0I3PQf0xmIEoNhFup_WR3RgmRFnl8WTcTiOfkeBwm9mid82ATL_hlfd4mkm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKT03D2pp_sLWMJb01LqkMrZbPCWonX15oU10F162WR2wBvNSQgG4oB_bzNXCZReNjvRGogKHdA6eOU1IadmAodrM9Fy_t4zYNz9Jw9Md8uu&lib=MY3mJTG3zxO16BsUNdD1_VglM_8jcpcwC'
  //     );
  //     return api.json();
  //   }

  //   getApi()
  //     .then((response) => {
  //       console.log(response.details);
  //       setUrl(response.details.urls.postUrl[1]);
  //     })
  //     .catch(() => {
  //       console.log('err');
  //     });
  // }, []);

  return (
    <div>
      <h3 className="text-center text-2xl font-bold">
        自分にあるもの、ないもの
      </h3>
      <p className="text-base text-center mb-4">
        気ままな旅をしながら探してみませんか？
      </p>
      <div className="flex justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/Cqp0VUjNwb7"
          width={354}
        />
        {/* <InstagramEmbed url={url} width={354} /> */}
      </div>
    </div>
  );
}
