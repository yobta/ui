// import { test, expect, vi } from 'vitest'

import borderPlugin from './borderPlugin.cjs'

const prefix = str => str

test('jest', async () => {
  console.log('borderPlugin: ', borderPlugin)
  let addUtilities = vi.fn()
  let theme = { colors: {} }

  borderPlugin({ addUtilities, prefix, theme })

  expect(addUtilities).toBeCalledWith()
})
