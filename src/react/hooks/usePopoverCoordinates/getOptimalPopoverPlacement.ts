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
  return suggestPlacement({ producerNode })
}
