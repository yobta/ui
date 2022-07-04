/* eslint-disable node/no-unpublished-require */
const preset = require('./src/tailwind-preset/index.cjs')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx', './src/**/*.mdx'],
  plugins: [],
  presets: [preset],
  theme: {
    extend: {}
  }
}
