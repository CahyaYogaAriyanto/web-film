/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color_bg: 'bg-gradient-to-r from-red-500 via-red-500 to-orange-400',
      }
    },
  },
  plugins: [],
}

