import { expect, it, vi } from 'vitest'

import { suggestPlacement } from './suggestPlacement.js'

vi.stubGlobal('innerWidth', 600)
vi.stubGlobal('innerHeight', 400)

it('suggests top when has more room at top', () => {
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 500,
      bottom: 550,
      left: 0,
      right: 20
    })
  } as HTMLElement

  let result = suggestPlacement({ producerNode })
  expect(result).toBe('top')
})

it('suggests bottom when has more room at bottom', () => {
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 20,
      bottom: 50,
      left: 100,
      right: 400
    })
  } as HTMLElement

  let result = suggestPlacement({ producerNode })
  expect(result).toBe('bottom')
})

it('suggests right when has more room at right', () => {
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 100,
      bottom: 200,
      left: 10,
      right: 40
    })
  } as HTMLElement

  let result = suggestPlacement({ producerNode })
  expect(result).toBe('right')
})

it('suggests left when has more room at left', () => {
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 100,
      bottom: 200,
      left: 400,
      right: 500
    })
  } as HTMLElement

  let result = suggestPlacement({ producerNode })
  expect(result).toBe('left')
})
