const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

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

  Object.entries(inkColors).forEach(item => {
    // for (let key in item[1]) {
    Object.entries(item[1]).forEach(key => {
      console.log(key)
      if (key[0] !== 'DEFAULT' && key[0] !== 'dark') {
        throw new Error(
          `Yobta inkPlugin: theme.colors.ink.${item[0]} have invalid field '${key[0]}'`
        )
      }
      if (typeof key[1] !== 'string') {
        console.log(key[1])
        throw new Error(
          `Yobta inkPlugin: theme.colors.ink.${key[0]}: ${key[1]} should be a string`
        )
      }
    })
  })

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
