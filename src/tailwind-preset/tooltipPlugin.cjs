const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-tooltip': {
      ...applyPrefixed(
        prefix,
        '.fixed',
        '.w-0',
        '.h-0',
        '.opacity-0',
        '.pointer-events-none',
        '.relative',
        '.rounded-full',
        '.ui-bg-tooltip'
      )
    },
    '.ui-tooltip--active': {
      ...applyPrefixed(prefix, '.opacity-90', '.w-2', '.h-2')
    },
    '.ui-tooltip--animated': {
      ...applyPrefixed(prefix, '.transition', '.duration-300')
    },
    '.ui-tooltip__content': {
      ...applyPrefixed(
        prefix,
        '.ui-bg-tooltip',
        '.ui-text-ink-tooltip',
        '.rounded',
        '.px-2',
        '.py-1',
        '.absolute',
        '.text-center',
        '.text-xs',
        '.select-none',
        '.opacity-0',
        '.left-1',
        '.top-3'
      )
    },
    '.ui-tooltip__content--active': {
      ...applyPrefixed(prefix, '.opacity-90')
    }
  })
})
