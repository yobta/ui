import { RefObject, useEffect, useState } from 'react'

import { subscribe } from '../../helpers/index.js'

interface DetectAutofillHook {
  (ref: RefObject<HTMLInputElement | HTMLTextAreaElement>): boolean
}

export const isAutofilled = (
  node: Parameters<DetectAutofillHook>[0]['current'],
  matchers: string[]
): boolean => {
  if (!node) return false
  try {
    return matchers.some(matcher => node.matches(matcher))
  } catch (error) {
    return false
  }
}

export const useDetectAutofill: DetectAutofillHook = ref => {
  let [autofilled, setAutofilled] = useState(false)

  useEffect(() => {
    let clear = (): void => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
    let intervalId = setInterval(() => {
      let currentValue = isAutofilled(ref.current, [
        ':-internal-autofill-selected',
        ':-webkit-autofill',
        ':autofill'
      ])
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
      clear()
    })

    return () => {
      clear()
      unsubscribe()
    }
  }, [ref])

  return autofilled
}
