const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix }) => {
  addUtilities(
    {
      '.yobta-bg-paper': {
        ...applyPrefixed(prefix, '.bg-paper', '.dark:bg-paper-dark')
      },
      '.yobta-bg-paper-2': {
        ...applyPrefixed(prefix, '.bg-paper-2', '.dark:bg-paper-2-dark')
      },
      '.yobta-bg-paper-3': {
        ...applyPrefixed(prefix, '.bg-paper-3', '.dark:bg-paper-3-dark')
      },
      '.yobta-bg-primary': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-primary',
          '.dark:bg-paper-primary-dark'
        )
      },
      '.yobta-bg-secondary': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-secondary',
          '.dark:bg-paper-secondary-dark'
        )
      },
      '.yobta-bg-error': {
        ...applyPrefixed(prefix, '.bg-paper-error', '.dark:bg-paper-error-dark')
      },
      '.yobta-bg-success': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-success',
          '.dark:bg-paper-success-dark'
        )
      },
      '.yobta-bg-warning': {
        ...applyPrefixed(
          prefix,
          '.bg-paper-warning',
          '.dark:bg-paper-warning-dark'
        )
      },
      '.yobta-bg-info': {
        ...applyPrefixed(prefix, '.bg-paper-info', '.dark:bg-paper-info-dark')
      },

      '.yobta-bg-1': {
        ...applyPrefixed(prefix, '.bg-color-1', '.dark:bg-color-1-dark')
      },
      '.yobta-bg-2': {
        ...applyPrefixed(prefix, '.bg-color-2', '.dark:bg-color-2-dark')
      },
      '.yobta-bg-3': {
        ...applyPrefixed(prefix, '.bg-color-3', '.dark:bg-color-3-dark')
      },
      '.yobta-bg-4': {
        ...applyPrefixed(prefix, '.bg-color-4', '.dark:bg-color-4-dark')
      },
      '.yobta-bg-5': {
        ...applyPrefixed(prefix, '.bg-color-5', '.dark:bg-color-5-dark')
      },
      '.yobta-bg-6': {
        ...applyPrefixed(prefix, '.bg-color-6', '.dark:bg-color-6-dark')
      },
      '.yobta-bg-7': {
        ...applyPrefixed(prefix, '.bg-color-7', '.dark:bg-color-7-dark')
      },
      '.yobta-bg-8': {
        ...applyPrefixed(prefix, '.bg-color-8', '.dark:bg-color-8-dark')
      },
      '.yobta-bg-9': {
        ...applyPrefixed(prefix, '.bg-color-9', '.dark:bg-color-9-dark')
      },
      '.yobta-bg-10': {
        ...applyPrefixed(prefix, '.bg-color-10', '.dark:bg-color-10-dark')
      },
      '.yobta-bg-11': {
        ...applyPrefixed(prefix, '.bg-color-11', '.dark:bg-color-11-dark')
      },
      '.yobta-bg-12': {
        ...applyPrefixed(prefix, '.bg-color-12', '.dark:bg-color-12-dark')
      },
      '.yobta-bg-13': {
        ...applyPrefixed(prefix, '.bg-color-13', '.dark:bg-color-13-dark')
      },
      '.yobta-bg-14': {
        ...applyPrefixed(prefix, '.bg-color-14', '.dark:bg-color-14-dark')
      },
      '.yobta-bg-15': {
        ...applyPrefixed(prefix, '.bg-color-15', '.dark:bg-color-15-dark')
      },
      '.yobta-bg-16': {
        ...applyPrefixed(prefix, '.bg-color-16', '.dark:bg-color-16-dark')
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
