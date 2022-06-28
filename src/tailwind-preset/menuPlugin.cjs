const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-menu': {
      ...applyPrefixed(
        prefix,
        '.yobta-list',
        '.yobta-paper',
        '.fixed',
        '.rounded',
        '.shadow-md'
      )
    },
    '.yobta-menu-header': {
      ...applyPrefixed(prefix, '.yobta-list-header')
    },
    '.yobta-menu-item': {
      ...applyPrefixed(
        prefix,
        '.yobta-list-item',
        '.w-full',
        '.text-left',
        '.relative',
        '.cursor-pointer'
      ),
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
        opacity: 0.04
      },
      '&:active::before': {
        opacity: 0.8
      },
      '&:disabled': {
        ...applyPrefixed(prefix, '.yobta-disabled')
      }
    },
    '.yobta-menu-group': {
      ...applyPrefixed(
        prefix,
        '.yobta-list-group',
        '.w-full',
        '.text-left',
        '.relative',
        '.cursor-pointer'
      ),
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
    '.yobta-menu-text': {
      ...applyPrefixed(prefix, '.yobta-list-text')
    },
    '.yobta-menu-icon': {
      ...applyPrefixed(prefix, '.yobta-list-icon')
    }
  })
})
