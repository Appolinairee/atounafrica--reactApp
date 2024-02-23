/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#ffffff",
        primary: "#00ACA4",
        primaryDark: "#58E6D9",
        secondary: "#fdd88e",
      },
      screens: {
        'xs': {max: '400px'},
        'sm': {max: '640px'},  
        'md': {max: '768px'},
        'lg': {max: '1024px'},
        'xl': {max: '1280px'},
      },
      boxShadow: {
        boxShadow1: '0 0 28px 0 rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}