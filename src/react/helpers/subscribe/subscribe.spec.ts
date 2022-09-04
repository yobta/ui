import { it, expect, vi } from 'vitest'
// import { render, fireEvent } from '@testing-library/react'

import { subscribe } from './subscribe.js'

it('onLine is true', () => {
  let target = window
  let eventType = 'online'
  let callBack = vi.fn()

  subscribe(target, eventType, callBack)
  expect(target.navigator.onLine).toEqual(true)
})

it('call callback with click on button', () => {
  expect(document.querySelector('#button')).toBeNull()
  document.body.innerHTML = `<div><span id="username" /><button id="button" /></div>`
  let target = document.querySelector<HTMLButtonElement>('#button')

  let str: string = ''
  let eventType = 'click'
  let callBack = (): void => {
    str += '123'
  }
  target?.addEventListener('click', callBack)
  target?.click()

  subscribe(target, eventType, callBack)
  expect(str).toBe('123')

  target?.click()
  expect(str).toBe('123')
})
