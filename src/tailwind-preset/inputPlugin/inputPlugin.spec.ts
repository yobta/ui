import { test, expect, vi } from 'vitest'

// @ts-ignore
import inputPlugin from './inputPlugin.cjs'

const prefix = (str: string): string => str

test('inputPlugin', async () => {
  let addBase = vi.fn()

  inputPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith(
    {
      '.yobta-input': {
        '@apply bg-paper-2 cursor-text flex gap-x-2 h-12 items-center relative rounded text-ink px-4 dark:bg-paper-2-dark dark:text-ink-dark':
          {},
        '& > .yobta-input__wrapper': {
          '@apply flex flex-1 items-center min-w-0 overflow-hidden relative self-stretch':
            {},
          'borderRadius': 'inherit'
        },
        '&.yobta-input--disabled': {
          '@apply yobta-disabled': {}
        },
        '& .yobta-entypo': {
          marginLeft: '2px',
          marginRight: '2px',
          flexShrink: 0
        },
        '& .yobta-entypo + .yobta-input__wrapper': {
          marginLeft: '1.5rem'
        },
        '&.yobta-input--fancy': {
          '@apply rounded-b-none': {},
          'backgroundColor': 'transparent',
          '& > .yobta-input__wrapper': {
            '@apply px-0': {}
          },
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
            '@apply transform-gpu': {},
            'opacity': 1,
            'height': '2px',
            'transform': 'scaleX(0)',
            'transition': 'transform 0.48s ease'
          }
        },
        '&.yobta-input--before .yobta-input__wrapper': {
          '@apply rounded-l-none': {}
        },
        '&.yobta-input--after .yobta-input__wrapper': {
          '@apply rounded-r-none': {}
        },
        '&:focus-within::after': {
          transform: 'scaleX(1)'
        },
        '& input': {
          '@apply absolute appearance-none block box-border h-full left-0 m-0 w-full outline-none':
            {},
          'backgroundColor': 'transparent',
          'borderRadius': 'inherit',
          'color': 'inherit',
          'font': 'inherit',
          'padding': 'inherit',
          '-webkit-tap-highlight-color': 'transparent',
          'transition': 'background 999999s ease 0s !important',
          '&::placeholder': {
            color: 'inherit',
            opacity: 0.4
          }
        },
        '& .yobta-input__bullet': {
          '@apply hidden': {}
        },
        '& .yobta-input__caption': {
          '@apply flex items-center gap-x-[0.25rem] left-0 right-0 truncate absolute py-0 pointer-events-none select-none leading-6':
            {},
          'padding': 'inherit',
          'transition': 'font 0.32s ease, transform 0.32s ease'
        },
        '&.yobta-input--filled, &:focus-within': {
          '& .yobta-input__caption': {
            'font-size': '0.64rem',
            'transform': 'translateY(-56%)'
          }
        },
        '& :invalid ~ .yobta-input__caption .yobta-input__bullet': {
          '@apply inline text-ink-error dark:text-ink-error-dark': {}
        },
        '&.yobta-input--error .yobta-input__bullet': {
          '@apply inline text-ink-error dark:text-ink-error-dark': {}
        }
      }
    },
    { variants: ['dark', 'focus-within'] }
  )
})
