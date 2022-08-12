import { test, expect, vi } from 'vitest'

import { subscribe } from './subscribe.js'

test('subscribe', () => {
  let target = window
  let eventType = 'online'
  let callBack = vi.fn()

  subscribe(target, eventType, callBack)
  expect(target.navigator.onLine).toEqual(true)
})
