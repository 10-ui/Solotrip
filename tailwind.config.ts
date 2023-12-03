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
      colors: {
        main: '#009B9F',
        accent: '#E07510',
        bases: '#EEF2E8',
        form: '#2222224D',
        darks: '#222222',
      },
      spacing: {
        line: '2px',
        25: '25px',
        40: '40px',
        42: '42px',
        60: '60px',
        100: '100px',
        76: '76px',
        160: '160px',
        350: '350px',
        vw: '100vw',
        vh: '100vh',
      },
    },
  },
  plugins: [],
};
export default config;
