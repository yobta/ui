import { RefObject, useEffect } from 'react'

import { batch } from '../../helpers/batch/index.js'
import { subscribe } from '../../helpers/subscribe/index.js'
import { useLatestRef } from '../useLatestRef/useLatestRef.js'

const defaultEventTypes = ['mousedown', 'touchstart']

export const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (_event: E) => void,
  eventTypes: string[] = defaultEventTypes
): void => {
  let callbackRef = useLatestRef(onClickAway)

  useEffect(() => {
    let { current: element } = ref

    let handler = (event: Event): void => {
      if (!element?.contains(event.target as HTMLElement)) {
        callbackRef.current?.(event as E)
      }
    }

    let unsubscribe = eventTypes.map(eventType => {
      let documentUnsubscribe = subscribe(document, eventType, handler)
      let elementUnsubscribe = subscribe(element, eventType, event => {
        event.stopPropagation()
      })
      return () => {
        documentUnsubscribe()
        elementUnsubscribe()
      }
    })

    return () => {
      batch(...unsubscribe)
    }
  }, [eventTypes, ref.current])
}
