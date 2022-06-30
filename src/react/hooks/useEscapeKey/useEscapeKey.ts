import { DependencyList, useEffect } from 'react'

import { subscribe } from '../../helpers/index.js'

interface UseEscapeKey {
  (callback: (event: KeyboardEvent) => void, deps?: DependencyList): void
}

export const useEscapeKey: UseEscapeKey = (callback, deps) => {
  useEffect(() => {
    let handler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        callback(event)
      }
    }
    let unsubscribe = subscribe(document, 'keydown', handler as EventListener)

    return unsubscribe
  }, deps)
}
