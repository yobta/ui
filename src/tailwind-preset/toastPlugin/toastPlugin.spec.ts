import { test, expect, vi } from 'vitest'

// @ts-ignore
import toastPlugin from './toastPlugin.cjs'

const prefix = (str: string): string => str

test('toastPlugin', () => {
  let addComponents = vi.fn()

  toastPlugin.handler({ addComponents, prefix })
  expect(addComponents).toBeCalledWith({
    '.yobta-toast': {
      '@apply fixed z-yobta-toast': {}
    },
    '.yobta-toast--top': {
      '@apply z-yobta-toast--top': {}
    },
    '.yobta-toast__content': {
      '@apply yobta-paper-inversed rounded px-4 py-2 flex items-center justify-between gap-x-8 shadow transform-gpu':
        {}
    }
  })
})
