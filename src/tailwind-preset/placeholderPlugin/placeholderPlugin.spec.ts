import { test, expect, vi } from 'vitest'

// @ts-ignore
import placeholderPlugin from './placeholderPlugin.cjs'

const prefix = (str: string): string => str

test('placeholderPlugin', () => {
  let addBase = vi.fn()

  placeholderPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-placeholder': {
      '@apply animate-yobta-placeholder flex items-center pointer-events-none relative select-none w-full':
        {},
      'opacity': 0.08,
      '&::before': {
        '@apply overflow-hidden text-transparent w-0': {},
        'content': '"|"'
      },
      '&::after': {
        '@apply rounded bg-current block flex-1': {},
        'content': '""',
        'height': '0.72em',
        'marginTop': '0.08em'
      }
    }
  })
})
