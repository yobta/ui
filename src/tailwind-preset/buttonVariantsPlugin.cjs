const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors')

  if (!colors?.yobta) {
    throw new Error(
      'Yobta buttonVariantsPlugin: theme.colors.yobta is required'
    )
  }

  if (!Object.keys(colors?.yobta).length) {
    throw new Error(
      'Yobta buttonVariantsPlugin: theme.colors.yobta should have more entries'
    )
  }

  Object.entries(colors?.yobta).forEach(([key, item]) => {
    if (typeof item?.ink.DEFAULT !== 'string') {
      throw new Error(
        `Yobta buttonVariantsPlugin: theme.colors.yobta.${key}.ink.DEFAULT should be a string`
      )
    }
    if (typeof item?.ink.dark !== 'string') {
      throw new Error(
        `Yobta buttonVariantsPlugin: theme.colors.yobta.${key}.ink.dark should be a string`
      )
    }
  })

  let classes = Object.entries(colors.yobta).reduce(
    (acc, [key]) => ({
      ...acc,
      [`.yobta-button-${key}`]: {
        ...applyPrefixed(prefix, '.yobta-button', `.yobta-${key}`)
      }
    }),
    {}
  )
  addUtilities(classes)
})
