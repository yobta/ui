const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-checkbox': {
      ...applyPrefixed(
        prefix,
        '.appearance-none',
        '.border-2',
        '.border-current',
        '.rounded',
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
          '.left-0.5',
          '.top-0.5',
          '.right-0.5',
          '.bottom-0.5',
          '.rounded-sm',
          '.transform',
          '.scale-0',
          '.transition',
          '.duration-100'
        ),
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
