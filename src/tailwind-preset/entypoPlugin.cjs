const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-entypo': {
      ...applyPrefixed(prefix, '.fill-current', '.h-5', '.w-5'),
      margin: '2px'
    }
  })
})
