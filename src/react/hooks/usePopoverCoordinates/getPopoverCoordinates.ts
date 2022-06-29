import { PopoverPlacementOptions } from './getOptimalPopoverPlacement.js'

interface PopoverCoordinates {
  (args: {
    consumerNode: HTMLElement
    producerNode: HTMLElement
    placement: PopoverPlacementOptions
    offset: number
  }): {
    consumerWidth: number
    consumerHeight: number
    x: number
    y: number
    placement: PopoverPlacementOptions
  }
}

export const getPopoverCoordinates: PopoverCoordinates = ({
  consumerNode,
  producerNode,
  placement,
  offset
}) => {
  let { width: consumerWidth, height: consumerHeight } =
    consumerNode.getBoundingClientRect()
  let { x, y, width, height } = producerNode.getBoundingClientRect()
  switch (placement) {
    case 'top-left':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x,
        y: y - offset
      }
    case 'top-right':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width,
        y: y - offset
      }
    case 'bottom':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width / 2,
        y: y + height + offset
      }
    case 'bottom-left':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x,
        y: y + height + offset
      }
    case 'bottom-right':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width,
        y: y + height + offset
      }
    case 'left':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x - offset,
        y: y + height / 2
      }
    case 'left-top':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x - offset,
        y
      }
    case 'left-bottom':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x - offset,
        y: y + height
      }
    case 'right':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width + offset,
        y: y + height / 2
      }
    case 'right-top':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width + offset,
        y
      }
    case 'right-bottom':
      return {
        consumerWidth,
        consumerHeight,
        placement,
        x: x + width + offset,
        y: y + height
      }
    case 'top':
    default:
      return {
        consumerWidth,
        consumerHeight,
        placement: 'top',
        x: x + width / 2,
        y: y - offset
      }
  }
}
