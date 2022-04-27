const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-spinner': {
      ...applyPrefixed(
        prefix,
        '.animate-ui-spinner',
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
