import { test, expect } from 'vitest'

import { bulk } from './bulk.js'

interface Bulk {
  (...args: VoidFunction[]): void
}

test('bulk', () => {
  let func: VoidFunction = (): void => {}
  expect(bulk([func])).toBeCalled()
})
