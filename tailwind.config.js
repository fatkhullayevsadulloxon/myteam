/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        maxWidth: '1184px',
      },
      fontFamily: {
        livvic: ['Livvic', 'sans-serif'],
      },
      colors: {
        green: {
          DEFAULT: '#014E56',
          100: '#004047',
          200: '#012F34',
          300: '#002529',
          400: '#2C6269',
          500: '#79C8C7',
        },
        red: '#F67E7E',
      },
      fontSize:{
      "6.5xl": '64px'
      },
    },
  },
  plugins: [],
}

