/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./core/templates/*.html',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    extend: {},
  },
}

