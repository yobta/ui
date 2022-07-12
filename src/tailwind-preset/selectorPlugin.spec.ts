import { test, expect, vi } from 'vitest'

// @ts-ignore
import selectorPlugin from './selectorPlugin.cjs'

const prefix = (str: string): string => str

test('selectorPlugin', async () => {
  let addSelector = vi.fn()

  selectorPlugin.handler({ addSelector, prefix })
  expect(addSelector).toBeCalledWith({
    '.yobta-selector': {
      '@apply selector': {}
    },
    'backgroundColor': 'currentColor'
  })
})
