const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-disabled': {
      ...applyPrefixed(prefix, '.pointer-events-none', '.opacity-50')
    },
    '.yobta-no-tap': '.rgb(0, 0, 0, 0)'
  })
})
