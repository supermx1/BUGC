/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}'],
  theme: {
    fontFamily: {
      // sans: ['Golos Text', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
