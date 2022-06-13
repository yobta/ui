import clsx from 'clsx'
import { ReactNode, RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'

import { AlignOptions } from '../helpers/getPositionAlign.js'
import { usePortalNode } from '../hooks/usePortalNode.js'
import { usePositionAttachment } from '../hooks/usePositionAttachment.js'
import { getTooltipStyle } from './getTooltipStyle.js'

export type TooltipProps = {
  children: ReactNode
  id: string
  align?: AlignOptions
  animate?: boolean
  className?: string
  portalNodeId?: string
  producerRef?: RefObject<HTMLElement>
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

const offset = 8

export const createTooltip: TooltipFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const Tooltip: TooltipFC = ({
    align,
    animate,
    children,
    className,
    id,
    producerRef,
    portalNodeId,
    visible
  }) => {
    let portalNode = usePortalNode(portalNodeId)
    let spotRef = useRef<HTMLDivElement>(null)
    let tooltipRef = useRef<HTMLDivElement>(null)

    let position = usePositionAttachment({
      align,
      producerNode: producerRef?.current,
      consumerNode: tooltipRef.current,
      offset
    })

    let isActive = !!position && visible

    // TODO:
    // plugun
    // color settings

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
          id={id}
          ref={tooltipRef}
          style={getTooltipStyle(position, offset)}
        >
          {children}
        </div>
      </>
    )

    return <>{portalNode ? createPortal(tooltip, portalNode) : tooltip}</>
  }

  Tooltip.defaultProps = defaultProps

  return Tooltip
}
