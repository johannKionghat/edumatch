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
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#69bd48',
        secondary: '#1878c1',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        carousel: 'carousel 30s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-66.666667%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
