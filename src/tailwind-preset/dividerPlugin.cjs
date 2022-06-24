const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
  addBase({
    'hr, .yobta-divider': {
      borderWidth: '1px 0 0 0',
      borderTopColor: 'currentColor',
      opacity: 0.32
    }
  })
})
