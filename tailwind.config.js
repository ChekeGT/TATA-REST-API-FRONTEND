/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryDarkGrey': '#20212c',
        'darkGrey': '#2b2c37',
        'mainPurple': '#635fc7',
        'mediumGrey': '#828fa3'
      }
    },
  },
  plugins: [],
}

