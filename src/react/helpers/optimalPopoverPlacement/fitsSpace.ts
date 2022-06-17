import { PopoverPlacementOptions } from './getOptimalPopoverPlacement.js'

interface FitsSpace {
  (args: {
    producerNode: HTMLElement
    consumerNode: HTMLElement
    offset: number
    preferredPlacement: PopoverPlacementOptions
  }): boolean
}

export const fitsSpace: FitsSpace = ({
  consumerNode,
  producerNode,
  preferredPlacement,
  offset
}) => {
  // TODO: проверить что подсказка вмещается куда назначено
  let producerBounds = producerNode.getBoundingClientRect()
  let consumerBounds = consumerNode.getBoundingClientRect()
  let doubleOffset = offset * 2
  switch (preferredPlacement) {
    case 'top':
    case 'top-left':
    case 'top-right': {
      let spaceTop = producerBounds.top - consumerBounds.height - doubleOffset
      return spaceTop > 0
    }

    // todo:
    case 'left':
    case 'left-top':
    case 'left-bottom': {
      let spaceLeft = producerBounds.left - consumerBounds.width - doubleOffset
      return spaceLeft > 0
    }
    case 'right':
    case 'right-top':
    case 'right-bottom': {
      let spaceRight =
        producerBounds.right + consumerBounds.width + doubleOffset
      return spaceRight < window.innerWidth
    }

    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
    default: {
      let spaceBottom =
        producerBounds.bottom + consumerBounds.height + doubleOffset
      return spaceBottom < window.innerHeight
    }
  }
}
