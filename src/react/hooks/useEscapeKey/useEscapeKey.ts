import { useEffect } from 'react'
import { stackYobta } from '@yobta/stores'
import { useObservable } from '@yobta/stores/react'

import { bulk, subscribe } from '../../helpers/index.js'
import { useLatestRef } from '../useLatestRef/useLatestRef.js'
import { useNanoId } from '../useNanoId/useNanoId.js'

interface UseEscapeKey {
  (callback: (event: KeyboardEvent) => void, active: boolean): boolean
}

const stack = stackYobta()

export const useEscapeKey: UseEscapeKey = (callback, active) => {
  let callbackRef = useLatestRef(callback)
  let id = useNanoId()
  let lastId = useObservable(stack)
  useEffect(() => {
    if (active) {
      stack.add(id)
    } else {
      stack.remove(id)
    }
  }, [active])
  useEffect(() => {
    let handler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && id === stack.last()) {
        callbackRef.current?.(event)
        event.stopImmediatePropagation()
      }
    }
    let unsubscribe = [
      subscribe(document, 'keydown', handler as EventListener),
      () => {
        stack.remove(id)
      }
    ]
    return () => {
      bulk(...unsubscribe)
    }
  }, [])

  return id === lastId
}
