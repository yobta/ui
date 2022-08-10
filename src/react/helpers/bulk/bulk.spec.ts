import { test, expect, vi } from 'vitest'

import { bulk } from './bulk.js'

test('calls the arguments sequentially', () => {
  let arr: string[] = []
  let func = vi.fn(() => arr.push('func'))
  let func1 = vi.fn(() => arr.push('func1'))
  let func2 = vi.fn(() => arr.push('func2'))
  bulk(func, func1, func2)
  expect(func).toBeCalled()
  expect(func1).toBeCalled()
  expect(func2).toBeCalled()
  expect(arr).toEqual(['func', 'func1', 'func2'])
})
