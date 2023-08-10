/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#FBD2D3',
          200: '#F8A4A7',
          300: '#F4777C',
          400: '#F12950',
          500: '#ED1C24',
          600: '#C41016',
          700: '#930C11',
          800: '#62080B',
          900: '#310406',
        },
      },
    },
  },
  plugins: [],
};
