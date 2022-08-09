import { RefObject, useEffect, useState } from 'react'

import { subscribe } from '../../helpers/index.js'

interface DetectAutofillHook {
  (ref: RefObject<HTMLInputElement | HTMLTextAreaElement>): boolean
}

export const useDetectAutofill: DetectAutofillHook = ref => {
  let [autofilled, setAutofilled] = useState(false)

  useEffect(() => {
    let intervalId = setInterval(() => {
      let currentValue = ref.current?.matches(':-internal-autofill-selected')
      if (currentValue) {
        setAutofilled(currentValue)
      }
    }, 64)

    let timeoutId = setTimeout(() => {
      clearInterval(intervalId)
    }, 2600)

    let unsubscribe = subscribe(ref.current, 'input', () => {
      setAutofilled(false)
    })

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
      unsubscribe()
    }
  }, [ref])

  return autofilled
}
