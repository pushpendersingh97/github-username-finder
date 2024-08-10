/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-primary': '#141c2f',
        'custom-secondary': '#1f2a48',
        'custom-tertiary': '#0079fe',
      }
    },
  },
  plugins: [],
}