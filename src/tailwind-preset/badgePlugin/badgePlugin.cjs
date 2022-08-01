const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-badge': {
      ...applyPrefixed(
        prefix,
        '.yobta-primary',
        '.font-medium',
        '.inline-block',
        '.leading-6',
        '.px-2',
        '.rounded-full',
        '.text-sm'
      )
    }
  })
})
