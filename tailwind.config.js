/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          400: '#9b5de5',
          300: '#c77dff'
        },
        green: {
          400: '#00f5d4'
        },
        gray: {
          950: '#0a0a0a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
