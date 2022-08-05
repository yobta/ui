import { useMemo } from 'react'

import { ToastPlacement } from './Toast.js'

interface PalcementStyleHook {
  (placement: ToastPlacement, offset: number):
    | {
        top: number
        left: string
        transform: string
      }
    | {
        top: number
        left: number
      }
    | {
        top: number
        right: number
      }
    | {
        bottom: number
        left: number
      }
    | {
        bottom: number
        right: number
      }
    | {
        bottom: number
        left: string
        transform: string
      }
}

type PalcementStyle = ReturnType<PalcementStyleHook>

export const usePlacementStyle: PalcementStyleHook = (placement, offset) =>
  useMemo((): PalcementStyle => {
    switch (placement) {
      case 'top':
        return {
          top: 0 + offset,
          left: '50%',
          transform: 'translateX(-50%)'
        }
      case 'top-left':
        return {
          top: 0 + offset,
          left: 0 + offset
        }
      case 'top-right':
        return {
          top: 0 + offset,
          right: 0 + offset
        }
      case 'bottom-left':
        return {
          bottom: 0 + offset,
          left: 0 + offset
        }
      case 'bottom-right':
        return {
          bottom: 0 + offset,
          right: 0 + offset
        }

      case 'bottom':
      default:
        return {
          bottom: 0 + offset,
          left: '50%',
          transform: 'translateX(-50%)'
        }
    }
  }, [placement, offset])
