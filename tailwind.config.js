/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        yellow1: '#FF9900',
        yellow2: '#FBB040',
        orange1: '#F85A47',
        violet1: '#9672FF',
        skyblue1: '#4DDFFD',
        pink1: '#F2B8EC',
        bgcolor: '#F1FFFF',
        gray1:'#FBFCFC',
      },
      lineHeight:{
        leading1:'80px',
        leading2:'40px',
      }
    },
  },
  plugins: [],
}
