import clsx from 'clsx'
import { ReactNode, useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode.js'
import {
  useDependencyChangeCount,
  usePopoverCoordinates
} from '../hooks/index.js'
import { getPopoverStyle } from '../helpers/getPopoverStyle.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'

export interface YobtaMenuFC {
  (
    props: (
      | {
          placement: PopoverPlacementOptions
          preferredPlacement?: undefined
        }
      | {
          placement?: undefined
          preferredPlacement: PopoverPlacementOptions
        }
    ) & {
      children: ReactNode
      id: string
      className?: string
      portalNodeId?: string
      producerNode?: HTMLElement | null
      visible: boolean
    }
  ): JSX.Element
  defaultProps: { className?: string }
}

export interface YobtaMenuFactory {
  (defaultProps: { className?: string }): YobtaMenuFC
}

const offset = 0

const getAnimationClassName = (
  placement: PopoverPlacementOptions,
  visible: boolean
): string => {
  switch (placement) {
    case 'top':
    case 'top-left':
    case 'top-right':
      return visible
        ? 'animate-yobta-dropdown-in-top'
        : 'animate-yobta-dropdown-out-top'
    case 'right':
    case 'right-top':
    case 'right-bottom':
      return visible
        ? 'animate-yobta-dropdown-in-right'
        : 'animate-yobta-dropdown-out-right'
    case 'left':
    case 'left-top':
    case 'left-bottom':
      return visible
        ? 'animate-yobta-dropdown-in-left'
        : 'animate-yobta-dropdown-out-left'

    default:
      return visible
        ? 'animate-yobta-dropdown-in-bottom'
        : 'animate-yobta-dropdown-out-bottom'
  }
}

export const createDropdown: YobtaMenuFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const YobtaDropdown: YobtaMenuFC = ({
    placement,
    preferredPlacement,
    children,
    className,
    id,
    producerNode,
    portalNodeId,
    visible
  }) => {
    let [isAnimating, setIsAnimating] = useState(false)
    let portalNode = usePortalNode(portalNodeId)
    let menuRef = useRef<HTMLElement>(null)
    let isTriggered = useDependencyChangeCount(visible) > 0

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates({
      ...placementProps,
      producerNode,
      consumerNode: menuRef.current,
      offset
    })

    useEffect(() => {
      if (isTriggered) {
        setIsAnimating(true)
      }
    }, [visible, isTriggered])

    let isActive = !!position && visible

    let menu = (
      <nav
        className={clsx(
          'yobta-dropdown-menu',
          !isActive && !isAnimating && 'hidden',
          position && getAnimationClassName(position.placement, isActive),
          className
        )}
        id={id}
        onAnimationEnd={() => {
          setIsAnimating(false)
        }}
        ref={menuRef}
        style={getPopoverStyle(position, offset)}
      >
        {children}
      </nav>
    )

    return <>{portalNode ? createPortal(menu, portalNode) : menu}</>
  }

  YobtaDropdown.defaultProps = defaultProps

  return YobtaDropdown
}
