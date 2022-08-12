const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-badge': {
      ...applyPrefixed(
        prefix,
        '.bg-ink-border',
        '.font-medium',
        '.gap-x-1',
        '.inline-flex',
        '.leading-6',
        '.px-2',
        '.rounded-full',
        '.text-current',
        '.text-sm'
      )
    }
  })
})
