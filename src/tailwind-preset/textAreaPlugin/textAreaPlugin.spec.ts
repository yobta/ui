import { test, expect, vi } from 'vitest'

// @ts-ignore
import textAreaPlugin from './textAreaPlugin.cjs'

const prefix = (str: string): string => str

test('textAreaPlugin', () => {
  let addBase = vi.fn()

  textAreaPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-textarea': {
      '@apply relative flex flex-col-reverse rounded yobta-paper-2': {},
      '&.yobta-textarea--fancy': {
        '&::before, &::after': {
          '@apply absolute pointer-events-none block bottom-0 left-0 right-0':
            {},
          'content': '""',
          'height': '1px',
          'opacity': 0.32,
          'zIndex': 2,
          'backgroundColor': 'currentColor'
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
          '@apply rounded-b-none resize-none': {},
          'backgroundColor': 'transparent'
        },
        '& .yobta-textarea__caption': {}
      },
      '& .yobta-textarea__caption--error-bullet': {
        '@apply invisible ml-1 yobta-text-ink-error': {}
      },
      '&.yobta-textarea--filled, &:focus-within': {
        '& .yobta-textarea__caption': {
          'font-size': '0.64rem',
          'transform': 'translateY(0%)'
        }
      }
    },
    '.yobta-textarea__input': {
      '@apply block box-border appearance-none outline-none w-full px-4': {},
      '-webkit-tap-highlight-color': 'transparent',
      'backgroundColor': 'transparent',
      'borderRadius': 'inherit',
      '&:invalid ~ .yobta-textarea__caption .yobta-textarea__caption--error-bullet':
        {
          '@apply inline visible': {}
        },
      '&::placeholder': {
        color: 'inherit',
        opacity: 0.4
      }
    },
    '.yobta-textarea__caption': {
      '@apply block leading-6 px-4 py-0 select-none truncate': {},
      'transition': 'font 0.32s ease, transform 0.32s ease',
      'transform': 'translateY(0.64em)'
    }
  })
})
