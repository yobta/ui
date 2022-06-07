import clsx from 'clsx'
import { Children, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode.js'
import { usePositionAttachment } from '../hooks/usePositionAttachment.js'

export type TooltipProps = {
  align?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'left'
    | 'left-top'
    | 'left-bottom'
  animate?: boolean
  children: ReactNode
  className?: string
  label: ReactNode
  portalNodeId?: string
  visible?: boolean
}

export type TooltipDefaultProps = Partial<
  Pick<TooltipProps, 'animate' | 'className'>
>

export interface TooltipFC {
  (props: TooltipProps): JSX.Element
  defaultProps: TooltipDefaultProps
}

export interface TooltipFactory {
  (defaultProps: TooltipDefaultProps): TooltipFC
}

export const createTooltip: TooltipFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const Tooltip: TooltipFC = ({
    align,
    animate,
    children,
    className,
    label,
    portalNodeId,
    visible
  }) => {
    let portalNode = usePortalNode(portalNodeId)
    let [producerNode, setProducerNode] = useState<HTMLElement | null>(null)
    let spotRef = useRef<HTMLDivElement>(null)
    let tooltipRef = useRef<HTMLDivElement>(null)

    let [hasFocus, setHasFocus] = useState(false)
    let [hasCursor, setHasCursor] = useState(false)

    let position = usePositionAttachment({
      align,
      producerNode,
      consumerNode: tooltipRef.current,
      offset: 8
    })

    let isActive = !!position && (visible || hasFocus || hasCursor)

    // TODO:
    // position attachment
    // animation
    // plugun
    // color settings

    useEffect(() => {
      let node = spotRef.current?.previousSibling
      if (node) {
        setProducerNode(node as HTMLElement)
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
      <>
        <div
          className={clsx(
            'ui-tooltip__spot',
            isActive && 'ui-tooltip__spot--visible',
            className
          )}
          ref={spotRef}
          style={{
            top: position?.y,
            left: position?.x
          }}
        />
        <div
          className={clsx(
            'ui-tooltip__content',
            isActive && 'ui-tooltip__content--visible',
            animate && 'ui-tooltip--animated',
            className
          )}
          ref={tooltipRef}
          style={{
            top: Number(position?.y) + 8,
            left: position?.x
          }}
        >
          {label}
        </div>
      </>
    )

    return (
      <>
        {Children.only(children)}
        {portalNode ? createPortal(tooltip, portalNode) : tooltip}
      </>
    )
  }

  Tooltip.defaultProps = defaultProps

  return Tooltip
}
