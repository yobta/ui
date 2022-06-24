const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-menu': {
      ...applyPrefixed(prefix, '.ui-list', '.rounded')
    },
    '.ui-menu-header': {
      ...applyPrefixed(prefix, '.ui-list-header')
    },
    '.ui-menu-item': {
      ...applyPrefixed(
        prefix,
        '.ui-list-item',
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
    '.ui-menu-group': {
      ...applyPrefixed(
        prefix,
        '.ui-list-group',
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
    '.ui-menu-text': {
      ...applyPrefixed(prefix, '.ui-list-text')
    },
    '.ui-menu-icon': {
      ...applyPrefixed(prefix, '.ui-list-icon')
    }
  })
})
