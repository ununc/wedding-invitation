/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '391px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      colors: {
        blue: {
          950: '#17275c',
        },
        amber: {
          950: '#451a03',
        },
      },
    },
  },
  plugins: [],
};
