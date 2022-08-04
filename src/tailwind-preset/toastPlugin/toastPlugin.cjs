const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-toast': {
      ...applyPrefixed(
        prefix,
        '.fixed',
        '.yobta-paper-inversed',
        '.rounded',
        '.px-4',
        '.py-2',
        '.flex',
        '.items-center',
        '.justify-between',
        '.gap-x-2',
        '.shadow'
      )
    },
    '.yobta-toast--in-up': {
      ...applyPrefixed(prefix)
    },
    '.yobta-toast--out-up': {
      ...applyPrefixed(prefix)
    },
    '.yobta-toast--in-down': {
      ...applyPrefixed(prefix)
    },
    '.yobta-toast--out-down': {
      ...applyPrefixed(prefix)
    }
  })
})
