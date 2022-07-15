import { test, expect, vi } from 'vitest'

// @ts-ignore
import entypoPlugin from './entypoPlugin.cjs'

const prefix = (str: string): string => str

test('entypoPlugin', async () => {
  let addBase = vi.fn()

  entypoPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-entypo': {
      '@apply fill-current h-5 w-5': {}
    }
  })
})
