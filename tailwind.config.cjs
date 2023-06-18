/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  plugins : [],
  safelist: ['animate-rise'],
  theme   : {
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s cubic-bezier(0.255, 0.980, 0.160, 0.990)',
        rise  : 'rise 5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity  : 0,
            transform: 'translateY(-20vh)'
          },
          '100%': {
            opacity  : 1,
            transform: 'translateY(0)'
          }
        },
        rise: {
          '0%'  : { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' }
        }
      }
    }
  }
}
