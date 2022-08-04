const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-toast': {
      ...applyPrefixed(prefix, '.fixed')
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
        '.gap-x-2',
        '.shadow',
        '.transform-gpu',
        '.z-yobta-toast'
      )
    }
  })
})
