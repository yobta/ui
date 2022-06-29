import { test, expect, vi } from 'vitest'

// @ts-ignore
import addonPlugin from './addonPlugin.cjs'

const prefix = (str: string): string => str

test('addonPlugin', async () => {
  let addBase = vi.fn()

  addonPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-addon': {
      '@apply mx-4 flex items-center justify-center': {},
      'minHeight': '1.5rem',
      'minWidth': '1.5rem'
    }
  })
})
