const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-toast': {
      ...applyPrefixed(prefix, '.fixed', '.z-yobta-toast')
    },
    '.yobta-toast--top': {
      ...applyPrefixed(prefix, '.z-yobta-toast--top')
    },
    '.yobta-toast__content': {
      ...applyPrefixed(
        prefix,
        '.yobta-paper-inversed',
        '.rounded',
        '.px-4',
        '.py-2',
        '.flex',
        '.items-center',
        '.justify-between',
        '.gap-x-8',
        '.shadow',
        '.transform-gpu'
      )
    }
  })
})
