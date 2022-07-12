const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addSelector, prefix }) => {
  addSelector({
    backgroundColor: 'currentColor',
    '.yobta-selector': {
      ...applyPrefixed(prefix, '.selector')
    }
  })
})
