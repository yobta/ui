import { test, expect, vi } from 'vitest'

// @ts-ignore
import dropdownPlugin from './dropdownPlugin.cjs'

const prefix = (str: string): string => str

test('dropdownPlugin', () => {
  let addComponents = vi.fn()
  let addUtilities = vi.fn()

  dropdownPlugin.handler({ addComponents, addUtilities, prefix })

  expect(addComponents).toBeCalledWith({
    '.yobta-dropdown': {
      '@apply yobta-menu yobta-paper-2 fixed rounded transform-gpu shadow-md z-yobta-dropdown':
        {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-dropdown--hidden': {
      '@apply hidden': {}
    }
  })
})
