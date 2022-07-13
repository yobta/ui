const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addSelected, prefix, theme }) => {
  let colors = theme('colors')
  let classes = Object.keys(colors.selected).reduce(
    (acc, item) => ({
      ...acc,
      [`.yobta-selected-${item}`]: {
        ...applyPrefixed(
          prefix,
          `.yobta-selected-${item}-paper`,
          `.yobta-selected-${item}-ink`,
          `.dark:yobta-selected-${item}-paper-dark`,
          `.dark:yobta-selected-${item}-ink-dark`
        )
      }
    }),
    {}
  )
  addSelected(classes)
})
