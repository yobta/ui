import clsx from 'clsx'
import { ReactNode, useRef } from 'react'
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

export const createDropdownMenu: YobtaMenuFactory = defaultProps => {
  // eslint-disable-next-line prefer-let/prefer-let
  const YobtaMenu: YobtaMenuFC = ({
    placement,
    preferredPlacement,
    children,
    className,
    id,
    producerNode,
    portalNodeId,
    visible
  }) => {
    let portalNode = usePortalNode(portalNodeId)
    let menuRef = useRef<HTMLElement>(null)
    let dependencyChangeCount = useDependencyChangeCount(visible)

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates({
      ...placementProps,
      producerNode,
      consumerNode: menuRef.current,
      offset
    })

    let isActive = !!position && visible

    let menu = (
      <nav
        className={clsx(
          'yobta-dropdown-menu',
          !isActive && 'hidden',
          dependencyChangeCount > 0 && 'yobta-menu--animated',
          className
        )}
        id={id}
        ref={menuRef}
        style={getPopoverStyle(position, offset)}
      >
        {children}
      </nav>
    )

    return <>{portalNode ? createPortal(menu, portalNode) : menu}</>
  }

  YobtaMenu.defaultProps = defaultProps

  return YobtaMenu
}
