const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, addUtilities, prefix }) => {
  addBase({
    '.ui-tooltip__spot': {
      ...applyPrefixed(prefix, '.ui-bg-tooltip', '.rounded-full')
    },
    '.ui-tooltip--animated': {
      ...applyPrefixed(prefix, '.transition', '.duration-500')
    },
    '.ui-tooltip__content': {
      ...applyPrefixed(
        prefix,
        '.ui-bg-tooltip',
        '.ui-text-ink-tooltip',
        '.rounded',
        '.px-2',
        '.py-1',
        '.text-center',
        '.text-xs'
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
