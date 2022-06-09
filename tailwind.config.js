/** @type {import ('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'roboto-mono-light': ['Roboto Mono Light', 'monospace'],
        'roboto-mono-bold': ['Roboto Mono Bold', 'monospace'],
        'roboto-medium': ['Roboto Medium', 'sans-serif'],
        'roboto-black': ['Roboto Black', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '15px -15px 50px 3px rgba(0, 0, 0, 0.3)',
      },
      colors:{
        'paleta':{
          100:'#474F59',
          200:'#FFDBCA',
          300:'#F2D0A7',
          400:'#BF895A',
          500:'#8C2C16'
        }
      },
    },
  },
  plugins: [],
}