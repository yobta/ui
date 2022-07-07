import {
  Children,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

import { batch, subscribe } from '../helpers/index.js'
import { useClickAway, useEscapeKey } from '../hooks/index.js'
import { getComponentProps } from './getComponentProps.js'
import { getConsumerType } from './getConsumerType.js'
import { suggestMode } from './suggestMode.js'
import { ToggleContext } from './ToggleContext.js'

interface ToggleHook {
  (props: {
    children: [ReactNode, ReactNode]
    mode?: 'click' | 'rollover' | 'focus'
    activeProducerClassName?: string
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
  mode
}) => {
  let [producer, consumer] = Children.toArray(children)

  let producerRef = useRef<HTMLElement | null>(null)
  let consumerRef = useRef<HTMLElement | null>(null)
  let consumerProps = getComponentProps(consumer)
  let [hasFocus, setHasFocus] = useState<boolean>(false)
  let [hasCursor, setHasCursor] = useState(
    Boolean(consumerProps.visible) || false
  )
  let context = useContext(ToggleContext)
  let [childToggleIsVisible, setChildToggleIsVisible] =
    useState<null | boolean>(null)

  let visible = hasFocus || hasCursor
  let consumerType = getConsumerType(consumer)
  let resultingMode = mode || suggestMode(consumerType)

  useClickAway(consumerRef, event => {
    if (
      visible &&
      resultingMode === 'click' &&
      event.target !== producerRef.current &&
      !childToggleIsVisible
    ) {
      setHasFocus(false)
      setHasCursor(false)
    }
  })

  useEscapeKey(() => {
    if (visible && !childToggleIsVisible) {
      setHasFocus(false)
      setHasCursor(false)
    }
  }, [visible, childToggleIsVisible])

  useEffect(() => {
    let toggle = (): void => {
      setHasFocus(lastState => !lastState)
    }
    let handleFocus = (): void => {
      setHasFocus(true)
    }
    let handleBlur = (): void => {
      setHasFocus(false)
    }
    let handleMouseOver = (): void => {
      setHasCursor(true)
    }
    let handleMouseOut = (): void => {
      setHasCursor(false)
    }

    let unsubscribe: VoidFunction[] = []

    switch (resultingMode) {
      case 'click':
        unsubscribe.push(subscribe(producerRef.current, 'click', toggle))
        break

      case 'rollover':
      default:
        unsubscribe.push(
          subscribe(producerRef.current, 'mouseover', handleMouseOver),
          subscribe(producerRef.current, 'mouseout', handleMouseOut),
          subscribe(producerRef.current, 'focus', handleFocus),
          subscribe(producerRef.current, 'blur', handleBlur)
        )
        break
    }
    return () => {
      batch(...unsubscribe)
    }
  }, [resultingMode, producerRef.current])

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
