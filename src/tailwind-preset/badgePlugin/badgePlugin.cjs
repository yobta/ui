const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, addUtilities, prefix, theme }) => {
  addBase({
    '.yobta-badge': {
      ...applyPrefixed(
        prefix,
        '.bg-ink-border',
        '.font-medium',
        '.gap-x-1',
        '.inline-flex',
        '.leading-6',
        '.px-2',
        '.rounded-full',
        '.text-current',
        '.text-sm'
      )
    }
  })

  let colors = theme('colors')

  if (!colors?.yobta) {
    throw new Error('Yobta badgePlugin: theme.colors.yobta is required')
  }

  if (!Object.keys(colors?.yobta).length) {
    throw new Error(
      'Yobta badgePlugin: theme.colors.yobta should have more entries'
    )
  }

  Object.entries(colors?.yobta).forEach(([key, item]) => {
    if (typeof item?.ink.DEFAULT !== 'string') {
      throw new Error(
        `Yobta badgePlugin: theme.colors.yobta.${key}.ink.DEFAULT should be a string`
      )
    }
    if (typeof item?.ink.dark !== 'string') {
      throw new Error(
        `Yobta badgePlugin: theme.colors.yobta.${key}.ink.dark should be a string`
      )
    }
  })

  let classes = Object.entries(colors.yobta).reduce(
    (acc, [key]) => ({
      ...acc,
      [`.yobta-badge-${key}`]: {
        ...applyPrefixed(prefix, '.yobta-badge', `.yobta-${key}`)
      }
    }),
    {}
  )
  addUtilities(classes)
})
