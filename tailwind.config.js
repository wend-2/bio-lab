/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./parts/*.html"],
  theme: {
    extend: {
      colors:{
        'dark-purple' : '#161B40',
        'light-blue' : '#c4e4ec',
        'soft-red' : '#F40058',
        'soft-orange' : '#EFA500',
        'soft-green' : '#41B853'
      },
      fontFamily: {
        glacial: ['"Glacial Indifference"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

