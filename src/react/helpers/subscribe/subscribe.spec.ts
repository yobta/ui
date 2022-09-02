import { it, expect, vi } from 'vitest'

import { subscribe } from './subscribe.js'

it('onLine is true', () => {
  let target = window
  let eventType = 'online'
  let callBack = vi.fn()

  subscribe(target, eventType, callBack)
  expect(target.navigator.onLine).toEqual(true)
})

it('document', () => {
  let target = document
  let eventType = 'DOMContentLoaded'
  let callBack = vi.fn()

  subscribe(target, eventType, callBack)
  expect(document)
})
