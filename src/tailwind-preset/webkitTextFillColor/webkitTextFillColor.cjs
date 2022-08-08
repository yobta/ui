const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  // TODO: errors, test
  let colors = theme('colors') || {}

  if (!colors?.yobta) {
    throw new Error('Yobta webkitTextFillColor: theme.colors.yobta is required')
  }

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
