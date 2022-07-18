const plugin = require('tailwindcss/plugin')
const { string } = require('yup')

const applyPrefixed = require('./applyPrefixed.cjs')

const stringSchema = string().required()

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors')

  if (!colors?.ink) {
    throw new Error('Yobta inkPlugin: theme.colors.ink is required')
  }

  let { DEFAULT, dark, ...inkColors } = colors.ink

  if (typeof DEFAULT !== 'string' || typeof dark !== 'string') {
    throw new Error(
      'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
    )
  }

  try {
    stringSchema.validateSync(DEFAULT)
  } catch (_e) {
    throw new Error(
      'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
    )
  }
  try {
    stringSchema.validateSync(dark)
  } catch (_e) {
    throw new Error('Yobta inkPlugin: theme.colors.ink.dark should be a string')
  }

  if (DEFAULT && dark) {
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
  }

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
