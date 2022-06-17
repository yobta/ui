import { expect, it, vi } from 'vitest'

import { fitsSpace } from './fitsSpace.js'

vi.stubGlobal('innerWidth', 600)
vi.stubGlobal('innerHeight', 400)

// #region  top
it('fits top when have space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 200
    })
  } as HTMLElement

  let resultTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top',
    offset: 8
  })
  let resultTopLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-left',
    offset: 8
  })
  let resultTopRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-right',
    offset: 8
  })

  expect(resultTop).toBe(true)
  expect(resultTopLeft).toBe(true)
  expect(resultTopRight).toBe(true)
})

it('does not fit top when have no space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      top: 0
    })
  } as HTMLElement

  let resultTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top',
    offset: 8
  })
  let resultTopLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-left',
    offset: 8
  })
  let resultTopRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-right',
    offset: 8
  })

  expect(resultTop).toBe(false)
  expect(resultTopLeft).toBe(false)
  expect(resultTopRight).toBe(false)
})

it('does not fit top when have negative space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      top: -200
    })
  } as HTMLElement

  let resultTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top',
    offset: 8
  })
  let resultTopLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-left',
    offset: 8
  })
  let resultTopRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'top-right',
    offset: 8
  })

  expect(resultTop).toBe(false)
  expect(resultTopLeft).toBe(false)
  expect(resultTopRight).toBe(false)
})
// #endregion

// #region  left
it('fits left when have space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      left: 200
    })
  } as HTMLElement

  let resultLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left',
    offset: 8
  })
  let resultLeftTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-top',
    offset: 8
  })
  let resultLeftBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-bottom',
    offset: 8
  })

  expect(resultLeft).toBe(true)
  expect(resultLeftTop).toBe(true)
  expect(resultLeftBottom).toBe(true)
})

it('does not fit left when have no space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      left: 0
    })
  } as HTMLElement

  let resultLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left',
    offset: 8
  })
  let resultLeftTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-top',
    offset: 8
  })
  let resultLeftBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-bottom',
    offset: 8
  })

  expect(resultLeft).toBe(false)
  expect(resultLeftTop).toBe(false)
  expect(resultLeftBottom).toBe(false)
})

it('does not fit left when have negative space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      left: -200
    })
  } as HTMLElement

  let resultLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left',
    offset: 8
  })
  let resultLeftTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-top',
    offset: 8
  })
  let resultLeftBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'left-bottom',
    offset: 8
  })

  expect(resultLeft).toBe(false)
  expect(resultLeftTop).toBe(false)
  expect(resultLeftBottom).toBe(false)
})
// #endregion left

// #region  right
it('fits right when have space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      right: 200
    })
  } as HTMLElement

  let resultRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right',
    offset: 8
  })
  let resultRightTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-top',
    offset: 8
  })
  let resultRightBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-bottom',
    offset: 8
  })

  expect(resultRight).toBe(true)
  expect(resultRightTop).toBe(true)
  expect(resultRightBottom).toBe(true)
})

it('does not fit right when have no space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 200
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      right: 600
    })
  } as HTMLElement

  let resultRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right',
    offset: 8
  })
  let resultRightTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-top',
    offset: 8
  })
  let resultRightBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-bottom',
    offset: 8
  })

  expect(resultRight).toBe(false)
  expect(resultRightTop).toBe(false)
  expect(resultRightBottom).toBe(false)
})

it('fits right when have negative space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      width: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      right: -200
    })
  } as HTMLElement

  let resultRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right',
    offset: 8
  })
  let resultRightTop = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-top',
    offset: 8
  })
  let resultRightBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'right-bottom',
    offset: 8
  })

  expect(resultRight).toBe(true)
  expect(resultRightTop).toBe(true)
  expect(resultRightBottom).toBe(true)
})
// #endregion right

// #region  bottom
it('fits bottom when have space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      bottom: 200
    })
  } as HTMLElement

  let resultBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom',
    offset: 8
  })
  let resultBottomLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-left',
    offset: 8
  })
  let resultBottomRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-right',
    offset: 8
  })

  expect(resultBottom).toBe(true)
  expect(resultBottomLeft).toBe(true)
  expect(resultBottomRight).toBe(true)
})

it('does not fit bottom when have no space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      bottom: 400
    })
  } as HTMLElement

  let resultBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom',
    offset: 8
  })
  let resultBottomLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-left',
    offset: 8
  })
  let resultBottomRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-right',
    offset: 8
  })

  expect(resultBottom).toBe(false)
  expect(resultBottomLeft).toBe(false)
  expect(resultBottomRight).toBe(false)
})

it('fits bottom when have negative space', () => {
  let consumerNode = {
    getBoundingClientRect: () => ({
      height: 32
    })
  } as HTMLElement
  let producerNode = {
    getBoundingClientRect: () => ({
      bottom: -200
    })
  } as HTMLElement

  let resultBottom = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom',
    offset: 8
  })
  let resultBottomLeft = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-left',
    offset: 8
  })
  let resultBottomRight = fitsSpace({
    consumerNode,
    producerNode,
    preferredPlacement: 'bottom-right',
    offset: 8
  })

  expect(resultBottom).toBe(true)
  expect(resultBottomLeft).toBe(true)
  expect(resultBottomRight).toBe(true)
})
// #endregion bottom
