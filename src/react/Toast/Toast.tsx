import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Cache } from '../Cache/index.js'
import { useCountdown } from '../hooks/useCountDown.js'
import { usePortalNode } from '../hooks/usePortalNode.js'
import {
  INVISIBLE,
  ShowHideState,
  useShowHide,
  VISIBLE
} from '../hooks/useShowHide.js'
import { useAnimationClassName } from './useAnimationClassName.js'
import { usePlacementStyle } from './usePlacementStyle.js'

type BaseProps = ComponentProps<'div'>

interface ToastFC {
  (
    props: Omit<BaseProps, 'className'> & {
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
      onExit?: VoidFunction
      offset?: number
      placement?:
        | 'top'
        | 'bottom'
        | 'bottom-left'
        | 'bottom-right'
        | 'top-left'
        | 'top-right'
      visible: boolean
    }
  ): JSX.Element
}

export type ToastPlacement = Parameters<ToastFC>[0]['placement']

const contentStates = new Set([INVISIBLE, VISIBLE])

export const Toast: ToastFC = ({
  className,
  children,
  hideAfterSeconds: delayInSeconds = 0,
  noCache,
  onClose,
  onEnter,
  onExit,
  offset = 8,
  placement,
  visible,
  ...rest
}) => {
  let autoHide = delayInSeconds > 0

  let protalNode = usePortalNode()

  let {
    animationState,
    state,
    onClose: callback,
    ref
  } = useShowHide<HTMLDivElement>({
    onClose,
    onEnter,
    onExit,
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
      className={clsx('yobta-toast', state === INVISIBLE && 'hidden')}
      style={placementStyle}
    >
      <div
        {...rest}
        className={clsx(
          'yobta-toast__content',
          typeof className === 'function' ? className(state) : className,
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
