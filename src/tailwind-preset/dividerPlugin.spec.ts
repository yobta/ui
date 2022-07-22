import { test, expect, vi } from 'vitest'

// @ts-ignore
import dividerPlugin from './dividerPlugin.cjs'

test('dividerPlugin', () => {
  let addBase = vi.fn()

  dividerPlugin.handler({ addBase })
  expect(addBase).toBeCalledWith({
    'hr, .yobta-divider': {
      borderWidth: '1px 0 0 0',
      borderTopColor: 'currentColor',
      opacity: 0.32
    }
  })
})
