import { RefObject, useEffect, useRef } from 'react'
import { machineYobta, lazyYobta } from '@yobta/stores'
import { useObservable } from '@yobta/stores/react'

import { useLatestRef } from './useLatestRef/index.js'
import { useEscapeKey } from './useEscapeKey/useEscapeKey.js'
import { subscribe } from '../helpers/index.js'

export const INVISIBLE = 'invisible'
export const SHOWING = 'showing'
export const VISIBLE = 'visible'
export const HIDING = 'hiding'

const visibleStates = new Set([VISIBLE, SHOWING])

type Config = {
  visible: boolean
  onClose?: VoidFunction
}

interface ShowHideHook {
  <RefType extends HTMLElement>(config: Config): {
    animationState: boolean
    handleClose: VoidFunction
    ref: RefObject<RefType>
    state: typeof INVISIBLE | typeof SHOWING | typeof VISIBLE | typeof HIDING
  }
}

export type ShowHideState = ReturnType<ShowHideHook>['state']

const lazyMachine = machineYobta({
  [INVISIBLE]: new Set([SHOWING]),
  [SHOWING]: new Set([VISIBLE]),
  [VISIBLE]: new Set([HIDING]),
  [HIDING]: new Set([INVISIBLE])
})(INVISIBLE, lazyYobta)

export const useShowHide: ShowHideHook = ({ visible, onClose }) => {
  let ref = useRef(null)
  let state = useObservable<ShowHideState>(lazyMachine)
  let closeRef = useLatestRef(onClose)

  let handleClose = (): void => {
    lazyMachine.next(HIDING)
    closeRef.current?.()
  }

  useEscapeKey(handleClose, [])
  useEffect(() => {
    lazyMachine.next(visible ? SHOWING : HIDING)
  }, [visible])
  useEffect(
    () =>
      subscribe(ref.current, 'animationend', () => {
        let lastState = lazyMachine.last()
        switch (lastState) {
          case SHOWING: {
            lazyMachine.next(VISIBLE)
            break
          }
          case HIDING: {
            lazyMachine.next(INVISIBLE)
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
    handleClose,
    ref,
    state
  }
}
