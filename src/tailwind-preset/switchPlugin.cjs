const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-switch': {
      ...applyPrefixed(
        prefix,
        '.appearance-none',
        '.relative',
        '.transition',
        '.duration-300',
        '.rounded-full',
        '.cursor-pointer',
        '.yobta-bg-paper-3'
      ),
      'height': '1.5rem',
      'width': '2.25rem',
      '&::before': {
        ...applyPrefixed(
          prefix,
          '.bg-paper',
          '.shadow',
          '.absolute',
          '.block',
          '.transition-transform',
          '.duration-300'
        ),
        content: '""',
        height: 'calc(1.5rem - 2px)',
        width: 'calc(1.5rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1
        }
      }
    },
    '.yobta-switch-small': {
      ...applyPrefixed(prefix, '.yobta-switch'),
      'height': '1rem',
      'width': '1.75rem',
      '&::before': {
        ...applyPrefixed(
          prefix,
          '.yobta-bg-paper',
          '.shadow',
          '.absolute',
          '.block',
          '.transition-transform',
          '.duration-300'
        ),
        content: '""',
        height: 'calc(1rem - 2px)',
        width: 'calc(1rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1
        }
      }
    },
    '.yobta-switch-big': {
      ...applyPrefixed(prefix, '.yobta-switch'),
      'height': '2rem',
      'width': '3rem',
      '&::before': {
        ...applyPrefixed(
          prefix,
          '.yobta-bg-paper',
          '.shadow',
          '.absolute',
          '.block',
          '.transition-transform',
          '.duration-300'
        ),
        content: '""',
        height: 'calc(2rem - 2px)',
        width: 'calc(2rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(1rem)',
          right: 1
        }
      }
    }
  })
})
