import { useEffect, useState } from 'react'

import { subscribe } from '../../helpers/subscribe/index.js'

interface ConnectionStatusHook {
  (): { connected: null | boolean; hasChange: boolean }
}

export const useConnectionStatus: ConnectionStatusHook = () => {
  let [isOnline, setIsOnline] = useState<null | boolean>(null)
  let [changed, setHasChange] = useState<boolean>(false)

  useEffect(() => {
    let setTrue = (): void => {
      setIsOnline(true)
    }
    let setFalse = (): void => {
      setIsOnline(false)
      setHasChange(true)
    }

    if (navigator.onLine) {
      setTrue()
    } else {
      setFalse()
    }
    let unsubscribeOnline = subscribe(window, 'online', setTrue)
    let unsubscribeOffline = subscribe(window, 'offline', setFalse)

    return () => {
      unsubscribeOnline()
      unsubscribeOffline()
    }
  }, [])

  return { connected: isOnline, hasChange: changed }
}
