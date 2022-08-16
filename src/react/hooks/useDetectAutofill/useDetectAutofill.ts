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
      try {
        let currentValue = ref.current?.matches(
          ':-internal-autofill-selected, :-webkit-autofill, :autofill'
        )
        if (currentValue) {
          setAutofilled(currentValue)
          clear()
        }
      } catch (_error) {
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
