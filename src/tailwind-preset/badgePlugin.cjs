const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-badge': {
      ...applyPrefixed(
        prefix,
        '.px-2',
        '.rounded-full',
        '.inline-block',
        '.ui-button-text'
      )
    }
  })
})
