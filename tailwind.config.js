const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
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
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
