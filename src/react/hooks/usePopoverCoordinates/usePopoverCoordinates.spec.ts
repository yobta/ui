import { expect, test } from 'vitest'

import { usePopoverCoordinates } from './usePopoverCoordinates.js'

test('consumerNode = null, producerNode = null', () => {
  let result = usePopoverCoordinates({
    placement: 'top',
    preferredPlacement: 'top',
    consumerNode: null,
    producerNode: null,
    offset: 8
  })
  expect(result).toEqual('top')
})
