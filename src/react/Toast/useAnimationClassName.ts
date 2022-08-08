import { useMemo } from 'react'

import { ToastPlacement } from './createToast.js'

interface AnimationClassNameHook {
  (animationState: boolean, placement: ToastPlacement): string
}

export const useAnimationClassName: AnimationClassNameHook = (
  animationState,
  placement
) =>
  useMemo(() => {
    switch (placement) {
      case 'top':
      case 'top-left':
      case 'top-right':
        return animationState
          ? 'animate-yobta-toast--in-up'
          : 'animate-yobta-toast--out-up'

      default:
        return animationState
          ? 'animate-yobta-toast--in-down'
          : 'animate-yobta-toast--out-down'
    }
  }, [animationState, placement])
