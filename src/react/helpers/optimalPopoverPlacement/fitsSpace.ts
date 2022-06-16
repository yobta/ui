import { PopoverPlacementOptions } from './getOptimalPopoverPlacement.js'

interface FitsSpace {
  (args: {
    producerNode: HTMLElement
    consumerNode: HTMLElement
    offset: number
    preferredPlacement: PopoverPlacementOptions
  }): boolean
}

export const fitsSpace: FitsSpace = () => {
  // TODO: проверить что подсказка вмещается куда назначено
  return false
}
