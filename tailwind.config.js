/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#E5E5E5',
        'secondary': '#672280',
        'linear-purple': '#A626D3'
      },
      maxWidth: {
        550:'34.375rem',
      }
    },
  },
  plugins: [],
}

