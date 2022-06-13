import { PositionAttachment } from '../hooks/usePositionAttachment.js'

interface GetTooltipStyle {
  (position: PositionAttachment, offset: number): {}
}

export const getTooltipStyle: GetTooltipStyle = (position, offset) => {
  if (!position) {
    return {}
  }
  let { align, x, y } = position
  switch (align) {
    case 'top':
      return {
        top: y,
        left: x,
        transform: `translate(-50%, ${offset}px)`
      }
    case 'top-left':
      return {
        top: y,
        left: x,
        transform: `translate(0, ${offset}px)`
      }
    case 'top-right':
      return {
        top: y,
        left: x,
        transform: `translate(-100%, ${offset}px)`
      }
    case 'right':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'right-top':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'right-bottom':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'left':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'left-top':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'left-bottom':
      return {
        top: y,
        left: x,
        transform: `translate(${offset}px, 0)`
      }
    case 'bottom-left':
      return {
        top: y,
        left: x,
        transform: `translate(0, ${offset}px)`
      }
    case 'bottom-right':
      return {
        top: y,
        left: x,
        transform: `translate(-100%, ${offset}px)`
      }
    case 'bottom':
    default:
      return {
        top: y,
        left: x,
        transform: `translate(-50%, ${offset}px)`
      }
  }
  return {}
}
