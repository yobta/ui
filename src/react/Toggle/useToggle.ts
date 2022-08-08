import {
  Children,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

import { bulk, subscribe } from '../helpers/index.js'
import { useClickAway, useEscapeKey, useLatestRef } from '../hooks/index.js'
import { getComponentProps } from './getComponentProps.js'
import { suggestMode } from './suggestMode.js'
import { ToggleContext } from './ToggleContext.js'

const CLICK = 'click'
const FOCUS = 'focus'
const ROLLOVER = 'rollover'

interface ToggleHook {
  (props: {
    children: [ReactNode, ReactNode]
    activeProducerClassName?: string
    mode?: typeof CLICK | typeof FOCUS | typeof ROLLOVER
    onToggle?: (isOn: boolean) => void
  }): {
    consumer: ReactNode
    consumerId?: string
    consumerRef: RefObject<HTMLElement | null>
    mode: NonNullable<ToggleMode>
    producer: ReactNode
    producerRef: RefObject<HTMLElement | null>
    setChildToggleIsVisible: (isVisible: boolean | null) => void
    visible: boolean
  }
}

export type ToggleProps = Parameters<ToggleHook>[0]
export type ToggleMode = ToggleProps['mode']

export const useToggle: ToggleHook = ({
  activeProducerClassName,
  children,
  mode,
  onToggle
}) => {
  let callbackRef = useLatestRef(onToggle)
  let [producer, consumer] = Children.toArray(children)
  let producerRef = useRef<HTMLElement | null>(null)
  let consumerRef = useRef<HTMLElement | null>(null)
  let consumerProps = getComponentProps(consumer)
  let [hasFocus, setHasFocus] = useState<boolean>(false)
  let [hasCursor, setHasCursor] = useState(
    Boolean(consumerProps.visible) || false
  )
  let [, update] = useState({})
  let context = useContext(ToggleContext)
  let [childToggleIsVisible, setChildToggleIsVisible] =
    useState<null | boolean>(null)

  let visible = hasFocus || hasCursor

  let resultingMode =
    mode || suggestMode(producerRef.current, consumerRef.current)

  useClickAway(consumerRef, event => {
    if (
      visible &&
      resultingMode === CLICK &&
      event.target !== producerRef.current &&
      !childToggleIsVisible
    ) {
      setHasFocus(false)
      setHasCursor(false)
    }
  })

  useLayoutEffect(() => {
    update({})
  }, [])

  useEscapeKey(() => {
    setHasFocus(false)
    setHasCursor(false)
    if (resultingMode === FOCUS) {
      producerRef.current?.blur()
    }
  }, visible && !childToggleIsVisible)

  useEffect(() => {
    let focusLock: boolean = false
    let toggle = (): void => {
      setHasFocus(lastState => !lastState)
    }
    let handleFocus = (): void => {
      setHasFocus(true)
    }
    let handleBlur = (): void => {
      if (!focusLock) {
        setHasFocus(false)
      }
    }
    let handleMouseOver = (): void => {
      setHasCursor(true)
    }
    let handleMouseOut = (): void => {
      setHasCursor(false)
    }

    let lockFocus = (): void => {
      focusLock = true
      let unlockFocus = (): void => {
        unsubscribe()
        focusLock = false
        setHasFocus(false)
      }
      let unsubscribe = subscribe(document, 'mouseup', unlockFocus)
    }

    let unsubscribe: VoidFunction[] = []

    switch (resultingMode) {
      case ROLLOVER:
        unsubscribe.push(
          subscribe(producerRef.current, 'mouseover', handleMouseOver),
          subscribe(producerRef.current, 'mouseout', handleMouseOut),
          subscribe(producerRef.current, 'focus', handleFocus),
          subscribe(producerRef.current, 'blur', handleBlur)
        )
        break
      case FOCUS:
        unsubscribe.push(
          subscribe(producerRef.current, 'focus', handleFocus),
          subscribe(producerRef.current, 'blur', handleBlur),
          subscribe(consumerRef.current, 'mousedown', lockFocus)
        )
        break
      case CLICK:
      default:
        unsubscribe.push(subscribe(producerRef.current, CLICK, toggle))
        break
    }
    return () => {
      bulk(...unsubscribe)
    }
  }, [resultingMode, producerRef.current, consumerRef.current])

  useEffect(() => {
    if (setChildToggleIsVisible !== context.setChildToggleIsVisible) {
      context.setChildToggleIsVisible(visible)
    }
    if (activeProducerClassName && producerRef.current) {
      if (visible) {
        producerRef.current.classList.add(activeProducerClassName)
      } else {
        producerRef.current.classList.remove(activeProducerClassName)
      }
    }
    if (callbackRef.current) {
      callbackRef.current(visible)
    }
  }, [visible])

  return {
    consumer,
    consumerId: consumerProps.id,
    consumerRef,
    mode: resultingMode,
    producer,
    producerRef,
    setChildToggleIsVisible,
    visible
  }
}
