/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    fontFamily: {
      primary: 'Playfair-Display',
      secondary: 'Mulish'
    },
    screens: {
      sm: '280px',
      lg: '720px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',

        accent: 'EEF7F9'
      },
    },
  },
  plugins: [],
}

//lg: '720px'