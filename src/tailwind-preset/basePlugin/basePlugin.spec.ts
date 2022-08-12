import { test, expect, vi } from 'vitest'

// @ts-ignore
import basePlugin from './basePlugin.cjs'

const prefix = (str: string): string => str

test('basePlugin', () => {
  let addBase = vi.fn()

  basePlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-disabled': {
      '@apply pointer-events-none opacity-50': {}
    },
    '.yobta-no-tap': {
      '@apply rgb(0, 0, 0, 0)': {}
    }
  })
})
