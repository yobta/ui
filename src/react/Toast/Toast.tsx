import clsx from 'clsx'
import { ComponentProps, ReactNode, useMemo } from 'react'

import { useCountdown } from '../hooks/useCountDown.js'
import { INVISIBLE, ShowHideState, useShowHide } from '../hooks/useShowHide.js'
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

export const Toast: ToastFC = ({
  className,
  children,
  hideAfterSeconds: delayInSeconds = 0,
  onClose,
  onEnter,
  onExit,
  offset = 0,
  placement,
  visible,
  style,
  ...rest
}) => {
  let autoHide = delayInSeconds > 0

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

  let content =
    typeof children === 'function'
      ? children({ autoHide, countdown, close: callback, state })
      : children

  return (
    <div
      {...rest}
      className={clsx(
        'yobta-toast',
        typeof className === 'function' ? className(state) : className,
        animationState
          ? 'animate-slide-in-bottom'
          : 'animate-slide-out-bottom pointer-events-none',
        state === INVISIBLE && 'hidden'
      )}
      ref={ref}
      style={{ ...placementStyle, ...style }}
    >
      {content}
    </div>
  )
}
