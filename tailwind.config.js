/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Override cyan with a slightly lighter palette
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#4fd1e0',
          500: '#22cbd6',
          600: '#06b6d4',
          700: '#0891b2',
          800: '#075985',
          900: '#064e63',
        },
        // keep other palette entries available
        gray: colors.gray,
      },
    },
  },
  plugins: [],
}