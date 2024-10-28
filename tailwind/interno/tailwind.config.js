/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      padding:{
        DEFAULT: '15px,'
      },
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily:{
      primary: 'DM Serif Text',
      secondary: 'Fira Code'
    },
    backgroundImage:{
      hero: 'url(/public/assets/hero/bg.jpg)',
      grid: 'url(/public/assets/grid.png)',
    },
    extend: {
      colors:{
        primary:{
          DEFAULT: '#292F36',
          hover:'#343e4a'
        },
        secondary: '#4d5053',
        accent:{
          DEFAULT: '#cda274',
          secondary:'#f4f0ec',
          hover:'#b88c5d',
        }
      }
    },
  },
  plugins: [],
}

