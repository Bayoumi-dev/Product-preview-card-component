/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
   content: ['./src/**/*.html'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
            serif: ['Fraunces', 'serif', ...defaultTheme.fontFamily.serif],
         },
      },
      colors: {
         green: {
            DEFAULT: 'hsl(158, 36%, 37%)',
            dark: 'hsl(157, 43%, 18%)',
         },
         cream: 'hsl(30, 38%, 92%)',
         blue: {
            dark: 'hsl(212, 21%, 14%)',
            grayish: 'hsl(228, 12%, 48%)',
         },
         white: 'hsl(0, 0%, 100%)',
      },
   },
   plugins: [],
}
