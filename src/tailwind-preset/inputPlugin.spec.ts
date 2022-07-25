import { test, expect, vi } from 'vitest'

// @ts-ignore
import inputPlugin from './inputPlugin.cjs'

const prefix = (str: string): string => str

test('inputPlugin', async () => {
  let addBase = vi.fn()

  inputPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalled()
})
