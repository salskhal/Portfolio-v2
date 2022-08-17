/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: 'hsla(0,0%,100%,.64)',
        js: '#f0db4f',
        vue: '#41b883',
        tail: '#38bdf8',
        name: '#222',
        description: 'rgba(0,0,0,.64)',
      },
      lineHeight: {
        '5rem': '5rem',
        '3rem': "3rem"
      }
    },
  },
  plugins: [],
}