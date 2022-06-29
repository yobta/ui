import { PopoverCoordinates } from '../hooks/index.js'

interface GetDropdownStyle {
  (position: PopoverCoordinates): {}
}

export const getDropdownStyle: GetDropdownStyle = position => {
  if (!position) {
    return {}
  }
  let { placement: align, x, y, consumerHeight, consumerWidth } = position
  switch (align) {
    case 'top':
      return {
        top: y - consumerHeight,
        left: x - consumerWidth / 2
      }
    case 'top-left':
      return {
        top: y - consumerHeight,
        left: x
      }
    case 'top-right':
      return {
        top: y - consumerHeight,
        left: x - consumerWidth
      }
    case 'right':
      return {
        top: y - consumerHeight / 2,
        left: x
      }
    case 'right-top':
      return {
        top: y,
        left: x
      }
    case 'right-bottom':
      return {
        top: y - consumerHeight,
        left: x
      }
    case 'left':
      return {
        top: y - consumerHeight / 2,
        left: x - consumerWidth
      }
    case 'left-top':
      return {
        top: y,
        left: x - consumerWidth
      }
    case 'left-bottom':
      return {
        top: y - consumerHeight,
        left: x - consumerWidth
      }
    case 'bottom-left':
      return {
        top: y,
        left: x
      }
    case 'bottom-right':
      return {
        top: y,
        left: x - consumerWidth
      }
    case 'bottom':
    default:
      return {
        top: y,
        left: x - consumerWidth / 2
      }
  }
}
