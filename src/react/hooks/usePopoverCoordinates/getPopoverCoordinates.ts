import { PopoverPlacementOptions } from './getOptimalPopoverPlacement.js'

interface PopoverCoordinates {
  (args: {
    producerNode: HTMLElement
    placement: PopoverPlacementOptions
    offset: number
  }): {
    x: number
    y: number
    placement: PopoverPlacementOptions
  }
}

export const getPopoverCoordinates: PopoverCoordinates = ({
  producerNode,
  placement,
  offset
}) => {
  let { x, y, width, height } = producerNode.getBoundingClientRect()
  switch (placement) {
    case 'top-left':
      return {
        placement,
        x,
        y: y - offset
      }
    case 'top-right':
      return {
        placement,
        x: x + width,
        y: y - offset
      }
    case 'bottom':
      return {
        placement,
        x: x + width / 2,
        y: y + height + offset
      }
    case 'bottom-left':
      return {
        placement,
        x,
        y: y + height + offset
      }
    case 'bottom-right':
      return {
        placement,
        x: x + width,
        y: y + height + offset
      }
    case 'left':
      return {
        placement,
        x: x - offset,
        y: y + height / 2
      }
    case 'left-top':
      return {
        placement,
        x: x - offset,
        y
      }
    case 'left-bottom':
      return {
        placement,
        x: x - offset,
        y: y + height
      }
    case 'right':
      return {
        placement,
        x: x + width + offset,
        y: y + height / 2
      }
    case 'right-top':
      return {
        placement,
        x: x + width + offset,
        y
      }
    case 'right-bottom':
      return {
        placement,
        x: x + width + offset,
        y: y + height
      }
    case 'top':
    default:
      return {
        placement: 'top',
        x: x + width / 2,
        y: y - offset
      }
  }
}
