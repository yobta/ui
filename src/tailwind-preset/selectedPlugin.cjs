const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addSelected, prefix }) => {
  addSelected({
    backgroundColor: 'currentColor',
    '.yobta-selected': {
      ...applyPrefixed(prefix, '.selected')
    }
  })
})
