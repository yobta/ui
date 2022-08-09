import { test, expect, vi } from 'vitest'

import { subscribe } from './subscribe.js'

test('subscribe', () => {
  let target = null
  let eventType = 'click'
  let callBack = vi.fn()

  subscribe(target, eventType, callBack, ...args)
})
