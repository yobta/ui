const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-placeholder': {
      ...applyPrefixed(
        prefix,
        '.animate-yobta-placeholder',
        '.flex',
        '.items-center',
        '.pointer-events-none',
        '.relative',
        '.select-none',
        '.w-full'
      ),
      'opacity': 0.08,
      '&::before': {
        ...applyPrefixed(
          prefix,
          '.overflow-hidden',
          '.text-transparent',
          '.w-0'
        ),
        content: '"|"'
      },
      '&::after': {
        ...applyPrefixed(
          prefix,
          '.rounded',
          '.bg-current',
          '.block',
          '.flex-1'
        ),
        content: '""',
        height: '0.72em',
        marginTop: '0.08em'
      }
    }
  })
})
