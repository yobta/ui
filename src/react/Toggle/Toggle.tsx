import {
  useState,
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef
} from 'react'
import { useClickAway, useKey } from 'react-use'

interface ToogleFC {
  (props: {
    children: [ReactElement, ReactElement]
    type?: 'click' | 'mouseover' | 'focus'
  }): JSX.Element
}

type ToggleMode = Parameters<ToogleFC>[0]['type']

function getConsumerType(child: ReactElement): string {
  if (typeof child.type === 'function') {
    return child.type.name
  } else if (typeof child.type === 'object') {
    // @ts-ignore
    return child.type.displayName
  }
  return ''
}

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

export const Toggle: ToogleFC = ({ children, type }) => {
  let producerRef = useRef<HTMLElement | null>(null)
  let consumerRef = useRef<HTMLElement | null>(null)
  let [producer, consumer] = Children.toArray(children)
  let [hasFocus, setHasFocus] = useState(false)
  let [hasCursor, setHasCursor] = useState(false)

  let visible = hasFocus || hasCursor
  let consumerType = getConsumerType(consumer as ReactElement)
  let mode = type || suggestMode(consumerType)

  useClickAway(consumerRef, () => {
    if (visible && mode === 'click') {
      setHasFocus(false)
      setHasCursor(false)
    }
  })

  useKey(
    'Escape',
    () => {
      if (visible) {
        setHasFocus(false)
        setHasCursor(false)
      }
    },
    {},
    [visible]
  )

  useEffect(() => {
    let toggle = (): void => {
      setHasFocus(true)
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

    let forceHide = (): void => {
      setHasCursor(false)
      setHasFocus(false)
    }

    if (producerRef.current) {
      switch (mode) {
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
      document.addEventListener('wheel', forceHide, {
        passive: true
      })
      window.addEventListener('resize', forceHide, {
        passive: true
      })
    }
    return () => {
      if (producerRef.current) {
        producerRef.current.removeEventListener('click', toggle)
        producerRef.current.removeEventListener('mouseover', handleMouseOver)
        producerRef.current.removeEventListener('mouseout', handleMouseOut)
        producerRef.current.removeEventListener('focus', handleFocus)
        producerRef.current.removeEventListener('blur', handleBlur)
        document.removeEventListener('wheel', forceHide)
        window.removeEventListener('resize', forceHide)
      }
      forceHide()
    }
  }, [consumerType])

  return (
    <>
      {cloneElement(producer as ReactElement, {
        ref: producerRef
      })}
      {cloneElement(consumer as ReactElement, {
        ref: consumerRef,
        producerRef,
        visible
      })}
    </>
  )
}
