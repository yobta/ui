import clsx from 'clsx'
import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'

import { PopoverPlacementOptions } from '../helpers/index.js'
import { usePortalNode } from '../hooks/usePortalNode.js'
import { usePlacementCoordinates, useObserveChanges } from '../hooks/index.js'
import { getTooltipStyle } from './getTooltipStyle.js'

export type TooltipProps = {
  children: ReactNode
  id: string
  animate?: boolean
  className?: string
  placement?: PopoverPlacementOptions
  portalNodeId?: string
  producerNode?: HTMLElement | null
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
  const YobtaTooltip: TooltipFC = ({
    placement,
    animate,
    children,
    className,
    id,
    producerNode,
    portalNodeId,
    visible
  }) => {
    let portalNode = usePortalNode(portalNodeId)
    let spotRef = useRef<HTMLDivElement>(null)
    let tooltipRef = useRef<HTMLDivElement>(null)

    let position = usePlacementCoordinates({
      placement,
      producerNode,
      consumerNode: tooltipRef.current,
      offset
    })

    let isActive = !!position && visible

    useObserveChanges({ producerNode, disabled: !isActive })

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

  YobtaTooltip.defaultProps = defaultProps

  return YobtaTooltip
}
