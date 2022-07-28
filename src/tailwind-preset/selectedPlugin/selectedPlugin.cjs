const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors')
  Object.keys(colors.selected).forEach((key, index) => {
    let selectedClassName =
      index === 0 ? '.yobta-selected' : `.yobta-selected-${key}`
    addUtilities({
      [selectedClassName]: {
        ...applyPrefixed(
          prefix,
          `.bg-selected-${key}-paper`,
          `.dark:bg-selected-${key}-paper-dark`,
          `.text-selected-${key}-ink`,
          `.dark:text-selected-${key}-ink-dark`
        )
      }
    })
  })
})
