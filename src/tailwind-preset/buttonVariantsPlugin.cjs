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
          `.bg-button-${key}-bg`,
          `.dark:bg-button-${key}-bg-dark`,
          `.text-button-${key}-text`,
          `.dark:text-button-${key}-text-dark`
        )
      }
    }),
    {}
  )
  addUtilities(classes)
})
