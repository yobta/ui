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
          `.bg-button-${key}-paper`,
          `.dark:bg-button-${key}-paper-dark`,
          `.text-button-${key}-ink`,
          `.dark:text-button-${key}-ink-dark`
        )
      }
    }),
    {}
  )
  addUtilities(classes)
})
