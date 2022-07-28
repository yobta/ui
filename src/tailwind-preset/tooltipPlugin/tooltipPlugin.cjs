const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addComponents, addUtilities, prefix }) => {
  let common = [
    '.bg-tooltip-paper',
    '.dark:bg-tooltip-paper-dark',
    '.text-tooltip-ink',
    '.dark:text-tooltip-ink-dark'
  ]
  addComponents({
    '.yobta-tooltip__spot': {
      ...applyPrefixed(prefix, ...common, '.rounded-full', '.z-yobta-tooltip')
    },
    '.yobta-tooltip': {
      ...applyPrefixed(
        prefix,
        ...common,
        '.rounded',
        '.px-2',
        '.py-1',
        '.text-center',
        '.text-xs',
        '.z-yobta-tooltip'
      )
    },
    '.yobta-tooltip--animated': {
      ...applyPrefixed(
        prefix,
        '.delay-500',
        '.transition-opacity',
        '.ease-out',
        '.duration-700',
        '.transform-gpu'
      )
    }
  })

  addUtilities({
    '.yobta-tooltip__spot': {
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
    '.yobta-tooltip__spot--visible': {
      display: 'block'
    },
    '.yobta-tooltip': {
      ...applyPrefixed(
        prefix,
        '.invisible',
        '.pointer-events-none',
        '.fixed',
        '.select-none',
        '.opacity-0'
      )
    },
    '.yobta-tooltip--visible': {
      ...applyPrefixed(prefix, '.visible', '.opacity-90')
    }
  })
})
