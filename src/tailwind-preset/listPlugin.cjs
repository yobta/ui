const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-list': {
      ...applyPrefixed(prefix, '.px-0', '.py-2', '.m-0')
    },
    '.yobta-list-header': {
      ...applyPrefixed(
        prefix,
        '.text-sm',
        '.opacity-60',
        '.px-4',
        '.py-2',
        '.mb-2',
        '.block'
      )
    },
    '.yobta-list-item': {
      ...applyPrefixed(prefix, '.px-4', '.py-2', '.m-0', '.block')
    },
    '.yobta-list-group': {
      ...applyPrefixed(prefix, '.flex', '.items-center', '.py-2', '.m-0')
    },
    '.yobta-list-text': {
      ...applyPrefixed(prefix, '.px-4', '.flex-1')
    },
    '.yobta-list-icon': {
      marginLeft: 'calc(1rem + 2px)',
      marginRight: 'calc(1rem + 2px)'
    }
  })
})
