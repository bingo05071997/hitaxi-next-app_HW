import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        sx: '0.48rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FEBB1B',
        dark1: '#181A20',
        dark2: '#1F222A',
        dark3: '#35383F',
        dark4: '#4A4E5A',
        dark5: '#6B6E7A',
        dark6: '#9CA3AF',
        dark7: '#C4C6CC',
        dark8: '#E2E4E9',
        light1: '#F5F7FA',
        light2: '#F9FAFB',
        light3: '#FDFDFD',
        light4: '#F5F7FA',
        light5: '#F9FAFB',
        light6: '#FDFDFD',
        light7: '#F5F7FA',
        light8: '#F9FAFB',
      },
      boxShadow: {
        custom: '4px 8px 24px 0px rgba(254, 187, 27, 0.25)',
      },
    },
  },
  darkMode: "selector",
};
export default config;
