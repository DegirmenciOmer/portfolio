/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        flags: "url('/images/flags.png')",
      },
    },
  },
  plugins: [],
}
