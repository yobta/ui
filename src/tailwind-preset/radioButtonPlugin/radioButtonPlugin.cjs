const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-radio': {
      ...applyPrefixed(
        prefix,
        '.yobta-no-tap',
        '.appearance-none',
        '.border-2',
        '.border-current',
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
          '.bg-current',
          '.left-1',
          '.top-1',
          '.right-1',
          '.bottom-1',
          '.transform',
          '.scale-0',
          '.transition',
          '.duration-100'
        ),
        borderRadius: 'inherit',
        content: '""'
      },
      '&:checked::before': {
        ...applyPrefixed(prefix, '.scale-100')
      },
      '&:invalid': {
        ...applyPrefixed(
          prefix,
          '.bg-ink-error',
          '.dark:bg-ink-error-dark',
          '.text-ink-error',
          '.dark:text-ink-error-dark'
        )
      }
    }
  })
})
