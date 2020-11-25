/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend:{
      fontFamily : {
        'poppins' : ['Poppins']
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      colors:{
        'lead-yellow': '#f5c305f7',
        'grayish-white-1': '#eeeff1',
        'grayish-white-2': '#f5f7f9'
      },
    }
  },
  variants: {},
  plugins: [
  ]
}
