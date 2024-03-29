import clsx from 'clsx'
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  RefObject,
  useRef
} from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode/index.js'
import { useCombineRefs, usePopoverCoordinates } from '../hooks/index.js'
import { getTooltipStyle } from './getTooltipStyle.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'

type Props = (
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
  dotSize?: number
  offset?: number
  portalNodeId?: string
  producerRef?: RefObject<HTMLElement | null>
  visible?: boolean
}

type NodeProps = ComponentProps<'nav'>

export interface TooltipFactory {
  (defaultProps: {
    animate?: boolean
    className?: string
  }): ForwardRefExoticComponent<
    PropsWithoutRef<Props & NodeProps> & RefAttributes<HTMLElement>
  >
}

export const createTooltip: TooltipFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const Tooltip: ForwardRefRenderFunction<HTMLElement, Props & NodeProps> = (
    {
      placement,
      preferredPlacement,
      animate,
      children,
      className,
      dotSize = 5.33,
      id,
      offset = 5.33,
      producerRef,
      portalNodeId,
      visible
    },
    forwardedRef
  ) => {
    let portalNode = usePortalNode(portalNodeId)
    let spotRef = useRef<HTMLDivElement>(null)
    let tooltipRef = useRef<HTMLDivElement>(null)
    let ref = useCombineRefs<HTMLDivElement>(forwardedRef, tooltipRef)

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates({
      ...placementProps,
      disabled: !visible,
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
            height: dotSize,
            width: dotSize,
            top: position?.y,
            left: position?.x
          }}
        />
        <div
          className={clsx(
            'yobta-tooltip',
            isActive && 'yobta-tooltip--visible',
            animate && 'yobta-tooltip--animated',
            className
          )}
          id={id}
          ref={ref}
          role="tooltip"
          style={getTooltipStyle(position, offset)}
        >
          {children}
        </div>
      </>
    )

    return <>{portalNode ? createPortal(tooltip, portalNode) : tooltip}</>
  }

  let YobtaTooltip = forwardRef(Tooltip)

  YobtaTooltip.defaultProps = defaultProps
  YobtaTooltip.displayName = 'YobtaTooltip'

  return YobtaTooltip
}
