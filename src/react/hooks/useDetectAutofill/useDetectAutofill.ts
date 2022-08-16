import { RefObject, useEffect, useState } from 'react'

import { matchElement, subscribe } from '../../helpers/index.js'

interface DetectAutofillHook {
  (
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>,
    matchers?: string[]
  ): boolean
}

const defaultMatchers = [
  ':autofill',
  ':-internal-autofill-selected',
  ':-webkit-autofill'
]

export const useDetectAutofill: DetectAutofillHook = (
  ref,
  matchers = defaultMatchers
) => {
  let [autofilled, setAutofilled] = useState(false)

  useEffect(() => {
    let clear = (): void => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
    let intervalId = setInterval(() => {
      let matched = matchElement(ref.current, matchers)
      if (matched) {
        setAutofilled(matched)
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
