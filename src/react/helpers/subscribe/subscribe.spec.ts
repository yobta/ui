import { it, expect, vi } from 'vitest'

import { subscribe } from './subscribe.js'

it('call callback with click on button and unsubscribe from the event', () => {
  expect(document.querySelector('button')).toBeNull()
  document.body.innerHTML = `<div><button/></div>`
  let target = document.querySelector<HTMLButtonElement>('button')

  let eventType = 'click'
  let callBack = vi.fn()

  let unsubscribe = subscribe(target, eventType, callBack)

  target?.click()
  expect(callBack).toBeCalledTimes(1)

  unsubscribe()
  target?.click()
  expect(callBack).toBeCalledTimes(1)
})

it('call callback with DOMContentLoaded', () => {
  let eventType = 'DOMContentLoaded'
  let target = document
  let callBack = vi.fn()
  let event = new Event(eventType)

  subscribe(target, eventType, callBack)

  target.dispatchEvent(event)
  expect(callBack).toBeCalled()
})
