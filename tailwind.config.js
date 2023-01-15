module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './navigation/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        red1: '#FF9797',
        red2: '#FF4E4E',
        red3: '#FF0000',
      },
      fontFamily: {
        kanitLight: ['Kanit-Light'],
        kanitRegular: ['Kanit-Regular'],
        kanitMedium: ['Kanit-Medium'],
        kanitBold: ['Kanit-Bold'],
      },
    },
  },
  plugins: [],
};
