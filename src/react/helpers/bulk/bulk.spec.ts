import { test, expect } from 'vitest'

import { bulk } from './bulk.js'

test('bulk', () => {
  let func: VoidFunction = (): void => {}
  let args: VoidFunction[] = [func]
  bulk(...args)
  expect(() => {
    bulk(...args)
  }).toBeCalled()
})
