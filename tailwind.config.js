module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth : {
        1600: '1600px'
      },
      width : {
        w523: '510px'
      },
      fontFamily: {
        railway : ['Railway'],
        railwayBold : ['RalewayBold']
      },
      colors: {
        'nteal': '#1de9b6'
      },
    },
  },
  variants: {},
  plugins: [],
}