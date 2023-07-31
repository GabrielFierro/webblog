/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      black: '#1A1A1A',
      dark: '#131316',
      darkGrey: '#262626',
      frenchGrey: '#ABA8B2',
      htmlAccentColor: '#F48454', // Accent color
      cssAccentColor: '#1E3EB6', // Accent color
      jsAccentColor: '#F7DF1E', // Accent color
      reactAccentColor: '#61DAFB', // Accent color
      silver: '#CCCCCC',
      white: '#FFFFFF'
    },
    extend: {
      keyframes: {
        color: {
          '0%': { color: '#F48454' },
          '35%': { color: '#1E3EB6' },
          '70%': { color: '#F7DF1E' },
          '100%': { color: '#61DAFB' }
        }
      },
      animation: {
        'changing-color': 'color 10s linear infinite'
      }
    }
  },
  plugins: []
};
