import { test, expect, vi } from 'vitest'

// @ts-ignore
import switchPlugin from './switchPlugin.cjs'

const prefix = (str: string): string => str

test('switchPlugin', async () => {
  let addBase = vi.fn()

  switchPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-switch': {
      '@apply appearance-none relative transition duration-300 rounded-full cursor-pointer yobta-bg-paper-3':
        {},
      'height': '1.5rem',
      'width': '2.25rem',
      '&::before': {
        '@apply bg-paper shadow absolute block transition-transform duration-300':
          {},
        'content': '""',
        'height': 'calc(1.5rem - 2px)',
        'width': 'calc(1.5rem - 2px)',
        'top': 1,
        'left': 1,
        'borderRadius': 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1
        }
      }
    },
    '.yobta-switch-small': {
      '@apply yobta-switch': {},
      'height': '1rem',
      'width': '1.75rem',
      '&::before': {
        '@apply yobta-bg-paper shadow absolute block transition-transform duration-300':
          {},
        'content': '""',
        'height': 'calc(1rem - 2px)',
        'width': 'calc(1rem - 2px)',
        'top': 1,
        'left': 1,
        'borderRadius': 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1
        }
      }
    },
    '.yobta-switch-big': {
      '@apply yobta-switch': {},
      'height': '2rem',
      'width': '3rem',
      '&::before': {
        '@apply yobta-bg-paper shadow absolute block transition-transform duration-300':
          {},
        'content': '""',
        'height': 'calc(2rem - 2px)',
        'width': 'calc(2rem - 2px)',
        'top': 1,
        'left': 1,
        'borderRadius': 'inherit'
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(1rem)',
          right: 1
        }
      }
    }
  })
})
