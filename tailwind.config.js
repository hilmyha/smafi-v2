/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF7FF',
        primary: '#0069CB',
        secondary: '#A2D2FF',
        tertiary: '#85C4FF',
        quaternary: '#D1E9FF',
      },
    },
  },
  plugins: [],
};
