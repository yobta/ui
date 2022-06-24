const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-badge': {
      ...applyPrefixed(
        prefix,
        '.px-2',
        '.rounded-full',
        '.inline-block',
        '.yobta-button-text'
      )
    }
  })
})
