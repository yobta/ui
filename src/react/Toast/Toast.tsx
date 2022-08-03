import clsx from 'clsx'
import { ComponentProps } from 'react'

import { useCountdown } from '../hooks/useCountDown.js'
import { INVISIBLE, ShowHideState, useShowHide } from '../hooks/useShowHide.js'
import { ToastContextProvider } from './toastContext.js'

type BaseProps = ComponentProps<'div'>

interface ToastFC {
  (
    props: Omit<BaseProps, 'className'> & {
      className?: string | ((state: ShowHideState) => string)
      delayInSeconds?: number
      onClose?: VoidFunction
      placement?:
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
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
  delayInSeconds = 0,
  onClose,
  visible,
  ...rest
}) => {
  let autoHide = delayInSeconds > 0

  let { animationState, state, handleClose, ref } = useShowHide<HTMLDivElement>(
    {
      visible,
      onClose
    }
  )
  console.log('state: ', state)

  let countdown = useCountdown({
    callback: handleClose,
    delayInSeconds,
    disabled: !autoHide || !visible
  })

  return (
    <ToastContextProvider
      value={{
        autoHide,
        countdown,
        handleClose,
        state
      }}
    >
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
        {children}
        {state}
      </div>
    </ToastContextProvider>
  )
}
