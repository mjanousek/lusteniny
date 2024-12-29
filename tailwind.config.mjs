/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand Variable', ...defaultTheme.fontFamily.sans],
      },
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
  plugins: [require('@headlessui/tailwindcss')],
};
