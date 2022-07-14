const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix, theme }) => {
  let colors = theme('colors')
  Object.entries(colors.yobta).forEach(([key, value]) => {
    addComponents({
      [`.yobta-${key}`]: {
        ...applyPrefixed(
          prefix,
          `.bg-yobta-${key}-paper`,
          `.text-yobta-${key}-ink`,
          `.dark:bg-yobta-${key}-paper-dark`,
          `.dark:text-yobta-${key}-ink-dark`
        ),
        borderColor: 'currentcolor'
      },
      [`.yobta-${key}-inversed`]: {
        ...applyPrefixed(
          prefix,
          `.bg-yobta-${key}-paper-dark`,
          `.text-yobta-${key}-ink-dark`,
          `.dark:bg-yobta-${key}-paper`,
          `.dark:text-yobta-${key}-ink`
        ),
        borderColor: 'currentcolor'
      }
    })
    if ('selected' in value) {
      addUtilities({
        [`.yobta-${key} .yobta-selected`]: {
          ...applyPrefixed(
            prefix,
            `.bg-yobta-${key}-selected-paper`,
            `.dark:bg-yobta-${key}-selected-paper-dark`,
            `.text-yobta-${key}-selected-ink`,
            `.dark:text-yobta-${key}-selected-ink-dark`
          )
        }
      })
    }
  })
})
