/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef4ff',
          100: '#dae7ff',
          200: '#bcd3ff',
          300: '#8fb6ff',
          400: '#5c8eff',
          500: '#3b6bfc',
          600: '#2554f0',
          700: '#1b40dd',
          800: '#1d35b4',
          900: '#1e318e',
        },
      },
    },
  },
  plugins: [],
}