import { test, expect, vi } from 'vitest'

// @ts-ignore
import badgePlugin from './badgePlugin.cjs'

const prefix = (str: string): string => str

test('bagePlugin', () => {
  let addBase = vi.fn()

  badgePlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-badge': {
      '@apply bg-ink-border font-medium gap-x-1 inline-flex leading-6 px-2 rounded-full text-current text-sm':
        {}
    }
  })
})
