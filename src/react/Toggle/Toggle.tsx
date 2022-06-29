import {
  useState,
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef
} from 'react'
import { useClickAway } from 'react-use'

interface ToogleFC {
  (props: {
    children: [ReactElement, ReactElement]
    type?: 'YobtaTooltip' | 'YobtaDropdown'
  }): JSX.Element
}

function getConsumerType(child: ReactElement): string {
  console.log('child.type.name: ', child.type, child.type.render!.name)
  return typeof child.type === 'function' ? child.type.name : ''
}

export const Toggle: ToogleFC = ({ children, type }) => {
  let producerRef = useRef<HTMLElement | null>(null)
  let consumerRef = useRef<HTMLElement | null>(null)
  let [producer, consumer] = Children.toArray(children)
  let [hasFocus, setHasFocus] = useState(false)
  let [hasCursor, setHasCursor] = useState(false)

  let consumerType = type || getConsumerType(consumer as ReactElement)

  useClickAway(consumerRef, () => {
    console.log('consumerType: ', consumerType)
  })

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

    let forceHide = (): void => {
      setHasCursor(false)
      setHasFocus(false)
    }

    if (producerRef.current) {
      switch (consumerType) {
        case 'YobtaDropdown':
          producerRef.current.addEventListener('click', toggle)
          break

        case 'YobtaTooltip':
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
        visible: hasFocus || hasCursor
      })}
    </>
  )
}
