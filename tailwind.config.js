/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display: "'Montserrat', sans-serif"
      },
    colors:{
      primary: '#005d5f',
      secondary: '#dfe33d',
      font:'#21252f'
    }
      },
    },
    
    
  
  plugins: [require("daisyui")],
}