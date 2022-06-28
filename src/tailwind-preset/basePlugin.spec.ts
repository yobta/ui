import { test, expect, vi } from 'vitest'

import basePlugin from './basePlugin.cjs'

const prefix = (str: string): string => str

test('basePlugin', async () => {
  let addBase = vi.fn()

  basePlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-disabled': {
      '@apply pointer-events-none opacity-50': {}
    }
  })
})
