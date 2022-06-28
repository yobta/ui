import { it, expect } from 'vitest'

import { whenTimeout } from './whenTimeout.js'

it('awaits for timeout', () => {
  expect(whenTimeout(64)).resolves.toBeUndefined()
})
