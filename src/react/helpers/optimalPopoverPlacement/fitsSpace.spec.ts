import { expect, it, vi } from 'vitest'

import { fitsSpace } from './fitsSpace.js'

vi.stubGlobal('innerWidth', 600)
vi.stubGlobal('innerHeight', 400)

/* #region  top */
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
/* #endregion */

/* #region  left */
// TODO
/* #endregion */

/* #region  right */
// TODO
/* #endregion */

/* #region  bottom */
// TODO
/* #endregion */
