/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          DEFAULT: '#f8fafc',
          light: '#e2e8f0',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#171717',
          lighter: '#262626',
          card: '#1a1a1a'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};