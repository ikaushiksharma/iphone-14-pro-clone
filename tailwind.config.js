module.exports = {
  darkMode: 'class',
  content: ['dist/index.html'],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        main: ['poppins', 'cursive'],
      },
      colors: {
        mainColor: '',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
