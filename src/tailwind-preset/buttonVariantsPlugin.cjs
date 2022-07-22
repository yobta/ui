const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors')

  if (!colors?.yobta) {
    throw new Error(
      'Yobta buttonVariantsPlugin: theme.colors.yobta is required'
    )
  }

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
