import { useMemo } from 'react'

import {
  PopoverPlacementOptions,
  getOptimalPopoverPlacement
} from '../helpers/index.js'

export type PositionAttachment = {
  x: number
  y: number
  placement: PopoverPlacementOptions
} | null

interface PositionAttachmentHook {
  (args: {
    placement?: PopoverPlacementOptions
    preferredPlacement?: PopoverPlacementOptions
    consumerNode?: HTMLElement | null
    producerNode?: HTMLElement | null
    offset?: number
  }): PositionAttachment
}

export const usePlacementCoordinates: PositionAttachmentHook = ({
  placement,
  preferredPlacement,
  consumerNode,
  producerNode,
  offset = 0
}) =>
  useMemo(() => {
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
  }, [producerNode, consumerNode, placement, preferredPlacement, offset])
