const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-radio': {
      ...applyPrefixed(
        prefix,
        '.appearance-none',
        '.border-2',
        '.ui-ink',
        '.rounded-full',
        '.cursor-pointer',
        '.relative'
      ),
      'height': '1.5rem',
      'width': '1.5rem',
      'minWidth': '1.5rem',

      '&::before': {
        ...applyPrefixed(
          prefix,
          '.absolute',
          '.left-1',
          '.top-1',
          '.right-1',
          '.bottom-1',
          '.transform',
          '.scale-0',
          '.transition',
          '.duration-100'
        ),
        backgroundColor: 'currentColor',
        borderRadius: 'inherit',
        content: '""'
      },
      '&:checked::before': {
        ...applyPrefixed(prefix, '.scale-100')
      },
      '&:invalid': {
        ...applyPrefixed(prefix, '.ui-ink-error'),
        '&::before': {
          ...applyPrefixed(prefix, '.yobta-bg-error')
        }
      }
    }
  })
})
