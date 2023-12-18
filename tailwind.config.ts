import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      2: '2px',
      10: '10px',
      20: '20px',
      21: '21px',
      42: '42px',
    },
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      animation: {
        bounces: 'bounces 1s infinite alternate',
        slide: 'slide 1s infinite alternate',
      },
      keyframes: {
        bounces: {
          '0%, 100%': {
            transform: 'translate(-50% , -10%)',
          },
          '50%': { transform: 'translate(-50% , 0%)' },
        },
        slide: {
          '0%': {
            transform: 'translateX(-15%)',
          },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(15%)' },
        },
      },
      dropShadow: {
        ttl: '3px 5px 2px rgba(255, 255, 255, 0.25)',
      },
      colors: {
        main: '#009B9F',
        accent: '#E07510',
        bases: '#EEF2E8',
        form: '#2222224D',
        darks: '#393939',
        zabuton: '#00000066',
      },
      spacing: {
        line: '2px',
        25: '25px',
        40: '40px',
        42: '42px',
        48: '48px',
        60: '60px',
        70: '70px',
        100: '100px',
        120: '120px',
        62: '62px',
        76: '76px',
        160: '160px',
        200: '200px',
        350: '350px',
        370: '370px',
        sleft: '30vw',
        sright: '70vw',
        vw: '100vw',
        vh: '100vh',
      },
    },
  },
  plugins: [],
};
export default config;
