import { RefObject, useEffect } from 'react'

import { PopoverCoordinates } from '../hooks/index.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'

interface GetStyle {
  (position: {
    x: number
    y: number
    width: number
    height: number
    placement: PopoverPlacementOptions
  }): { top: number; left: number }
}

const getStyle: GetStyle = ({ x, y, width, height, placement }) => {
  switch (placement) {
    case 'top':
      return {
        top: y - height,
        left: x - width / 2
      }
    case 'top-left':
      return {
        top: y - height,
        left: x
      }
    case 'top-right':
      return {
        top: y - height,
        left: x - width
      }
    case 'right':
      return {
        top: y - height / 2,
        left: x
      }
    case 'right-top':
      return {
        top: y,
        left: x
      }
    case 'right-bottom':
      return {
        top: y - height,
        left: x
      }
    case 'left':
      return {
        top: y - height / 2,
        left: x - width
      }
    case 'left-top':
      return {
        top: y,
        left: x - width
      }
    case 'left-bottom':
      return {
        top: y - height,
        left: x - width
      }
    case 'bottom-left':
      return {
        top: y,
        left: x
      }
    case 'bottom-right':
      return {
        top: y,
        left: x - width
      }
    case 'bottom':
    default:
      return {
        top: y,
        left: x - width / 2
      }
  }
}

interface DropdownStyleHook {
  (props: {
    blockLevel?: boolean
    consumerRef: RefObject<HTMLElement>
    producerRef?: RefObject<HTMLElement>
    position: PopoverCoordinates
  }): void
}

export const useDropdownStyle: DropdownStyleHook = ({
  blockLevel,
  position,
  consumerRef,
  producerRef
}) => {
  useEffect(() => {
    if (position && consumerRef.current) {
      let { x, y, placement } = position
      let { width, height } = consumerRef.current.getBoundingClientRect()
      let { top, left } = getStyle({ x, y, width, height, placement })
      consumerRef.current.style.top = `${top}px`
      consumerRef.current.style.left = `${left}px`

      if (blockLevel && producerRef?.current) {
        let producerRect = producerRef.current.getBoundingClientRect()
        switch (placement) {
          case 'left':
          case 'left-top':
          case 'left-bottom':
          case 'right':
          case 'right-top':
          case 'right-bottom':
            consumerRef.current.style.height = `${producerRect.height}px`
            break

          default:
            consumerRef.current.style.width = `${producerRect.width}px`
            break
        }
      }
    }
  }, [position])
}
