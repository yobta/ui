import { test, expect, vi } from 'vitest'

// @ts-ignore
import selectedPlugin from './selectedPlugin.cjs'

const prefix = (str: string): string => str

test('selectedPlugin', async () => {
  let addSelected = vi.fn()

  selectedPlugin.handler({ addSelected, prefix })
  expect(addSelected).toBeCalledWith({
    '.yobta-selected': {
      '@apply selected': {}
    },
    'backgroundColor': 'currentColor'
  })
})
