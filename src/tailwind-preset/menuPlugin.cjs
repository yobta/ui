const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-menu': {
      ...applyPrefixed(prefix, '.yobta-list', '.rounded', '.flex', '.flex-col')
    },
    '.yobta-menu-header': {
      ...applyPrefixed(prefix, '.yobta-list-header')
    },
    '.yobta-menu-item': {
      ...applyPrefixed(
        prefix,
        '.px-4',
        '.py-2',
        '.m-0',
        '.flex',
        '.items-center',
        '.justify-start',
        '.gap-x-2',
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
      },
      '& .yobta-entypo': {
        marginLeft: '2px',
        marginRight: '2px',
        flexShrink: 0
      },
      '& > .yobta-entypo:last-child': {
        ...applyPrefixed(prefix, '.ml-auto')
      },
      '& > .yobta-entypo:first-child': {
        marginLeft: '2px',
        marginRight: 'calc(1.5rem + 2px)'
      }
    }
  })
})
