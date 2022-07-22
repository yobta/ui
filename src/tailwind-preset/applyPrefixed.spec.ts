import { test, expect, vi } from 'vitest'

// @ts-ignore
import applyPrefixed from './applyPrefixed.cjs'

test('applyPrefixed', async () => {
  let prefix = vi.fn((str: string) => str)

  let classes: string[] = ['.pointer-events-none', '.class', '12345']

  applyPrefixed(prefix, classes)

  expect(prefix).toBeCalled()
})
