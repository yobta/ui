import { RefObject, useEffect, useRef } from 'react'
import { machineYobta, lazyYobta } from '@yobta/stores'
import { useObservable } from '@yobta/stores/react'

import { useLatestRef } from './useLatestRef/index.js'
import { useEscapeKey } from './useEscapeKey/useEscapeKey.js'
import { subscribe } from '../helpers/index.js'

export const INVISIBLE = 'invisible'
export const VISIBLE = 'visible'
export const ENTERING = 'entering'
export const EXITING = 'exiting'

const visibleStates = new Set([VISIBLE, ENTERING])

type Config = {
  onClose?: VoidFunction
  onEnter?: VoidFunction
  onExit?: VoidFunction
  visible: boolean
}

interface ShowHideHook {
  <RefType extends HTMLElement>(config: Config): {
    animationState: boolean
    onClose: VoidFunction
    ref: RefObject<RefType>
    state: typeof INVISIBLE | typeof ENTERING | typeof VISIBLE | typeof EXITING
  }
}

export type ShowHideState = ReturnType<ShowHideHook>['state']

const lazyMachine = machineYobta({
  [INVISIBLE]: new Set([ENTERING]),
  [ENTERING]: new Set([VISIBLE]),
  [VISIBLE]: new Set([EXITING]),
  [EXITING]: new Set([INVISIBLE])
})(INVISIBLE, lazyYobta)

export const useShowHide: ShowHideHook = ({
  visible,
  onClose,
  onEnter,
  onExit
}) => {
  let ref = useRef(null)
  let state = useObservable<ShowHideState>(lazyMachine)
  let closeRef = useLatestRef(onClose)
  let enterRef = useLatestRef(onEnter)
  let exitRef = useLatestRef(onExit)

  let handleClose = (): void => {
    lazyMachine.next(EXITING)
    closeRef.current?.()
  }

  useEscapeKey(handleClose)

  // NOTE: this one should run on every update, no dependencies is on purpose
  // do not add dependecies to this one
  useEffect(() => {
    lazyMachine.next(visible ? ENTERING : EXITING)
  })

  useEffect(
    () =>
      subscribe(ref.current, 'animationend', () => {
        let lastState = lazyMachine.last()
        switch (lastState) {
          case ENTERING: {
            lazyMachine.next(VISIBLE)
            enterRef.current?.()
            break
          }
          case EXITING: {
            lazyMachine.next(INVISIBLE)
            exitRef.current?.()
            break
          }

          default:
            break
        }
      }),
    []
  )

  return {
    animationState: visibleStates.has(state),
    onClose: handleClose,
    ref,
    state
  }
}
