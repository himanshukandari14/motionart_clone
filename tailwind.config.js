/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        customOrange: '#F87516',
        customBlue: '#5E11FF',
         darkStart: '#0D061F',
        darkEnd: '#251E35',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}