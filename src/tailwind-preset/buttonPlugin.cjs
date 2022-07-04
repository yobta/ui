const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-button': {
      ...applyPrefixed(
        prefix,
        '.flex',
        '.font-medium',
        '.gap-x-2',
        '.h-10',
        '.items-center',
        '.justify-center',
        '.leading-6',
        '.px-4',
        '.relative',
        '.rounded',
        '.text-current',
        '.text-sm'
      ),
      'transition': 'filter',
      '&:before': {
        ...applyPrefixed(
          prefix,
          '.absolute',
          '.top-0',
          '.left-0',
          '.right-0',
          '.bottom-0',
          '.opacity-0',
          '.transition',
          '.duration-150'
        ),
        content: '""',
        backgroundColor: 'currentColor',
        borderRadius: 'inherit'
      },
      '&:hover::before': {
        opacity: 0.08
      },
      '&:active::before': {
        opacity: 0.16
      },
      '&:disabled': {
        ...applyPrefixed(prefix, '.yobta-disabled')
      }
    },
    '.yobta-button--busy': {
      'pointer-events': 'none',
      '& > :first-child': {
        visibility: 'hidden',
        display: 'inherit',
        gap: 'inherit',
        flexDirection: 'inherit'
      },
      '& > :last-child': {
        ...applyPrefixed(
          prefix,
          '.visible',
          '.absolute',
          '.left-1/2',
          '.top-1/2',
          '.transform',
          '.-translate-x-1/2',
          '.-translate-y-1/2'
        )
      }
    }
  })
})
