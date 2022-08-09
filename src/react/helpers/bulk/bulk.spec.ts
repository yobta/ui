import { test, expect } from 'vitest'

import { bulk } from './bulk.js'

test('bulk', () => {
  let func: VoidFunction = (): void => {}
  let func1: VoidFunction = (): void => {}
  let func2: VoidFunction = (): void => {}
  // let args: VoidFunction[] = [func, func1, func2]
  bulk(func, func1, func2)
  expect(func).toBeCalled()
  expect(func1).toBeCalled()
  expect(func2).toBeCalled()
})
