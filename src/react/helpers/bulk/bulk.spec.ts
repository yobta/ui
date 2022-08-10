import { test, expect, vi } from 'vitest'

import { bulk } from './bulk.js'

test('calls the arguments sequentially', () => {
  let func = vi.fn()
  let func1 = vi.fn()
  let func2 = vi.fn()
  bulk(func, func1, func2)
  expect(func).toBeCalled()
  expect(func1).toBeCalled()
  expect(func2).toBeCalled()
})
