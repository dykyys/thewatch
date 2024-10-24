/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tiffany: '#0ABAB5',
        pearlWhite: '#F4F4F9',
        lightSilver: '#D9D9D9',
        softCoral: '#FF6F61',
        charcoalGray: '#4A4A4A',
        pastelMint: '#A8E6CF',
        yellow: '#ffe819',
        'gray-dark': '#8D8D8D',
        'gray-med': '#D9D9D9',
        'gray-light': '#F3F3F3',
      },
    },
  },
  plugins: [],
};
