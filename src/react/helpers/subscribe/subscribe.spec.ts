import { it, expect } from 'vitest'

import { subscribe } from './subscribe.js'

it('call callback with click on button', () => {
  expect(document.querySelector('button')).toBeNull()
  document.body.innerHTML = `<div><button/></div>`
  let target = document.querySelector<HTMLButtonElement>('button')

  let str: string = ''
  let eventType = 'click'
  let callBack = (): void => {
    str += '123'
  }

  subscribe(target, eventType, callBack)
  expect(str).toBe('')

  target?.click()
  expect(str).toBe('123')
})

it('call callback with DOMContentLoaded', () => {
  let str: string = ''
  let eventType = 'DOMContentLoaded'
  let target = document
  let callBack = (): void => {
    str += '123'
  }
  let event = new Event(eventType)

  subscribe(target, eventType, callBack)
  expect(str).toBe('')

  target.dispatchEvent(event)
  expect(str).toBe('123')
})
