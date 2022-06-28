import { test, expect } from 'vitest'

// @ts-ignore
import applyPrefixed from './applyPrefixed.cjs'

const prefix = (str: string): string => str

test('applyPrefixed', async () => {
  let classes: string[]
  classes = ['.pointer-events-none', '.class', '12345']

  expect(applyPrefixed(prefix, ...classes)).toEqual({ '@apply pointer-events-none class 2345': {} })
})
