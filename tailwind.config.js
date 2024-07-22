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
      },
      borderWidth:{
        1: '1px',
      
      },
      dropShadow:{
        custom:
         [ '2px 2px 0 #000',
        '-2px -2px 0 #000',
        '2px -2px 0 #000',
        '-2px 2px 0 #000',
        '0 2px 0 #000',
        '2px 0 0 #000',
        '0 -2px 0 #000',
        '-2px 0 0 #000',
        '2px 2px 5px #000']

      }
    },
  },
  plugins: [],
}

