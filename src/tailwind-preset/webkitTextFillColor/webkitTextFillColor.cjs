const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  let colors = theme('colors')

  if (!colors?.yobta) {
    throw new Error('Yobta webkitTextFillColor: theme.colors.yobta is required')
  }

  Object.entries(colors.yobta).forEach(([key, value]) => {
    let { ink, paper, selected } = value

    if (typeof ink.DEFAULT !== 'string') {
      throw new Error(
        `Yobta webkitTextFillColor: theme.colors.yobta.${key}.ink.DEFAULT should be a string`
      )
    }

    if (typeof ink.dark !== 'string') {
      throw new Error(
        `Yobta webkitTextFillColor: theme.colors.yobta.${key}.ink.dark should be a string`
      )
    }

    if (typeof paper.DEFAULT !== 'string') {
      throw new Error(
        `Yobta webkitTextFillColor: theme.colors.yobta.${key}.paper.DEFAULT should be a string`
      )
    }

    if (typeof paper.dark !== 'string') {
      throw new Error(
        `Yobta webkitTextFillColor: theme.colors.yobta.${key}.paper.dark should be a string`
      )
    }

    if (selected) {
      if (typeof selected.paper.DEFAULT !== 'string') {
        throw new Error(
          `Yobta webkitTextFillColor: theme.colors.yobta.${key}.selected.paper.DEFAULT should be a string`
        )
      }

      if (typeof selected.paper.dark !== 'string') {
        throw new Error(
          `Yobta webkitTextFillColor: theme.colors.yobta.${key}.selected.paper.dark should be a string`
        )
      }

      if (typeof selected.ink.DEFAULT !== 'string') {
        throw new Error(
          `Yobta webkitTextFillColor: theme.colors.yobta.${key}.selected.ink.DEFAULT should be a string`
        )
      }

      if (typeof selected.ink.dark !== 'string') {
        throw new Error(
          `Yobta webkitTextFillColor: theme.colors.yobta.${key}.selected.ink.dark should be a string`
        )
      }
    }
  })

  Object.entries(colors.yobta).forEach(([key, value]) => {
    addComponents({
      [`.yobta-webkit-text-fill-${key} input:-webkit-autofill`]: {
        '-webkit-text-fill-color': `${value.ink.DEFAULT} !important`,
        'caretColor': value.ink.DEFAULT
      },
      [`.yobta-webkit-text-fill-${key}-dark input:-webkit-autofill`]: {
        '-webkit-text-fill-color': `${value.ink.dark} !important`,
        'caretColor': value.ink.dark
      }
    })
  })
})
