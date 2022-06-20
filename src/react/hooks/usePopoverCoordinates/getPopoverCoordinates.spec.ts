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

test('top-left', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'top-left' })
  expect(result).toEqual({
    placement: 'top-left',
    x: 10,
    y: 2
  })
})

test('top-right', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'top-right' })
  expect(result).toEqual({
    placement: 'top-right',
    x: 110,
    y: 2
  })
})

test('bottom', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'bottom' })
  expect(result).toEqual({
    placement: 'bottom',
    x: 60,
    y: 58
  })
})

test('bottom-left', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'bottom-left' })
  expect(result).toEqual({
    placement: 'bottom-left',
    x: 10,
    y: 58
  })
})

test('bottom-right', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'bottom-right' })
  expect(result).toEqual({
    placement: 'bottom-right',
    x: 110,
    y: 58
  })
})

test('left', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'left' })
  expect(result).toEqual({
    placement: 'left',
    x: 2,
    y: 30
  })
})

test('left-top', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'left-top' })
  expect(result).toEqual({
    placement: 'left-top',
    x: 2,
    y: 10
  })
})

test('left-bottom', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'left-bottom' })
  expect(result).toEqual({
    placement: 'left-bottom',
    x: 2,
    y: 50
  })
})

test('right', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'right' })
  expect(result).toEqual({
    placement: 'right',
    x: 118,
    y: 30
  })
})

test('right-top', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'right-top' })
  expect(result).toEqual({
    placement: 'right-top',
    x: 118,
    y: 10
  })
})

test('right-bottom', () => {
  let result = getPopoverCoordinates({ producerNode, offset, placement: 'right-bottom' })
  expect(result).toEqual({
    placement: 'right-bottom',
    x: 118,
    y: 50
  })
})
