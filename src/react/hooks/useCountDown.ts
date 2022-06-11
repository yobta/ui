import { useEffect, useState } from 'react'

type CountdownConfig = {
  callback: VoidFunction
  delayInSeconds: number
  disabled?: boolean
}

interface CountdownHook {
  (config: CountdownConfig): number
}

const timeout = 1000

export const useCountdown: CountdownHook = ({
  delayInSeconds,
  callback,
  disabled,
}) => {
  let initialState = delayInSeconds * timeout
  let [state, setState] = useState(initialState)
  useEffect(() => {
    setState(initialState)
  }, [disabled, delayInSeconds])

  useEffect(() => {
    if (disabled) {
      return () => {}
    }
    function update(): void {
      if (document.hasFocus()) {
        setState((last) => {
          return Math.max(last - timeout, 0)
        })
      }
    }
    let interval = setInterval(update, timeout)

    let terminate = (): void => {
      clearInterval(interval)
    }

    if (state === 0) {
      terminate()
      setState(initialState)
      callback()
    }

    return terminate
  }, [delayInSeconds, disabled, callback, state])
  return Math.round(state / 1000)
}
