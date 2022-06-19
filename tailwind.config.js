const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    // colors: {
    //   ...defaultTheme.colors,
    //   green: colors.emerald,
    // },
    fontFamily: {
      sans: [
        'Quicksand',
        'sans-serif',
        ' system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
      ],
    },
    extend: {
      colors: {
        green: colors.emerald,
        blue: {
          50: '#f2f7fb',
          100: '#e6eef7',
          200: '#bfd5ec',
          300: '#99bbe0',
          400: '#4d89c9',
          500: '#0056b2',
          600: '#004da0',
          700: '#004186',
          800: '#00346b',
          900: '#002a57',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
