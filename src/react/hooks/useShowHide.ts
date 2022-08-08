import { RefObject, useEffect, useRef } from 'react'

import { useLatestRef } from './useLatestRef/index.js'
import { useEscapeKey } from './useEscapeKey/useEscapeKey.js'
import { subscribe } from '../helpers/index.js'
import { createMachine } from './createMachine/createMachine.js'

export const INVISIBLE = 'invisible'
export const VISIBLE = 'visible'
export const ENTERING = 'entering'
export const EXITING = 'exiting'

const visibleStates = new Set([VISIBLE, ENTERING])

type Config = {
  onClose?: VoidFunction
  onEnter?: VoidFunction
  onLeave?: VoidFunction
  visible: boolean
}

interface ShowHideHook {
  <RefType extends HTMLElement>(config: Config): {
    animationState: boolean
    isOnTop: boolean
    onClose: VoidFunction
    ref: RefObject<RefType>
    state: typeof INVISIBLE | typeof ENTERING | typeof VISIBLE | typeof EXITING
  }
}

export type ShowHideState = ReturnType<ShowHideHook>['state']

const useMachine = createMachine({
  [INVISIBLE]: new Set([ENTERING]),
  [ENTERING]: new Set([VISIBLE]),
  [VISIBLE]: new Set([EXITING]),
  [EXITING]: new Set([INVISIBLE])
})

export const useShowHide: ShowHideHook = ({
  visible,
  onClose,
  onEnter,
  onLeave
}) => {
  let ref = useRef(null)
  let [state, next] = useMachine(INVISIBLE)
  let closeRef = useLatestRef(onClose)
  let enterRef = useLatestRef(onEnter)
  let leaveRef = useLatestRef(onLeave)

  let handleClose = (): void => {
    next(EXITING)
    closeRef.current?.()
  }

  let isOnTop = useEscapeKey(
    handleClose,
    state !== INVISIBLE && typeof onClose === 'function'
  )

  useEffect(() => {
    next(visible ? ENTERING : EXITING)
  }, [visible, state])

  useEffect(
    () =>
      subscribe(ref.current, 'animationend', event => {
        if (event.target === ref.current) {
          switch (state) {
            case ENTERING: {
              next(VISIBLE)
              enterRef.current?.()
              break
            }
            case EXITING: {
              next(INVISIBLE)
              leaveRef.current?.()
              break
            }

            default:
              break
          }
        }
      }),
    [ref.current, state]
  )

  return {
    animationState: visibleStates.has(state),
    isOnTop,
    onClose: handleClose,
    ref,
    state
  }
}
