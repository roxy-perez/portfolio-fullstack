const { color } = require('framer-motion');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#040403",
        light: "#f5f5f5",
        primary: "#E0BC58",
        primaryDark: "#222f5d",
      }
    },
  },
  plugins: [],
}