const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addSelected, prefix, theme }) => {
  let color = theme('colors')
  let classes = Object.entries(color.selected).reduce((acc, [key]) => ({
    ...acc,
    [`.yobta-selected-${key}`]: {
      ...applyPrefixed(
        prefix,
        `.yobta-selected-${key}-paper`,
        `.yobta-selected-${key}-ink`,
        `.dark:yobta-selected-${key}-paper-dark`,
        `.dark:yobta-selected-${key}-ink-dark`
      )
    }
  }))
  addSelected(classes)
})
