/** @type {import('tailwindcss').Config} */

export default {
  content:  ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        gray: {
          100: '#A9A9A9'
        },
        black: {
          100: '#010510',
          200: '#000000'
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #5356E0, #6868AE)',
        'black-gradient': 'linear-gradient(to bottom, #01051000 0%, #010510 100% )',
        'black-gradient-2': 'linear-gradient(to bottom, #010510 0%, #010510 100% )',
        'purple-overlay': 'url("/images/purple-overlay.svg")',
        'light-right': 'linear-gradient(45deg, #0303033B 43%, #31324282 100% )',
        'light-left': 'linear-gradient(to right, #313242 50%, #030303)',
        'gradient-card': 'linear-gradient(to right, #0303033B, #31324282 )',
        'gradient-card-two': 'linear-gradient(to right,  #31324282, #0303033B )',
        'spiral-img': 'url("/images/spiral-2.svg")',
        'elipse-img': 'url("/images/elipse.svg")',
        'a-spline-img': 'url("/images/a-spine.svg")',
        'backdrop': 'url("/images/first.svg")',
        'second': 'url("/images/Second bg.png")',
        'third': 'url("/images/Third bg.svg")',

        'dark-bg': 'url("/images/dark-bg.svg")',
      }
    },
  },
  plugins: [],
}

