import { fitsSpace } from './fitsSpace.js'
import { suggestPlacement } from './suggestPlacement.js'

interface OptimalPopeverPlacement {
  (args: {
    producerNode: HTMLElement
    consumerNode: HTMLElement
    offset: number
    preferredPlacement?: PopoverPlacementOptions
  }):
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'left'
    | 'left-top'
    | 'left-bottom'
}

export type PopoverPlacementOptions = ReturnType<OptimalPopeverPlacement>

// interface Sizes {
//   width: number
//   height: number
// }

// interface Positions {
//   top: number
//   left: number
//   right: number
//   bottom: number
// }

// interface PossiblePositions {
//   top: boolean
//   right: boolean
//   bottom: boolean
//   left: boolean
// }

export const getOptimalPopoverPlacement: OptimalPopeverPlacement = ({
  producerNode,
  consumerNode,
  offset,
  preferredPlacement
}) => {
  if (
    preferredPlacement &&
    fitsSpace({ producerNode, consumerNode, offset, preferredPlacement })
  ) {
    return preferredPlacement
  }
  return suggestPlacement({ producerNode, consumerNode, offset })

  // let positionCalc = (): { possiblePosition: PossiblePositions } => {
  //   let windowWidth: number = document.documentElement.clientWidth
  //   let windowHeigth: number = document.documentElement.clientHeight
  //   let rectProducer: DOMRect = producerNode.getBoundingClientRect()
  //   let rectConsumer: DOMRect = consumerNode.getBoundingClientRect()
  //   let sizesConsumer: Sizes = {
  //     width: rectConsumer.width,
  //     height: rectConsumer.height
  //   }
  //   let positions: Positions = {
  //     top: rectProducer.top,
  //     right: windowWidth - rectProducer.left - rectProducer.width,
  //     bottom: windowHeigth - rectProducer.top - rectProducer.height,
  //     left: rectProducer.left
  //   }
  //   let comparePositions: Positions = {
  //     top: positions.top - sizesConsumer.height - 2 * offset,
  //     right: positions.right - sizesConsumer.width - 2 * offset,
  //     bottom: positions.bottom - sizesConsumer.height - 2 * offset,
  //     left: positions.left - sizesConsumer.width - 2 * offset
  //   }
  //   let possiblePosition: PossiblePositions = {
  //     top: comparePositions.top > 0,
  //     right:
  //       comparePositions.right > 0 && positions.top > 0 && positions.bottom > 0,
  //     bottom: comparePositions.bottom > 0,
  //     left:
  //       comparePositions.left > 0 && positions.top > 0 && positions.bottom > 0
  //   }
  //   return { possiblePosition }
  // }

  // let finalPosition = (): string => {
  //   if (!preferredPlacement) preferredPlacement = 'top'

  //   let position: string = preferredPlacement.split('-')[0]
  //   let positions: [string, boolean][] = Object.entries(
  //     positionCalc().possiblePosition
  //   )

  //   let check: [string, boolean] | undefined = positions.find(
  //     (item: [string, boolean]) => {
  //       if (item[0] === position && item[1]) return true
  //     }
  //   )
  //   if (check) return placement
  //   let find: [string, boolean] | undefined = positions.find(
  //     (item: [string, boolean]) => item[1]
  //   )
  //   if (find[0]) {
  //     return find[0]
  //   } else {
  //     return 'top'
  //   }
  // }

  // switch (finalPosition()) {
  //   case 'top':
  //     return 'top'
  //   case 'left':
  //     return 'left'
  //   case 'right':
  //     return 'right'
  //   case 'bottom':
  //   default:
  //     return 'bottom'
  // }
}