/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-primary': {
          200: '00B5AB',
          300: '#00B5B1',
          400: '#00B3B5',
          500: '#00ADB5',
          600: '#00A7B5',
          700: '#00A1B5',
        },
        'sp-secondary': {
          300: '#de7c78',
          500: '#e0615c',
        },
        'sp-tertiary': {
          500: '#FF3E36',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
