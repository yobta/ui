import { useEffect, useState } from 'react'

interface ConnectionStatusHook {
  (): null | boolean
}

export const useConnectionStatus: ConnectionStatusHook = () => {
  let [isOnline, setIsOnline] = useState<null | boolean>(null)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    let setTrue = (): void => {
      setIsOnline(true)
    }
    let setFalse = (): void => {
      setIsOnline(false)
    }

    window.addEventListener('online', setTrue)
    window.addEventListener('offline', setFalse)

    return () => {
      window.removeEventListener('online', setTrue)
      window.removeEventListener('offline', setFalse)
    }
  }, [])

  return isOnline
}
