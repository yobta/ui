const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix }) => {
  addUtilities(
    {
      '.ui-bg-paper': {
        ...applyPrefixed(prefix, '.bg-paper', '.dark:bg-paper-dark')
      },
      '.ui-bg-paper-2': {
        ...applyPrefixed(prefix, '.bg-paper-2', '.dark:bg-paper-2-dark')
      },
      '.ui-bg-paper-3': {
        ...applyPrefixed(prefix, '.bg-paper-3', '.dark:bg-paper-3-dark')
      },
      '.ui-bg-primary': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-primary',
          '.dark:bg-paper-primary-dark'
        )
      },
      '.ui-bg-secondary': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-secondary',
          '.dark:bg-paper-secondary-dark'
        )
      },
      '.ui-bg-error': {
        ...applyPrefixed(prefix, '.bg-paper-error', '.dark:bg-paper-error-dark')
      },
      '.ui-bg-success': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-success',
          '.dark:bg-paper-success-dark'
        )
      },
      '.ui-bg-warning': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-warning',
          '.dark:bg-paper-warning-dark'
        )
      },
      '.ui-bg-info': {
        ...applyPrefixed(prefix, '.bg-paper-info', '.dark:bg-paper-info-dark')
      },
      '.ui-bg-tooltip': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-tooltip',
          '.dark:bg-paper-tooltip-dark'
        )
      },

      '.ui-bg-1': {
        ...applyPrefixed(prefix, '.bg-color-1', '.dark:bg-color-1-dark')
      },
      '.ui-bg-2': {
        ...applyPrefixed(prefix, '.bg-color-2', '.dark:bg-color-2-dark')
      },
      '.ui-bg-3': {
        ...applyPrefixed(prefix, '.bg-color-3', '.dark:bg-color-3-dark')
      },
      '.ui-bg-4': {
        ...applyPrefixed(prefix, '.bg-color-4', '.dark:bg-color-4-dark')
      },
      '.ui-bg-5': {
        ...applyPrefixed(prefix, '.bg-color-5', '.dark:bg-color-5-dark')
      },
      '.ui-bg-6': {
        ...applyPrefixed(prefix, '.bg-color-6', '.dark:bg-color-6-dark')
      },
      '.ui-bg-7': {
        ...applyPrefixed(prefix, '.bg-color-7', '.dark:bg-color-7-dark')
      },
      '.ui-bg-8': {
        ...applyPrefixed(prefix, '.bg-color-8', '.dark:bg-color-8-dark')
      },
      '.ui-bg-9': {
        ...applyPrefixed(prefix, '.bg-color-9', '.dark:bg-color-9-dark')
      },
      '.ui-bg-10': {
        ...applyPrefixed(prefix, '.bg-color-10', '.dark:bg-color-10-dark')
      },
      '.ui-bg-11': {
        ...applyPrefixed(prefix, '.bg-color-11', '.dark:bg-color-11-dark')
      },
      '.ui-bg-12': {
        ...applyPrefixed(prefix, '.bg-color-12', '.dark:bg-color-12-dark')
      },
      '.ui-bg-13': {
        ...applyPrefixed(prefix, '.bg-color-13', '.dark:bg-color-13-dark')
      },
      '.ui-bg-14': {
        ...applyPrefixed(prefix, '.bg-color-14', '.dark:bg-color-14-dark')
      },
      '.ui-bg-15': {
        ...applyPrefixed(prefix, '.bg-color-15', '.dark:bg-color-15-dark')
      },
      '.ui-bg-16': {
        ...applyPrefixed(prefix, '.bg-color-16', '.dark:bg-color-16-dark')
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
