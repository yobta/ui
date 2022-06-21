import { expect, describe, it } from 'vitest'
import { renderHook } from '@testing-library/react'

import { usePopoverCoordinates } from './usePopoverCoordinates.js'

describe('usePopoverCoordinates Hook', () => {
  describe('consumerNode = null, producerNode = null', () => {
    it("placement = 'top', preferredPlacement = 'top'", () => {
      let { result } = renderHook(() => {
        usePopoverCoordinates({
          placement: 'top',
          preferredPlacement: 'top',
          consumerNode: null,
          producerNode: null,
          offset: 8
        })
      })
      expect(result).toEqual({ undefined })
    })
    it('placement = undefined, preferredPlacement = undefined', () => {
      let { result } = renderHook(() => {
        usePopoverCoordinates({
          placement: undefined,
          preferredPlacement: undefined,
          consumerNode: null,
          producerNode: null,
          offset: 8
        })
      })
      expect(result).toEqual({ undefined })
    })
  })

})
