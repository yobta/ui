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
      ...applyPrefixed(prefix, '.yobtaToastInUp 0.72s easy forward')
    },
    '.yobta-toast--out-up': {
      ...applyPrefixed(prefix, '.yobtaToastOutUp 0.72s easy forward')
    },
    '.yobta-toast--in-down': {
      ...applyPrefixed(prefix, '.yobtaToastInDown 0.72s easy forward')
    },
    '.yobta-toast--out-down': {
      ...applyPrefixed(prefix, '.yobtaToastOutDown 0.72s easy forward')
    },
    'yobtaToastInUp': {
      from: { transform: 'translateY(-6rem)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 100 }
    },
    'yobtaToastOutUp': {
      from: { transform: 'translateY(0)', opacity: 100 },
      to: { transform: 'translateY(-6rem)', opacity: 0 }
    },
    'yobtaToastInDown': {
      from: { transform: 'translateY(6rem)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 100 }
    },
    'yobtaToastOutDown': {
      from: { transform: 'translateY(0)', opacity: 100 },
      to: { transform: 'translateY(6rem)', opacity: 0 }
    }
  })
})
