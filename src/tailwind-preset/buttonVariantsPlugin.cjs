const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let color = theme('colors')
  let classes = Object.entries(color.button).reduce(
    (acc, [key]) => ({
      ...acc,
      [`.ui-button-${key}`]: {
        ...applyPrefixed(
          prefix,
          '.ui-button',
          `.paper-button-${key}-paper`,
          `.dark:paper-button-${key}-paper-dark`,
          `.ink-button-${key}-ink`,
          `.dark:ink-button-${key}-ink-dark`
        )
      }
    }),
    {}
  )
  addUtilities(classes)
})
