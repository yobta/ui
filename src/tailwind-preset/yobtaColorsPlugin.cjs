const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix, theme }) => {
  let color = theme('colors')
  let classes = Object.entries(color.yobta).reduce(
    (acc, [key]) => ({
      ...acc,
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
    }),
    {}
  )
  addComponents(classes)
})
