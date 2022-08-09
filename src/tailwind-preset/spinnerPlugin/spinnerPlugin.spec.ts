import { test, expect, vi } from 'vitest'

// @ts-ignore
import spinnerPlugin from './spinnerPlugin.cjs'

const prefix = (str: string): string => str

test('spinnerPlugin', () => {
  let addBase = vi.fn()

  spinnerPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-spinner': {
      '@apply animate-yobta-spinner block border-2 w-6 h-6 rounded-full': {},
      'borderColor': 'currentColor',
      'borderLeftColor': 'transparent !important',
      'borderRightColor': 'transparent !important'
    }
  })
})
