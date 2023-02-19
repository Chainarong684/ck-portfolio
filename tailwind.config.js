/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)']
      },
      colors: {
        'primary-light': '#235186',
        'secondary-light': '#f1f1f1',
        'primary-dark': '#536162',
        'secondary-dark': '#f3f4ed'
      }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '8px',
          paddingRight: '8px',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1140px'
          },
          '@screen xxl': {
            maxWidth: '1320px'
          }
        }
      })
    }
  ]
}
