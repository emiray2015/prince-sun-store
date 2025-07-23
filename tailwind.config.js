/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pastel-peach': '#FFF1E6',
        'pastel-mint': '#DFFFE0',
        'pastel-blue': '#DDEEFF',
        'pastel-lavender': '#E9DFFB',
        'pastel-pink': '#FFDDEE',
        'pastel-rose': '#FFE9E9',
      }
    },
  },
  plugins: [],
}
