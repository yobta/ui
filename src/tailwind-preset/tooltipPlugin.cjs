const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix }) => {
  let common = [
    '.bg-tooltip-paper',
    '.dark:bg-tooltip-paper-dark',
    '.text-tooltip-ink',
    '.dark:text-tooltip-ink-dark'
  ]
  addComponents({
    '.ui-tooltip__spot': {
      ...applyPrefixed(prefix, ...common, '.rounded-full')
    },
    '.ui-tooltip__content': {
      ...applyPrefixed(
        prefix,
        ...common,
        '.rounded',
        '.px-2',
        '.py-1',
        '.text-center',
        '.text-xs'
      )
    },
    '.ui-tooltip--animated': {
      ...applyPrefixed(
        prefix,
        '.transition-opacity',
        '.ease-out',
        '.duration-700',
        '.transform-gpu'
      )
    }
  })

  addUtilities({
    '.ui-tooltip__spot': {
      ...applyPrefixed(
        prefix,
        '.hidden',
        '.fixed',
        '.w-2',
        '.h-2',
        '.p-0',
        '.pointer-events-none',
        '.select-none',
        '.-translate-x-1/2',
        '.-translate-y-1/2'
      )
    },
    '.ui-tooltip__spot--visible': {
      display: 'block'
    },
    '.ui-tooltip__content': {
      ...applyPrefixed(
        prefix,
        '.invisible',
        '.pointer-events-none',
        '.fixed',
        '.select-none',
        '.opacity-0'
      )
    },
    '.ui-tooltip__content--visible': {
      ...applyPrefixed(prefix, '.visible', '.opacity-90')
    }
  })
})
