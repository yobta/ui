import {
  useState,
  Children,
  cloneElement,
  ReactElement,
  useEffect
} from 'react'

interface ToogleFC {
  (props: {
    children: [ReactElement, ReactElement]
    type?: 'YobtaTooltip' | 'YobtaDropdown'
  }): JSX.Element
}

function getConsumerType(child: ReactElement): string {
  return typeof child.type === 'function' ? child.type.name : ''
}

export const Toggle: ToogleFC = ({ children, type }) => {
  let [producer, consumer] = Children.toArray(children)
  let [producerNode, setProducerNode] = useState<HTMLElement | null>(null)
  let [hasFocus, setHasFocus] = useState(false)
  let [hasCursor, setHasCursor] = useState(false)

  let consumerType = type || getConsumerType(consumer as ReactElement)

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

    if (producerNode) {
      switch (consumerType) {
        case 'YobtaDropdown':
          producerNode.addEventListener('click', toggle)
          break

        case 'YobtaTooltip':
        default:
          producerNode.addEventListener('mouseover', handleMouseOver)
          producerNode.addEventListener('mouseout', handleMouseOut)
          producerNode.addEventListener('focus', handleFocus)
          producerNode.addEventListener('blur', handleBlur)
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
      if (producerNode) {
        producerNode.removeEventListener('click', toggle)
        producerNode.removeEventListener('mouseover', handleMouseOver)
        producerNode.removeEventListener('mouseout', handleMouseOut)
        producerNode.removeEventListener('focus', handleFocus)
        producerNode.removeEventListener('blur', handleBlur)
        document.removeEventListener('wheel', forceHide)
        window.removeEventListener('resize', forceHide)
      }
      forceHide()
    }
  }, [consumerType, producerNode])

  return (
    <>
      {cloneElement(producer as ReactElement, {
        ref(node: HTMLElement) {
          setProducerNode(node)
        }
      })}
      {cloneElement(consumer as ReactElement, {
        producerNode,
        visible: hasFocus || hasCursor
      })}
    </>
  )
}
