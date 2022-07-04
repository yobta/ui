const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, prefix, theme }) => {
  let colors = theme('colors') || {}

  let { DEFAULT, dark, ...inkColors } = colors.ink || {}

  if (DEFAULT && dark) {
    addComponents({
      '.yobta-ink': {
        ...applyPrefixed(
          prefix,
          '.border-current',
          '.text-ink',
          '.dark:text-ink-dark'
        )
      }
    })
  }

  Object.keys(inkColors).forEach(key => {
    addComponents({
      [`.yobta-ink-${key}`]: {
        ...applyPrefixed(
          prefix,
          `.border-current`,
          `.text-ink-${key}`,
          `.dark:text-ink-${key}-dark`
        )
      }
    })
  })
})
