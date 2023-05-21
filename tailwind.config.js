/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
     require('flowbite/plugin')
  ],
  darkMode: 'class',
};
