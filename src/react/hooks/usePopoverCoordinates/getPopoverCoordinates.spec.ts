import { expect, test } from 'vitest'

import { PopoverPlacementOptions } from './getOptimalPopoverPlacement.js'
import { getPopoverCoordinates } from './getPopoverCoordinates.js'

const producerNode = {
  getBoundingClientRect: () => ({
    x: 10,
    y: 10,
    width: 100,
    height: 40
  })
} as HTMLElement

const offset = 8

test('unknown', () => {
  let result = getPopoverCoordinates({
    producerNode,
    offset,
    placement: 'unknown' as PopoverPlacementOptions
  })
  expect(result).toEqual({
    placement: 'top',
    x: 60,
    y: 2
  })
})

test('top', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'top' })
  expect(result).toEqual({
    placement: 'top',
    x: 60,
    y: 2
  })
})

// TODO:
// top-left
// top-right
// bottom
// bottom-left
// bottom-right
// left
// left-top
// left-bottom
// right
// right-top
// right-bottom
