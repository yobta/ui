const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-linear-progress': {
      ...applyPrefixed(
        prefix,
        '.animate-ui-linear-progress',
        '.block',
        '.h-1',
        '.relative',
        '.rounded'
      ),
      backgroundSize: '200% 100%',
      backgroundImage: `linear-gradient(
          to right,
          transparent 50%,
          currentColor 50%,
          currentColor 60%,
          transparent 60%,
          transparent 71.5%,
          currentColor 71.5%,
          currentColor 84%,
          transparent 84%
        )`
    },
    '.ui-linear-progress::before': {
      ...applyPrefixed(
        prefix,
        '.absolute',
        '.top-0',
        '.left-0',
        '.right-0',
        '.bottom-0',
        '.opacity-20'
      ),
      backgroundColor: 'currentColor',
      borderRadius: 'inherit',
      content: '""'
    }
  })
})
