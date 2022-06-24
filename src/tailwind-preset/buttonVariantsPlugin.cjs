const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let color = theme('colors')
  let classes = Object.entries(color.yobta).reduce(
    (acc, [key]) => ({
      ...acc,
      [`.ui-button-${key}`]: {
        ...applyPrefixed(prefix, '.ui-button', `.yobta-${key}`)
      }
    }),
    {}
  )
  addUtilities(classes)
})
