/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  plugins: [],
  theme  : {
    extend: {
      keyframes: {
        rise: {
          '0%'  : { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' }
        }
      }
    }
  }
}
