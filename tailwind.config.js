/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink2: {
          light: '#FFD6D2',
          DEFAULT: '#FFAFA3',
          dark: '#FF7F75',
        },
        lightGray: {
          light: '#FFFFFF',
          DEFAULT: '#E6E6E6',
          dark: '#B3B3B3',
        },
        pink1: {
          light: '#FFEFEF',
          DEFAULT: '#FFD6D2',
          dark: '#FFADAC',
        },
      },
    },
  },
  plugins: [],
}

