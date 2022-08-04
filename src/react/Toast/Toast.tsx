import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

import { useCountdown } from '../hooks/useCountDown.js'
import { INVISIBLE, ShowHideState, useShowHide } from '../hooks/useShowHide.js'

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

export const Toast: ToastFC = ({
  className,
  children,
  hideAfterSeconds: delayInSeconds = 0,
  onClose,
  onEnter,
  onExit,
  visible,
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

  let content =
    typeof children === 'function'
      ? children({ autoHide, countdown, close: callback, state })
      : children

  return (
    <div
      {...rest}
      className={clsx(
        typeof className === 'function' ? className(state) : className,
        animationState
          ? 'animate-slide-in-bottom'
          : 'animate-slide-out-bottom pointer-events-none',
        state === INVISIBLE && 'hidden'
      )}
      ref={ref}
    >
      {content}
    </div>
  )
}
