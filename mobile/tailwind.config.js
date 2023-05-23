/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
      colors: {
        gray: {
          50: '#EAEAEA',
          100: '#BEBEBF',
          200: '#9E9EA0',
          300: '#727275',
          400: '#56565A',
          500: '#2C2C31',
          600: '#28282D',
          700: '#1F1F23',
          800: '#18181B',
          900: '#121215',
        },
        purple: {
          50: '#F3EEFC',
          100: '#D8CBF7',
          200: '#C6B2F3',
          300: '#AB8EEE',
          400: '#9B79EA',
          500: '#8257E5',
          600: '#764FD0',
          700: '#5C3EAE',
          800: '#48307E',
          900: '#372560',
        },
        green: {
          50: '#E6FBEF',
          100: '#B1F1CE',
          200: '#8CEBB6',
          300: '#573295',
          400: '#36DC81',
          500: '#04D361',
          600: '#04C058',
          700: '#039645',
          800: '#027435',
          900: '#015A26',
        },
      },
    },
  },
  plugins: [],
}
