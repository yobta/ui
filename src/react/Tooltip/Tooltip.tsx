import clsx from 'clsx'
import { Children, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode.js'

export type TooltipProps = {
  animate?: boolean
  children: ReactNode
  label: ReactNode
  portalNodeId?: string
  visible?: boolean
}

export interface TooltipFC {
  (props: TooltipProps): JSX.Element
  defaultProps: {
    animate: boolean
  }
}

export const Tooltip: TooltipFC = ({
  animate,
  children,
  label,
  portalNodeId,
  visible
}) => {
  console.log('animate: ', animate)
  let portalNode = usePortalNode(portalNodeId)
  let [producerNode, setProducerNode] = useState<ChildNode | null>(null)
  let consumerRef = useRef<HTMLDivElement>(null)

  let [hasFocus, setHasFocus] = useState(false)
  let [hasCursor, setHasCursor] = useState(false)

  let isVisible = visible || hasFocus || hasCursor

  // TODO:
  // position attachment
  // animation
  // plugun
  // color settings

  useEffect(() => {
    let node = consumerRef.current?.previousSibling
    if (node) {
      setProducerNode(node)
    }
    return () => {
      setProducerNode(null)
    }
  }, [children])

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
      producerNode.addEventListener('mouseover', handleMouseOver)
      producerNode.addEventListener('mouseout', handleMouseOut)
      producerNode.addEventListener('focus', handleFocus)
      producerNode.addEventListener('blur', handleBlur)
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
  }, [producerNode])

  let tooltip = (
    <div
      ref={consumerRef}
      className={clsx(
        'bg-paper-dark opacity-90 rounded-full w-2 h-2 relative pointer-events-none',
        'fixed top-3 left-8',
        !isVisible && 'hidden'
      )}
    >
      <div
        className={clsx(
          'bg-paper-dark rounded px-2 py-1 absolute left-1 top-3 text-ink-dark text-center text-sm select-none',
          '-translate-x-1/2'
        )}
      >
        {label}
      </div>
    </div>
  )

  return (
    <>
      {Children.only(children)}
      {producerNode && portalNode ? createPortal(tooltip, portalNode) : tooltip}
    </>
  )
}

Tooltip.defaultProps = {
  animate: true
}