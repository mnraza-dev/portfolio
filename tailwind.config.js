/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0e0e10',
          300: '#1c1c21',
          500: '#3a3a49',
          600: '#1a1a1a',
        },
        white: {
          DEFAULT: '#ffff',
          800: '#e4e4e6',
          700: '#d6d9e9',
          600: '#afb0b6',
          500: '#62646c',
        },
        violet: {
          50: '#f0e6ff',
          100: '#e4d5fe',
          200: '#ceb5fe',
          300: '#b794fc',
          400: '#a073f2',
          500: '#885bf2',
          600: '#7a4bc2',
          700: '#6b3c92',
          800: '#5c2c62',
          900: '#401c34',
        },
        emerald: {
          50: '#f0fdf7',
          100: '#e0f2e9',
          200: '#bcdac6',
          300: '#9dc9a1',
          400: '#8ab88d',
          500: '#77a77c',
          600: '#669667',
          700: '#568457',
          800: '#467247',
          900: '#376137',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
        'hero-radial':
          'radial ellipse at center, rgba(16,185,129,0.12) 0%, transparent 65%',
      },
    },
  },
  plugins: [],
};