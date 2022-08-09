import { test, expect, vi } from 'vitest'

// @ts-ignore
import badgePlugin from './badgePlugin.cjs'

const prefix = (str: string): string => str

test('bagePlugin', () => {
  let addBase = vi.fn()

  badgePlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-badge': {
      '@apply yobta-primary font-medium inline-block leading-6 px-2 rounded-full text-sm':
        {}
    }
  })
})
