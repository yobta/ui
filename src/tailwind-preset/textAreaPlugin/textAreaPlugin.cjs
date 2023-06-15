const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('../applyPrefixed/applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.yobta-textarea': {
      ...applyPrefixed(
        prefix,
        '.relative',
        // a hack to style the error bullet
        '.flex',
        '.flex-col-reverse',
        '.rounded',
        '.yobta-paper-2'
      ),
      '&.yobta-textarea--fancy': {
        '&::before, &::after': {
          ...applyPrefixed(
            prefix,
            '.absolute',
            '.pointer-events-none',
            '.block bottom-0',
            '.left-0',
            '.right-0'
          ),
          content: '""',
          height: '1px',
          opacity: 0.32,
          zIndex: 2,
          backgroundColor: 'currentColor'
        },
        '&::after': {
          opacity: 1,
          height: '2px',
          transform: 'scaleX(0)',
          transition: 'transform 0.48s ease'
        },
        '&:focus-within::after': {
          transform: 'scaleX(1)'
        },
        '& .yobta-textarea__input': {
          ...applyPrefixed(prefix, '.rounded-b-none', '.resize-none'),
          backgroundColor: 'transparent'
        },
        '& .yobta-textarea__caption': {
          // ...applyPrefixed(prefix, '.px-0')
        }
      },
      '& .yobta-textarea__caption--error-bullet': {
        ...applyPrefixed(prefix, '.invisible', '.ml-1', '.yobta-text-ink-error')
      },
      '&.yobta-textarea--filled, &:focus-within': {
        '& .yobta-textarea__caption': {
          'font-size': '0.64rem',
          'transform': 'translateY(0%)'
        }
      }
    },
    '.yobta-textarea__input': {
      ...applyPrefixed(
        prefix,
        '.block',
        '.box-border',
        '.appearance-none',
        '.outline-none',
        '.w-full',
        '.px-4'
      ),
      'backgroundColor': 'transparent',
      'borderRadius': 'inherit',
      '-webkit-tap-highlight-color': 'transparent',
      '&:invalid ~ .yobta-textarea__caption .yobta-textarea__caption--error-bullet':
        {
          ...applyPrefixed(prefix, '.inline', '.visible')
        },
      '&::placeholder': {
        color: 'inherit',
        opacity: 0.4
      }
    },
    '.yobta-textarea__caption': {
      ...applyPrefixed(
        prefix,
        '.block',
        '.leading-6',
        '.px-4',
        '.py-0',
        '.select-none',
        '.truncate'
      ),
      transition: 'font 0.32s ease, transform 0.32s ease',
      transform: 'translateY(0.64em)'
    }
  })
})
