/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, js}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': '"Poppins", sans-serif'
      },
      animation: {
        'spin-once': 'spin 1s ease-in-out reverse',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
