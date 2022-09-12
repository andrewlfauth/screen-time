/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, js}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': '"Inter", sans-serif'
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
