const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix }) => {
  addComponents({
    '.yobta-dropdown': {
      ...applyPrefixed(
        prefix,
        '.yobta-menu',
        '.yobta-paper-2',
        '.fixed',
        '.rounded',
        '.transform-gpu',
        '.shadow-md',
        '.z-yobta-dropdown'
      )
    }
  })
  addUtilities({
    '.yobta-dropdown--hidden': {
      ...applyPrefixed(prefix, '.hidden')
    }
  })
})
