const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix, theme }) => {
  let colors = theme('colors')

  if (!colors?.yobta) {
    throw new Error('Yobta yobtaColorsPlugin: theme.colors.yobta is required')
  }

  Object.entries(colors.yobta).forEach(([key, value]) => {
    let { ink, paper, selected } = value

    if (typeof ink.DEFAULT !== 'string') {
      throw new Error(
        `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.ink.DEFAULT should be a string`
      )
    }

    if (typeof ink.dark !== 'string') {
      throw new Error(
        `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.ink.dark should be a string`
      )
    }

    if (typeof paper.DEFAULT !== 'string') {
      throw new Error(
        `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.paper.DEFAULT should be a string`
      )
    }

    if (typeof paper.dark !== 'string') {
      throw new Error(
        `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.paper.dark should be a string`
      )
    }

    if (selected) {
      if (typeof selected.paper.DEFAULT !== 'string') {
        throw new Error(
          `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.selected.paper.DEFAULT should be a string`
        )
      }

      if (typeof selected.paper.dark !== 'string') {
        throw new Error(
          `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.selected.paper.dark should be a string`
        )
      }

      if (typeof selected.ink.DEFAULT !== 'string') {
        throw new Error(
          `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.selected.ink.DEFAULT should be a string`
        )
      }

      if (typeof selected.ink.dark !== 'string') {
        throw new Error(
          `Yobta yobtaColorsPlugin: theme.colors.yobta.${key}.selected.ink.dark should be a string`
        )
      }
    }
  })

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
