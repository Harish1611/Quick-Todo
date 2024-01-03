/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif' ],
        manjari:['Manjari','sans-serif']
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
}