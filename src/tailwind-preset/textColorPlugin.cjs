const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

function createClasses(base, colors, prefix) {
  let { DEFAULT, dark, ...restColors } = colors
  let init = DEFAULT && dark ?
    { [`.ui-${base}`]: { ...applyPrefixed(prefix, `.${base}`, `.dark:${base}-dark`) } } :
    {}
  let result = Object.entries(restColors)
    .filter(([, obj]) => typeof obj.DEFAULT === 'string' && typeof obj.dark === 'string')
    .reduce((acc, [key]) => ({
      ...acc,
      [`.ui-${base}-${key}`]: { ...applyPrefixed(prefix, `.${base}-${key}`, `.dark:${base}-${key}-dark`) }
    }), init)
  return result
}

module.exports = plugin(({ addUtilities, prefix, theme }) => {
  let colors = theme('colors') || {}
  let utilities = Object.entries(colors)
    .reduce((acc, [key, value]) => (
      { ...acc, ...createClasses(`text-${key}`, value, prefix) }
    ), {})
  addUtilities(utilities, { variants: ['checked', 'focus-within'] })
})
