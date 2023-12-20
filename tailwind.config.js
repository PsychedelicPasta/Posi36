// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1440px",
    },
    extend: {
      colors: {
        primary: '#000000', // black
        secondary: '#f5f5f5', // white
        tertiary: '#4e5850', // green
      },
      fontSize: {
        '2xs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      spacing: {
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '55': '55px',
        '60': '60px',
        '65': '65px',
        '70': '70px',
        '75': '75px',
        '80': '80px',
        '85': '85px',
        '90': '90px',
        '95': '95px',
        '100': '100px',

      },
    },
  },
  plugins: [],
}
