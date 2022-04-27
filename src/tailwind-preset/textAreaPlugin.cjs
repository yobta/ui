const plugin = require('tailwindcss/plugin')

const applyPrefixed = require('./applyPrefixed.cjs')

module.exports = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-textarea': {
      ...applyPrefixed(
        prefix,
        '.relative',
        '.flex',
        '.flex-col-reverse',
        '.text-ink',
        '.dark:text-ink-dark'
      ),
      '&.ui-textarea--fancy': {
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
        '& textarea': {
          ...applyPrefixed(prefix, '.rounded-b-none', '.px-0', '.resize-none'),
          backgroundColor: 'transparent'
        },
        '& .ui-textarea__caption': {
          ...applyPrefixed(prefix, '.px-0')
        }
      },
      '& .ui-textarea__caption--error-bullet': {
        ...applyPrefixed(prefix, '.hidden', '.ml-1', '.ui-ink-error')
      },
      '&.ui-textarea--filled, &:focus-within': {
        '& .ui-textarea__caption': {
          'font-size': '0.64rem',
          'transform': 'translateY(0%)'
        }
      }
    },
    '.ui-textarea__input': {
      ...applyPrefixed(
        prefix,
        '.block',
        '.box-border',
        '.appearance-none',
        '.outline-none',
        '.rounded',
        '.bg-paper-2',
        '.dark:bg-paper-2-dark',
        '.w-full',
        '.px-4',
        '.py-2'
      ),
      '-webkit-tap-highlight-color': 'transparent',
      '&:invalid ~ .ui-textarea__caption .ui-textarea__caption--error-bullet': {
        ...applyPrefixed(prefix, '.inline')
      },
      '&::placeholder': {
        color: 'inherit',
        opacity: 0.4
      }
    },
    '.ui-textarea__caption': {
      ...applyPrefixed(
        prefix,
        '.block',
        '.truncate',
        '.py-0',
        '.select-none',
        '.leading-6',
        '.px-4'
      ),
      transition: 'font 0.32s ease, transform 0.32s ease',
      transform: 'translateY(2rem)'
    }
  })
})
