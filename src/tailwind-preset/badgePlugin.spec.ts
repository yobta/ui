import { test, expect, vi } from 'vitest'

// @ts-ignore
import badgePlugin from './badgePlugin.cjs'

const prefix = (str: string): string => str

test('bagePlugin', async () => {
  let addBase = vi.fn()

  badgePlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-badge': {
      '@apply font-medium inline-block leading-6 px-2 rounded-full text-sm': {}
    }
  })
})
