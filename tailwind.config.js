/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    boxShadow: {
      outline: '0 0 0 1px rgba(66, 153, 225, 0.5)',
    },
    extend: {
      colors: {
        'orange-button': '#FF872E',
        'purple-hover': '#4C52F8',
        'purple-hover-stroke': '#8286FF',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
}
