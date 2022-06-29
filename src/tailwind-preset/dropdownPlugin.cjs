const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-dropdown-menu': {
      ...applyPrefixed(
        prefix,
        '.yobta-menu',
        '.yobta-paper-2',
        '.fixed',
        '.rounded',
        '.transform-gpu',
        '.shadow-md',
        '.hidden'
      )
    }
  })
})
