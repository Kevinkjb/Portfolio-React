/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color' : '#1A5D1A',
        'btn-bg-color' : '#021709',
        'custom-color-two' : '#14e956',
        'custom-color-three' : '#10ba46',
        'twitter': '#1da1f2',
        'linkedin': '#0077b5',
        'github': '#333'

      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '88': '21rem',
        '96': '23rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '216': '54rem',
        '224': '56rem',
        'custom': '60rem',
        'customTwo': '100%',
        'customThree': '100rem'

      },
      screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '476px'},
      // => @media (max-width: 476px) { ... }
      'xxs': {'max': '370px'},
      // => @media (max-width: 370px) { ... }
    }
    
    }
  },
  plugins: [],
}