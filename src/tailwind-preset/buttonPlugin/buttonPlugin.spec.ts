import { test, expect, vi } from 'vitest'

// @ts-ignore
import buttonPlugin from './buttonPlugin.cjs'

const prefix = (str: string): string => str

test('buttonPlugin', () => {
  let addComponents = vi.fn()

  buttonPlugin.handler({ addComponents, prefix })
  expect(addComponents).toBeCalledWith({
    '.yobta-button': {
      '@apply border-current flex font-medium gap-x-2 h-10 items-center justify-center leading-6 px-4 relative rounded text-sm':
        {},
      'color': 'inherit',
      'transition': 'filter',
      '&:before': {
        '@apply absolute top-0 left-0 right-0 bottom-0 opacity-0 transition duration-150':
          {},
        'content': '""',
        'backgroundColor': 'currentColor',
        'borderRadius': 'inherit'
      },
      '&:hover::before': {
        opacity: 0.08
      },
      '&:active::before': {
        opacity: 0.16
      },
      '&:disabled': {
        '@apply yobta-disabled': {}
      }
    },
    '.yobta-button--busy': {
      'pointer-events': 'none',
      '& > :first-child': {
        visibility: 'hidden',
        display: 'inherit',
        gap: 'inherit',
        flexDirection: 'inherit'
      },
      '& > :last-child': {
        '@apply visible absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2':
          {}
      }
    }
  })
})
