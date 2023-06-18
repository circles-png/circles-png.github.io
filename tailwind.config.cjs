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
      animation: { rise: 'rise 5s ease-in-out infinite' },
      keyframes: {
        rise: {
          '0%'  : { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' }
        }
      }
    }
  }
}
