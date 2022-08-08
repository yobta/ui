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
import { useCombineRefs } from '../hooks/index.js'

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

  let inputNode = inputRef.current

  useImperativeHandle(forwardedRef, () =>
    Object.assign(labelRef.current as unknown as HTMLInputElement, {
      addEventListener: (
        ...args: Parameters<HTMLInputElement['addEventListener']>
      ) => inputNode?.addEventListener(...args),
      blur: () => inputNode?.blur(),
      removeEventListener: (
        ...args: Parameters<HTMLInputElement['removeEventListener']>
      ) => inputNode?.removeEventListener(...args)
    })
  )

  useEffect(() => {
    if (inputNode && state !== inputNode.value) {
      setState(inputNode.value)
    }
  })

  useEffect(() => {
    let handleInputEvent = (event: Event): void => {
      let { value: v } = event.target as HTMLInputElement
      setState(v)
    }
    let unsubscribe = [
      subscribe(inputNode, 'blur', handleInputEvent),
      subscribe(inputNode, 'input', handleInputEvent)
    ]

    return () => {
      bulk(...unsubscribe)
    }
  }, [inputNode])

  let isFilled = !!getFirstValueAsString(state, placeholder, inputNode?.value)

  return { isFilled, inputRef: combinedRef, labelRef }
}
