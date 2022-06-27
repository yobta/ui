import { useEffect, useState } from 'react'

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
      setIsOnline(true)
    } else {
      setIsOnline(false)
    }
    window.addEventListener('online', setTrue)
    window.addEventListener('offline', setFalse)

    return () => {
      window.removeEventListener('online', setTrue)
      window.removeEventListener('offline', setFalse)
    }
  }, [])

  return { connected: isOnline, hasChange: changed }
}
