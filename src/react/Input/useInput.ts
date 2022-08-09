import {
  ForwardedRef,
  Ref,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { bulk, subscribe } from '../helpers/index.js'
import { useCombineRefs, useDetectAutofill } from '../hooks/index.js'

interface InputHook {
  (props: {
    defaultValue?: string | number | readonly string[]
    forwardedRef: ForwardedRef<HTMLInputElement>
    placeholder?: string
    value?: string | number | readonly string[]
  }): {
    isFilled: boolean
    inputRef: Ref<HTMLInputElement>
    labelRef: RefObject<HTMLLabelElement>
  }
}

interface GetFisrtValueAsString {
  (...values: unknown[]): string | undefined
}

const getFirstValueAsString: GetFisrtValueAsString = (...values) => {
  let value = values.find(
    currentValue => currentValue !== undefined && currentValue !== null
  )
  return typeof value === 'undefined' ? undefined : String(value)
}

export const useInput: InputHook = ({
  defaultValue,
  forwardedRef,
  placeholder,
  value
}) => {
  let inputRef = useRef<HTMLInputElement>(null)
  let labelRef = useRef<HTMLLabelElement>(null)
  let combinedRef = useCombineRefs<HTMLInputElement>(forwardedRef, inputRef)
  let [state, setState] = useState<string | undefined>(
    getFirstValueAsString(value, defaultValue)
  )
  let autofilled = useDetectAutofill(inputRef)

  useImperativeHandle(
    forwardedRef,
    () =>
      Object.assign(labelRef.current as unknown as HTMLInputElement, {
        addEventListener: (
          ...args: Parameters<HTMLInputElement['addEventListener']>
        ) => inputRef.current?.addEventListener(...args),
        blur: () => inputRef.current?.blur(),
        focus: () => inputRef.current?.focus(),
        removeEventListener: (
          ...args: Parameters<HTMLInputElement['removeEventListener']>
        ) => inputRef.current?.removeEventListener(...args)
      }),
    []
  )

  useEffect(() => {
    if (inputRef.current && state !== inputRef.current.value) {
      setState(inputRef.current.value)
    }
  })

  useEffect(() => {
    let handleEvent = (event: Event): void => {
      let { value: v } = event.target as HTMLInputElement
      setState(v)
    }
    let unsubscribe = [
      subscribe(inputRef.current, 'blur', handleEvent),
      subscribe(inputRef.current, 'input', handleEvent)
    ]

    return () => {
      bulk(...unsubscribe)
    }
  }, [])

  let isFilled =
    !!getFirstValueAsString(state, placeholder, inputRef.current?.value) ||
    autofilled

  return { isFilled, inputRef: combinedRef, labelRef }
}
