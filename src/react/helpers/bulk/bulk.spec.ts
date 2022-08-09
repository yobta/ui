import { test, expect } from 'vitest'

import { bulk } from './bulk.js'

test('bulk', () => {
  expect(bulk([(): void => {}])).toBeCalled()
})
