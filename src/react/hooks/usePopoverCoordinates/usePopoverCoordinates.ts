import { useMemo } from 'react'

import { useObserveChanges } from '../useObserveChanges/index.js'
import {
  PopoverPlacementOptions,
  getOptimalPopoverPlacement
} from './getOptimalPopoverPlacement.js'
import { getPopoverCoordinates } from './getPopoverCoordinates.js'

interface PopoverCoordinatesHook {
  (
    args: (
      | {
          placement?: PopoverPlacementOptions
          preferredPlacement?: undefined
        }
      | {
          placement?: undefined
          preferredPlacement?: PopoverPlacementOptions
        }
    ) & {
      consumerNode?: HTMLElement | null
      producerNode?: HTMLElement | null
      offset?: number
    }
  ): {
    x: number
    y: number
    placement: PopoverPlacementOptions
  } | null
}

export type PopoverCoordinates = ReturnType<PopoverCoordinatesHook>

export const usePopoverCoordinates: PopoverCoordinatesHook = ({
  placement,
  preferredPlacement,
  consumerNode,
  producerNode,
  offset = 0
}) => {
  let disabled = !producerNode || !consumerNode
  let updatesCount = useObserveChanges({ producerNode, disabled })
  return useMemo(() => {
    if (!producerNode || !consumerNode) {
      return null
    }
    let resultingPlacement =
      placement ||
      getOptimalPopoverPlacement({
        producerNode,
        consumerNode,
        offset,
        preferredPlacement
      })

    return getPopoverCoordinates({
      offset,
      placement: resultingPlacement,
      producerNode
    })
  }, [
    producerNode,
    consumerNode,
    placement,
    preferredPlacement,
    offset,
    updatesCount
  ])
}
