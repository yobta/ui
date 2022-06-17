import { useMemo } from 'react'

import { useObserveChanges } from '../useObserveChanges.js'
import {
  PopoverPlacementOptions,
  getOptimalPopoverPlacement
} from './getOptimalPopoverPlacement.js'

interface PopoverCoordinatesHook {
  (args: {
    placement?: PopoverPlacementOptions
    preferredPlacement?: PopoverPlacementOptions
    consumerNode?: HTMLElement | null
    producerNode?: HTMLElement | null
    offset?: number
  }): {
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
    let rect = producerNode.getBoundingClientRect()
    let resultingPlacement =
      placement ||
      getOptimalPopoverPlacement({
        producerNode,
        consumerNode,
        offset,
        preferredPlacement
      })

    switch (resultingPlacement) {
      case 'top-left':
        return {
          placement: resultingPlacement,
          x: rect.x,
          y: rect.y - offset
        }
      case 'top-right':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width,
          y: rect.y - offset
        }
      case 'bottom':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height + offset
        }
      case 'bottom-left':
        return {
          placement: resultingPlacement,
          x: rect.x,
          y: rect.y + rect.height + offset
        }
      case 'bottom-right':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width,
          y: rect.y + rect.height + offset
        }
      case 'left':
        return {
          placement: resultingPlacement,
          x: rect.x - offset,
          y: rect.y + rect.height / 2
        }
      case 'left-top':
        return {
          placement: resultingPlacement,
          x: rect.x - offset,
          y: rect.y
        }
      case 'left-bottom':
        return {
          placement: resultingPlacement,
          x: rect.x - offset,
          y: rect.y + rect.height
        }
      case 'right':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width + offset,
          y: rect.y + rect.height / 2
        }
      case 'right-top':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width + offset,
          y: rect.y
        }
      case 'right-bottom':
        return {
          placement: resultingPlacement,
          x: rect.x + rect.width + offset,
          y: rect.y + rect.height
        }
      case 'top':
      default:
        return {
          placement: 'top',
          x: rect.x + rect.width / 2,
          y: rect.y - offset
        }
    }
  }, [
    producerNode,
    consumerNode,
    placement,
    preferredPlacement,
    offset,
    updatesCount
  ])
}
