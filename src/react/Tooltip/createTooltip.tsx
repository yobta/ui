import clsx from 'clsx'
import { ReactNode, RefObject, useRef } from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode.js'
import { usePopoverCoordinates } from '../hooks/index.js'
import { getTooltipStyle } from './getTooltipStyle.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'

export interface TooltipFC {
  (
    props: (
      | {
          placement?: PopoverPlacementOptions
          preferredPlacement?: undefined
        }
      | {
          placement?: undefined
          preferredPlacement?: PopoverPlacementOptions
        }
    ) & {
      children: ReactNode
      id: string
      animate?: boolean
      className?: string
      portalNodeId?: string
      producerRef?: RefObject<HTMLElement | null>
      visible?: boolean
    }
  ): JSX.Element
  defaultProps: { animate?: boolean; className?: string }
}

export interface TooltipFactory {
  (defaultProps: { animate?: boolean; className?: string }): TooltipFC
}

const offset = 8

export const createTooltip: TooltipFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const YobtaTooltip: TooltipFC = ({
    placement,
    preferredPlacement,
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

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates({
      ...placementProps,
      producerNode: producerRef?.current,
      consumerNode: tooltipRef.current,
      offset
    })

    let isActive = !!position && visible

    let tooltip = (
      <>
        <div
          className={clsx(
            'yobta-tooltip__spot',
            isActive && 'yobta-tooltip__spot--visible',
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
            'yobta-tooltip__content',
            isActive && 'yobta-tooltip__content--visible',
            animate && 'yobta-tooltip--animated',
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
