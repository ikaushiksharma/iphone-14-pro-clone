module.exports = {
  darkMode: 'class',
  content: ['dist/index.html'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: [''],
      },
      colors: {
        mainColor: '',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
