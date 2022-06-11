import clsx from 'clsx'
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react'

import { Cache } from '../Cache/index.js'
import { useCountdown } from '../hooks/useCountDown.js'
import {
  ShowHideState,
  useShowHide,
  visibleStates
} from '../hooks/useShowHide.js'
import { ToastContextProvider } from './toastContext.js'

type BaseProps = ComponentProps<'div'>

interface ClassNameGetter {
  (state: ShowHideState): string
}

type Props = Omit<BaseProps, 'className'> & {
  className?: string | ClassNameGetter
  delayInSeconds?: number
  onClose?: VoidFunction
  visible: boolean
}

export const Toast: ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    { className, children, delayInSeconds = 0, onClose, visible, ...rest },
    ref
  ) => {
    let autoHide = delayInSeconds > 0

    let { state, handleClick, handleAnimationEnd } = useShowHide({
      initialState: visible,
      onClose
    })

    let countdown = useCountdown({
      callback: handleClick,
      delayInSeconds,
      disabled: !autoHide || !visible
    })

    return (
      <ToastContextProvider
        value={{
          autoHide,
          countdown,
          handleClick,
          state
        }}
      >
        <div
          {...rest}
          className={clsx(
            typeof className === 'function' ? className(state) : className,
            visibleStates.has(state)
              ? 'animate-slide-in-bottom'
              : 'animate-slide-out-bottom pointer-events-none',
            state === 'invisible' && 'hidden'
          )}
          onAnimationEnd={handleAnimationEnd}
          ref={ref}
        >
          <Cache disabled={visible}>{children}</Cache>
        </div>
      </ToastContextProvider>
    )
  }
)
