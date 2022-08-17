import clsx from 'clsx'
import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  ReactNode,
  RefAttributes
} from 'react'
import { createPortal } from 'react-dom'

import { Cache } from '../Cache/index.js'
import { useCountdown } from '../hooks/useCountDown.js'
import { usePortalNode } from '../hooks/usePortalNode.js'
import {
  ENTERING,
  INVISIBLE,
  ShowHideState,
  useShowHide,
  VISIBLE
} from '../hooks/useShowHide/index.js'
import { useAnimationClassName } from './useAnimationClassName.js'
import { usePlacementStyle } from './usePlacementStyle.js'

type ToastProps = {
  className?: string | ((state: ShowHideState) => string)
  hideAfterSeconds?: number
  children:
    | ReactNode
    | ((context: {
        autoHide: boolean
        countdown: number
        close: VoidFunction
        state: ShowHideState
      }) => ReactNode)
  noCache?: boolean
  onClose?: VoidFunction
  onEnter?: VoidFunction
  onLeave?: VoidFunction
  offset?: number
  placement?:
    | 'top'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
  visible?: boolean
}

export type ToastPlacement = ToastProps['placement']

interface ToastFactory {
  (config: Partial<ToastProps>): ForwardRefExoticComponent<
    PropsWithoutRef<ToastProps> & RefAttributes<HTMLDivElement>
  >
}

const contentStates = new Set([INVISIBLE, VISIBLE, ENTERING])

export const createToast: ToastFactory = config => {
  let Toast: ForwardRefRenderFunction<HTMLDivElement, ToastProps> = (
    {
      className,
      children,
      hideAfterSeconds: delayInSeconds = 0,
      noCache,
      onClose,
      onEnter,
      onLeave,
      offset = 8,
      placement,
      visible = false,
      ...rest
    },
    forwardedRef
  ) => {
    let autoHide = delayInSeconds > 0

    let protalNode = usePortalNode()

    let {
      animationState,
      isOnTop,
      state,
      onClose: callback,
      ref
    } = useShowHide<HTMLDivElement>({
      onClose,
      onEnter,
      onLeave,
      visible
    })

    let countdown = useCountdown({
      callback,
      delayInSeconds,
      disabled: !autoHide || !visible
    })

    let placementStyle = usePlacementStyle(placement, offset)

    let content = (
      <div
        className={clsx(
          'yobta-toast',
          state === INVISIBLE && 'hidden',
          isOnTop && 'yobta-toast--top'
        )}
        style={placementStyle}
        ref={forwardedRef}
      >
        <div
          {...rest}
          className={clsx(
            typeof className === 'function' ? className(state) : className,
            'yobta-toast__content',
            !animationState && 'pointer-events-none',
            useAnimationClassName(animationState, placement)
          )}
          ref={ref}
        >
          <Cache disabled={noCache || contentStates.has(state)}>
            {typeof children === 'function'
              ? children({ autoHide, countdown, close: callback, state })
              : children}
          </Cache>
        </div>
      </div>
    )

    return protalNode ? createPortal(content, protalNode) : content
  }

  let ToastWithRef = forwardRef(Toast)

  ToastWithRef.defaultProps = config

  return ToastWithRef
}
