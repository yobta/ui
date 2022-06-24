const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase(
    {
      'a.yobta-link, .yobta-link-box a': {
        ...applyPrefixed(
          prefix,
          '.underline',
          '.text-link',
          '.dark:text-link-dark',
          '.active:text-link-active',
          '.dark:active:text-link-active-dark',
          '.hover:text-link-hover',
          '.dark:hover:text-link-hover-dark',
          '.visited:text-link-visited',
          '.dark:visited:text-link-visited-dark'
        )
      }
    },
    { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
