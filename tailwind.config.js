/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    'app/*/**/*.{jsx, js}',
    'app/root.{jsx, js}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        'inter': '"Inter", sans-serif'
      },
      animation: {
        wiggle: 'wiggle 3.5s ease-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '15%': { transform: 'translateY(-40px)', opacity: 1 },
          '85%': { transform: 'translateY(-40px)', opacity: 1 },
          '100%': { transform: 'translateY(-40px)', opacity: 0 },
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
