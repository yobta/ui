const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-addon': {
      ...applyPrefixed(
        prefix,
        '.mx-4',
        '.flex',
        '.items-center',
        '.justify-center'
      ),
      minHeight: '1.5rem',
      minWidth: '1.5rem'
    }
  })
})
