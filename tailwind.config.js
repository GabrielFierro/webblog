/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'merriweather-light': ['Merrieweather Light', 'sans-serif'],
      'merriweather-regular': ['Merrieweather Regular', 'sans-serif'],
      'merriweather-bold': ['Merrieweather Bold', 'sans-serif']
    },
    colors: {
      black: '#1A1A1A',
      dark: '#131316',
      darkGrey: '#262626',
      frenchGrey: '#ABA8B2',
      htmlAccentColor: '#F48454', // Accent color
      cssAccentColor: '#1E3EB6', // Accent color
      jsAccentColor: '#F7DF1E', // Accent color
      reactAccentColor: '#61DAFB', // Accent color
      greyLight: '#595959',
      greyRegular: '#3B3B3B',
      silver: '#D8D8D8',
      title: '#E1E1E1',
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
