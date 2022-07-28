const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix }) => {
  addComponents({
    '.yobta-list': {
      ...applyPrefixed(prefix, '.px-0', '.py-2', '.m-0')
    },
    '.yobta-list-header': {
      ...applyPrefixed(
        prefix,
        '.text-sm',
        '.opacity-60',
        '.px-4',
        '.py-2',
        '.mb-2',
        '.block'
      )
    },
    '.yobta-list-item': {
      ...applyPrefixed(
        prefix,
        '.px-4',
        '.py-2',
        '.m-0',
        '.flex',
        '.items-center',
        '.justify-start',
        '.gap-x-2'
      ),
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
