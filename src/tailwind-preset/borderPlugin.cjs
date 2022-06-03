const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix }) => {
  addUtilities(
    {
      // Paper
      '.ui-border-paper': {
        ...applyPrefixed(prefix, '.border-paper', '.dark:border-paper-dark')
      },
      '.ui-border-paper-2': {
        ...applyPrefixed(prefix, '.border-paper-2', '.dark:border-paper-2-dark')
      },
      '.ui-border-paper-3': {
        ...applyPrefixed(prefix, '.border-paper-3', '.dark:border-paper-3-dark')
      },
      '.ui-border-paper-primary': {
        ...applyPrefixed(
          prefix,
          '.border-paper-primary',
          '.dark:border-paper-primary-dark'
        )
      },
      // Ink
      '.ui-border-ink': {
        ...applyPrefixed(prefix, '.border-ink', '.dark:border-ink-dark')
      },
      '.ui-border-ink-2': {
        ...applyPrefixed(prefix, '.border-ink-2', '.dark:border-ink-2-dark')
      },
      '.ui-border-ink-primary': {
        ...applyPrefixed(
          prefix,
          '.border-ink-primary',
          '.dark:border-ink-primary-dark'
        )
      },
      '.ui-border-ink-secondary': {
        ...applyPrefixed(
          prefix,
          '.border-paper-secondary',
          '.dark:border-paper-secondary-dark'
        )
      },
      '.ui-border-ink-error': {
        ...applyPrefixed(
          prefix,
          '.border-paper-error',
          '.dark:border-paper-error-dark'
        )
      },
      '.ui-border-ink-success': {
        ...applyPrefixed(
          prefix,
          '.border-paper-success',
          '.dark:border-paper-success-dark'
        )
      },
      '.ui-border-ink-warning': {
        ...applyPrefixed(
          prefix,
          '.border-paper-warning',
          '.dark:border-paper-warning-dark'
        )
      },
      '.ui-border-ink-info': {
        ...applyPrefixed(
          prefix,
          '.border-paper-info',
          '.dark:border-paper-info-dark'
        )
      },

      // Additional
      '.ui-border-1': {
        ...applyPrefixed(prefix, '.border-color-1', '.dark:border-color-1-dark')
      },
      '.ui-border-2': {
        ...applyPrefixed(prefix, '.border-color-2', '.dark:border-color-2-dark')
      },
      '.ui-border-3': {
        ...applyPrefixed(prefix, '.border-color-3', '.dark:border-color-3-dark')
      },
      '.ui-border-4': {
        ...applyPrefixed(prefix, '.border-color-4', '.dark:border-color-4-dark')
      },
      '.ui-border-5': {
        ...applyPrefixed(prefix, '.border-color-5', '.dark:border-color-5-dark')
      },
      '.ui-border-6': {
        ...applyPrefixed(prefix, '.border-color-6', '.dark:border-color-6-dark')
      },
      '.ui-border-7': {
        ...applyPrefixed(prefix, '.border-color-7', '.dark:border-color-7-dark')
      },
      '.ui-border-8': {
        ...applyPrefixed(prefix, '.border-color-8', '.dark:border-color-8-dark')
      },
      '.ui-border-9': {
        ...applyPrefixed(prefix, '.border-color-9', '.dark:border-color-9-dark')
      },
      '.ui-border-10': {
        ...applyPrefixed(
          prefix,
          '.border-color-10',
          '.dark:border-color-10-dark'
        )
      },
      '.ui-border-11': {
        ...applyPrefixed(
          prefix,
          '.border-color-11',
          '.dark:border-color-11-dark'
        )
      },
      '.ui-border-12': {
        ...applyPrefixed(
          prefix,
          '.border-color-12',
          '.dark:border-color-12-dark'
        )
      },
      '.ui-border-13': {
        ...applyPrefixed(
          prefix,
          '.border-color-13',
          '.dark:border-color-13-dark'
        )
      },
      '.ui-border-14': {
        ...applyPrefixed(
          prefix,
          '.border-color-14',
          '.dark:border-color-14-dark'
        )
      },
      '.ui-border-15': {
        ...applyPrefixed(
          prefix,
          '.border-color-15',
          '.dark:border-color-15-dark'
        )
      },
      '.ui-border-16': {
        ...applyPrefixed(
          prefix,
          '.border-color-16',
          '.dark:border-color-16-dark'
        )
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
