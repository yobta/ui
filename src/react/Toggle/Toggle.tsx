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
    type?: 'tooltip' | 'menu'
  }): JSX.Element
}

function getConsumerType(child: ReactElement): 'tooltip' | 'menu' {
  let name = typeof child.type === 'function' ? child.type.name : {}
  switch (name) {
    case 'value':
      return 'tooltip'
    default:
      return 'tooltip'
  }
}

export const Toggle: ToogleFC = ({ children, type }) => {
  let [producer, consumer] = Children.toArray(children)
  let [producerNode, setProducerNode] = useState<HTMLElement | null>(null)
  let [hasFocus, setHasFocus] = useState(false)
  let [hasCursor, setHasCursor] = useState(false)

  let consumerType = type || getConsumerType(consumer as ReactElement)

  useEffect(() => {
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
      if (consumerType === 'tooltip') {
        producerNode.addEventListener('mouseover', handleMouseOver)
        producerNode.addEventListener('mouseout', handleMouseOut)
        producerNode.addEventListener('focus', handleFocus)
        producerNode.addEventListener('blur', handleBlur)
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
