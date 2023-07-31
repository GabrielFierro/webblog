/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      black: '#1A1A1A',
      dark: '#131316',
      darkGrey: '#262626',
      frenchGrey: '#ABA8B2',
      htmlAccentColor: '#E44D26', // Accent color
      cssAccentColor: '#264DE4', // Accent color
      jsAccentColor: '#F7DF1E', // Accent color
      reactAccentColor: '#61DAFB', // Accent color
      silver: '#CCCCCC',
      white: '#FFFFFF'
    },
    extend: {
      keyframes: {
        color: {
          '0%': { color: '#E44D26' },
          '35%': { color: '#264DE4' },
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
