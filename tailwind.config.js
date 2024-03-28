/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   // other core plugins
  //   '@layer': ['utilities'],
  // },
  plugins: [require("tailwind-scrollbar")],
}