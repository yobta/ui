const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors')

  if (!colors?.ink) {
    throw new Error('Yobta inkPlugin: theme.colors.ink is required')
  }

  let { DEFAULT, dark, ...inkColors } = colors.ink

  if (typeof DEFAULT !== 'string') {
    throw new Error(
      'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
    )
  }

  if (typeof dark !== 'string') {
    throw new Error('Yobta inkPlugin: theme.colors.ink.dark should be a string')
  }

  if (!Object.keys(inkColors).length) {
    throw new Error(
      'Yobta inkPlugin: theme.colors.ink should have more entries'
    )
  }

  Object.entries(inkColors).forEach(([key, item]) => {
    if (typeof item?.DEFAULT !== 'string') {
      throw new Error(
        `Yobta inkPlugin: theme.colors.ink.${key}.DEFAULT should be a string`
      )
    }
    if (typeof item?.dark !== 'string') {
      throw new Error(
        `Yobta inkPlugin: theme.colors.ink.${key}.dark should be a string`
      )
    }
  })

  addUtilities({
    '.yobta-ink': {
      ...applyPrefixed(
        prefix,
        '.border-current',
        '.text-ink',
        '.dark:text-ink-dark'
      )
    }
  })

  Object.keys(inkColors).forEach(key => {
    addUtilities({
      [`.yobta-ink-${key}`]: {
        ...applyPrefixed(
          prefix,
          `.border-current`,
          `.text-ink-${key}`,
          `.dark:text-ink-${key}-dark`
        )
      }
    })
  })
})
