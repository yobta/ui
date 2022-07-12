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
      disabled: boolean
      consumerNode?: HTMLElement | null
      producerNode?: HTMLElement | null
      offset?: number
    },
    ...deps: unknown[]
  ): {
    x: number
    y: number
    placement: PopoverPlacementOptions
  } | null
}

export type PopoverCoordinates = ReturnType<PopoverCoordinatesHook>

export const usePopoverCoordinates: PopoverCoordinatesHook = (
  {
    disabled,
    placement,
    preferredPlacement,
    consumerNode,
    producerNode,
    offset = 0
  },
  ...deps
) => {
  let shouldObserve: boolean =
    !disabled && Boolean(producerNode && consumerNode)
  let updatesCount = useObserveChanges({
    disabled: !shouldObserve,
    producerNode
  })
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
    shouldObserve,
    producerNode,
    consumerNode,
    placement,
    preferredPlacement,
    offset,
    updatesCount,
    ...deps
  ])
}
