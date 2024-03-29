import { test, expect, vi } from 'vitest'

// @ts-ignore
import linearProgressPlugin from './linearProgressPlugin.cjs'

const prefix = (str: string): string => str

test('linearProgressPlugin', () => {
  let addBase = vi.fn()

  linearProgressPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-linear-progress': {
      '@apply animate-yobta-linear-progress block h-1 relative rounded': {},
      'backgroundSize': '200% 100%',
      'backgroundImage': `linear-gradient(
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
    '.yobta-linear-progress::before': {
      '@apply absolute top-0 left-0 right-0 bottom-0 opacity-20': {},
      'backgroundColor': 'currentColor',
      'borderRadius': 'inherit',
      'content': '""'
    }
  })
})
