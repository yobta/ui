const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-spinner': {
      ...applyPrefixed(
        prefix,
        '.animate-yobta-spinner',
        '.block',
        '.border-2',
        '.w-6',
        '.h-6',
        '.rounded-full'
      ),
      borderColor: 'currentColor',
      borderLeftColor: 'transparent !important',
      borderRightColor: 'transparent !important'
    }
  })
})
