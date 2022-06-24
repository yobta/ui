const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix }) => {
  // NOTE: Utility level in order to override border color on base level
  addUtilities({
    '.yobta-ink': {
      ...applyPrefixed(
        prefix,
        '.border-ink',
        '.text-ink',
        '.dark:border-ink-dark',
        '.dark:text-ink-dark'
      )
    },
    '.yobta-ink-2': {
      ...applyPrefixed(
        prefix,
        '.border-ink-2',
        '.text-ink-2',
        '.dark:border-ink-2-dark',
        '.dark:text-ink-2-dark'
      )
    },
    '.yobta-ink-primary': {
      ...applyPrefixed(
        prefix,
        '.border-ink-primary',
        '.text-ink-primary',
        '.dark:border-ink-primary-dark',
        '.dark:text-ink-primary-dark'
      )
    },
    '.yobta-ink-secondary': {
      ...applyPrefixed(
        prefix,
        '.border-ink-secondary',
        '.text-ink-secondary',
        '.dark:border-ink-secondary-dark',
        '.dark:text-ink-secondary-dark'
      )
    },
    '.yobta-ink-error': {
      ...applyPrefixed(
        prefix,
        '.border-ink-error',
        '.text-ink-error',
        '.dark:border-ink-error-dark',
        '.dark:text-ink-error-dark'
      )
    },
    '.yobta-ink-success': {
      ...applyPrefixed(
        prefix,
        '.border-ink-success',
        '.text-ink-success',
        '.dark:border-ink-success-dark',
        '.dark:text-ink-success-dark'
      )
    },
    '.yobta-ink-warning': {
      ...applyPrefixed(
        prefix,
        '.border-ink-warning',
        '.text-ink-warning',
        '.dark:border-ink-warning-dark',
        '.dark:text-ink-warning-dark'
      )
    },
    '.yobta-ink-info': {
      ...applyPrefixed(
        prefix,
        '.border-ink-info',
        '.text-ink-info',
        '.dark:border-ink-info-dark',
        '.dark:text-ink-info-dark'
      )
    },
    '.yobta-ink-border': {
      ...applyPrefixed(
        prefix,
        '.border-ink-border',
        '.text-ink-border',
        '.dark:border-ink-border-dark',
        '.dark:text-ink-border-dark'
      )
    }
  })
})
