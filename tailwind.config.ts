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
    extend: {
      colors: {
        main: '#009B9F',
        accent: '#E07510',
        bases: '#EEF2E8',
        form: '#2222224D',
      },
      spacing: {
        40: '40px',
        42: '42px',
        160: '160px',
        350: '350px',
      },
    },
  },
  plugins: [],
};
export default config;
