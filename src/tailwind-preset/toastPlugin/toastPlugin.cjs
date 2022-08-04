const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix }) => {
  addComponents({
    '.yobta-toast': {
      ...applyPrefixed(prefix)
    }
  })

  addUtilities({
    '.yobta-toast': {
      ...applyPrefixed(prefix)
    }
  })
})
