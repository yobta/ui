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
  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight
  let producerBounds = producerNode.getBoundingClientRect()
  let consumerBounds = consumerNode.getBoundingClientRect()
  let doubleOffset = offset * 2
  switch (preferredPlacement) {
    case 'top':
    case 'top-left':
    case 'top-right': {
      return (
        windowHeight -
          (windowHeight - producerBounds.top) -
          consumerBounds.height -
          doubleOffset >
        0
      )
    }
    case 'left':
    case 'left-top':
    case 'left-bottom': {
      return (
        windowHeight -
          producerBounds.top -
          consumerBounds.height -
          doubleOffset >
        0
      )
    }

    default:
      return false
  }
}
