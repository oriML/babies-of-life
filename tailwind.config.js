/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': {
          50: '#fff5f7',
          100: '#ffeef2',
          200: '#ffdce6',
          300: '#ffc1d3',
          400: '#ff96b5',
          500: '#f96894',
          600: '#e83d76',
          700: '#c7245a',
          800: '#a5214e',
          900: '#8b2045',
        }
      },
      borderRadius: {
        'soft': '1.5rem',
      }
    },
  },
  plugins: [],
}
