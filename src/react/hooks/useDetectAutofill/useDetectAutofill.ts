import { RefObject, useEffect, useState } from 'react'

import { subscribe } from '../../helpers/index.js'

interface DetectAutofillHook {
  (ref: RefObject<HTMLInputElement | HTMLTextAreaElement>): boolean
}

export const useDetectAutofill: DetectAutofillHook = ref => {
  let [autofilled, setAutofilled] = useState(false)

  useEffect(() => {
    let clear = (): void => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
    let intervalId = setInterval(() => {
      let currentValue = ref.current?.matches(':-internal-autofill-selected')
      if (currentValue) {
        setAutofilled(currentValue)
        clear()
      }
    }, 64)

    let timeoutId = setTimeout(() => {
      clear()
    }, 2600)

    let unsubscribe = subscribe(ref.current, 'input', () => {
      setAutofilled(false)
    })

    return () => {
      clear()
      unsubscribe()
    }
  }, [ref])

  return autofilled
}
