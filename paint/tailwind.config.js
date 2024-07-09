/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 897px)' },
        'vshort': { 'raw': '(max-height: 668px)' },
      },
    },
  },
  plugins: [],
}