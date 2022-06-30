import {
  useState,
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useContext,
  isValidElement
} from 'react'
import { useClickAway, useKey } from 'react-use'

import { ToggleContext } from './ToggleContext.js'

interface ToogleFC {
  (props: {
    children: [ReactNode, ReactNode]
    mode?: 'click' | 'mouseover' | 'focus'
    activeProducerClassName?: string
  }): JSX.Element
  displayName: string
}

type ToggleMode = Parameters<ToogleFC>[0]['mode']

function getConsumerType(child: ReactNode): string {
  if (isValidElement(child) && typeof child.type !== 'string') {
    // @ts-ignore
    return child.type.displayName
  }
  return ''
}

// function getConsumerType(child: ReactElement): string {
//   if (typeof child.type === 'function') {
//     return child.type.name
//   } else if (typeof child.type === 'object') {
//     return child.type.displayName
//   }
//   return ''
// }

function suggestMode(consumerType: string): ToggleMode {
  switch (consumerType) {
    case 'YobtaTooltip':
      return 'mouseover'
    case 'YobtaInput':
      return 'focus'
    case 'YobtaDropdown':
    default:
      return 'click'
  }
}

// type Result<T> = {
//   [Key in keyof T]: T[Key]
// }

const getComponentProps = <C extends ReactNode>(
  child: C
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Record<string, any> => {
  if (isValidElement(child)) {
    return child.props
  }
  return {}
}

export const Toggle: ToogleFC = ({
  children,
  mode,
  activeProducerClassName
}) => {
  let producerRef = useRef<HTMLElement | null>(null)
  let consumerRef = useRef<HTMLElement | null>(null)
  let [producer, consumer] = Children.toArray(children)
  // let producerProps = getComponentProps(producer)
  let consumerProps = getComponentProps(consumer)
  let [hasFocus, setHasFocus] = useState<boolean>(
    Boolean(consumerProps.visible) || false
  )
  let [hasCursor, setHasCursor] = useState(false)
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

  useKey(
    'Escape',
    () => {
      if (visible && !childToggleIsVisible) {
        setHasFocus(false)
        setHasCursor(false)
      }
    },
    {},
    [visible, childToggleIsVisible]
  )

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

    if (producerRef.current) {
      switch (resultingMode) {
        case 'click':
          producerRef.current.addEventListener('click', toggle)
          break

        case 'mouseover':
        default:
          producerRef.current.addEventListener('mouseover', handleMouseOver)
          producerRef.current.addEventListener('mouseout', handleMouseOut)
          producerRef.current.addEventListener('focus', handleFocus)
          producerRef.current.addEventListener('blur', handleBlur)
          break
      }
    }
    return () => {
      if (producerRef.current) {
        producerRef.current.removeEventListener('click', toggle)
        producerRef.current.removeEventListener('mouseover', handleMouseOver)
        producerRef.current.removeEventListener('mouseout', handleMouseOut)
        producerRef.current.removeEventListener('focus', handleFocus)
        producerRef.current.removeEventListener('blur', handleBlur)
      }
    }
  }, [consumerType])

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

  return (
    <ToggleContext.Provider value={{ setChildToggleIsVisible }}>
      {cloneElement(producer as ReactElement, {
        ref: producerRef
      })}
      {cloneElement(consumer as ReactElement, {
        ref: consumerRef,
        producerRef,
        visible
      })}
    </ToggleContext.Provider>
  )
}

Toggle.displayName = 'YobtaToggle'
