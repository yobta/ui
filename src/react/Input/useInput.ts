import { ForwardedRef, Ref, useEffect, useRef, useState } from 'react'

import { subscribe } from '../helpers/index.js'
import { useCombineRefs } from '../hooks/index.js'
import { useTimeout } from '../hooks/useTimeout/useTimeout.js'
import { YobtaInputProps } from './createInput.js'

interface InputHook {
  (props: {
    defaultValue?: string | number | readonly string[]
    forwardedRef: ForwardedRef<YobtaInputProps>
    placeholder?: string
    value?: string | number | readonly string[]
  }): {
    isFilled: boolean
    combinedRef: Ref<HTMLInputElement>
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
  let combinedRef = useCombineRefs<HTMLInputElement>(forwardedRef, inputRef)
  let [state, setState] = useState<string | undefined>(
    getFirstValueAsString(value, defaultValue)
  )

  let inputNode = inputRef.current

  useTimeout(
    64,
    () => {
      setState(inputRef.current?.value)
    },
    []
  )

  useEffect(() => {
    if (inputNode && state !== inputNode.value) {
      setState(inputNode.value)
    }
  })

  useEffect(() => {
    let handleBlur = (): void => {
      setState(inputNode?.value)
    }

    return subscribe(inputNode, 'blur', handleBlur)
  }, [inputNode])

  let isFilled = !!getFirstValueAsString(state, placeholder, inputNode?.value)

  return { isFilled, combinedRef }
}
