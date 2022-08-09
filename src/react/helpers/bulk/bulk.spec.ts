import { test, expect, vi } from 'vitest'

import { bulk } from './bulk.js'

test('bulk', () => {
  let func: VoidFunction = vi.fn()
  let func1: VoidFunction = vi.fn()
  let func2: VoidFunction = vi.fn()
  bulk(func, func1, func2)
  expect(func).toBeCalled()
  expect(func1).toBeCalled()
  expect(func2).toBeCalled()
})
