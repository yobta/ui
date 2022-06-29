import clsx from 'clsx'
import {
  ReactNode,
  PropsWithoutRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  RefAttributes,
  useRef,
  useState,
  useEffect,
  RefObject,
  forwardRef,
  ComponentProps
} from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode.js'
import {
  useCombineRefs,
  useDependencyChangeCount,
  usePopoverCoordinates
} from '../hooks/index.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { getDropdownStyle } from './getDropdownStyle.js'

type Props = (
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
  visible: boolean
  className?: string
  offset?: number
  portalNodeId?: string
  producerRef?: RefObject<HTMLElement>
}

type NavProps = ComponentProps<'nav'>

export interface YobtaMenuFactory {
  (defaultProps: { className?: string }): ForwardRefExoticComponent<
    PropsWithoutRef<Props & NavProps> & RefAttributes<HTMLElement>
  >
}

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
  let YobtaDropdown: ForwardRefRenderFunction<HTMLElement, Props & NavProps> = (
    {
      placement,
      preferredPlacement,
      children,
      className,
      id,
      offset = 0,
      producerRef,
      portalNodeId,
      visible,
      style
    },
    forwardedRef
  ) => {
    let [, update] = useState({})
    let portalNode = usePortalNode(portalNodeId)
    let menuRef = useRef<HTMLElement>(null)
    let combinedRef = useCombineRefs<HTMLElement>(forwardedRef, menuRef)
    let isTriggered = useDependencyChangeCount(visible) > 0

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates(
      {
        ...placementProps,
        producerNode: producerRef?.current,
        consumerNode: menuRef.current,
        offset
      },
      menuRef.current?.style.display
    )

    useEffect(() => {
      if (isTriggered && visible && menuRef.current) {
        menuRef.current.style.display = 'inherit'
      }
      update({})
    }, [visible, isTriggered])

    let isActive = !!position && visible
    let animationClassName =
      position && getAnimationClassName(position.placement, isActive)

    let menu = (
      <nav
        className={clsx('yobta-dropdown-menu', animationClassName, className)}
        id={id}
        onAnimationEnd={() => {
          update({})
          if (!visible && menuRef.current) {
            menuRef.current.style.display = 'none'
          }
        }}
        ref={combinedRef}
        style={{ ...style, ...getDropdownStyle(position, offset) }}
      >
        {children}
      </nav>
    )

    return <>{portalNode ? createPortal(menu, portalNode) : menu}</>
  }

  let YobtaDropdownWithRef = forwardRef(YobtaDropdown)

  YobtaDropdownWithRef.defaultProps = defaultProps
  YobtaDropdownWithRef.displayName = 'YobtaDropdown'

  return YobtaDropdownWithRef
}
