import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'

export const getAnimationClassName = (
  placement: PopoverPlacementOptions,
  visible: boolean
): string => {
  switch (placement) {
    case 'top':
    case 'top-left':
    case 'top-right':
      return visible
        ? 'animate-yobta-dropdown-in-top'
        : 'animate-yobta-dropdown-out-top'
    case 'right':
    case 'right-top':
    case 'right-bottom':
      return visible
        ? 'animate-yobta-dropdown-in-right'
        : 'animate-yobta-dropdown-out-right'
    case 'left':
    case 'left-top':
    case 'left-bottom':
      return visible
        ? 'animate-yobta-dropdown-in-left'
        : 'animate-yobta-dropdown-out-left'

    default:
      return visible
        ? 'animate-yobta-dropdown-in-bottom'
        : 'animate-yobta-dropdown-out-bottom'
  }
}
