/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './client/**/*.{html,js,jsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

