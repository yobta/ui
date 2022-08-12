import { useMemo } from 'react'

import { ToastPlacement } from './createToast.js'

interface PalcementStyleHook {
  (placement: ToastPlacement, offset: number):
    | {
        top: number
        left: string
        maxWidth: string
        transform: string
      }
    | {
        top: number
        left: number
        maxWidth: string
      }
    | {
        maxWidth: string
        top: number
        right: number
      }
    | {
        bottom: number
        left: number
        maxWidth: string
      }
    | {
        bottom: number
        maxWidth: string
        right: number
      }
    | {
        bottom: number
        left: string
        maxWidth: string
        transform: string
      }
}

type PalcementStyle = ReturnType<PalcementStyleHook>

export const usePlacementStyle: PalcementStyleHook = (placement, offset) =>
  useMemo((): PalcementStyle => {
    let maxWidth = `calc(100vw - ${offset * 2}px)`
    switch (placement) {
      case 'top':
        return {
          top: 0 + offset,
          left: '50%',
          maxWidth,
          transform: 'translateX(-50%)'
        }
      case 'top-left':
        return {
          top: 0 + offset,
          left: 0 + offset,
          maxWidth
        }
      case 'top-right':
        return {
          maxWidth,
          top: 0 + offset,
          right: 0 + offset
        }
      case 'bottom-left':
        return {
          bottom: 0 + offset,
          left: 0 + offset,
          maxWidth
        }
      case 'bottom-right':
        return {
          bottom: 0 + offset,
          maxWidth,
          right: 0 + offset
        }

      case 'bottom':
      default:
        return {
          bottom: 0 + offset,
          left: '50%',
          maxWidth,
          transform: 'translateX(-50%)'
        }
    }
  }, [placement, offset])
