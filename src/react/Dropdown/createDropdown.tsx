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
import { useDropdownStyle } from './useDropdownStyle.js'
import { subscribe } from '../helpers/subscribe/index.js'

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
  visible?: boolean
  className?: string
  offset?: number
  portalNodeId?: string
  producerRef?: RefObject<HTMLElement>
}

type NavProps = ComponentProps<'nav'>

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

const hiddenClassName = 'yobta-dropdown-menu--hidden'

export interface YobtaMenuFactory {
  (defaultProps: { className?: string }): ForwardRefExoticComponent<
    PropsWithoutRef<Props & NavProps> & RefAttributes<HTMLElement>
  >
}
export const createDropdown: YobtaMenuFactory = defaultProps => {
  let Dropdown: ForwardRefRenderFunction<HTMLElement, Props & NavProps> = (
    {
      placement,
      preferredPlacement,
      children,
      className,
      id,
      offset = 0,
      producerRef,
      portalNodeId,
      visible = false,
      ...rest
    },
    forwardedRef
  ) => {
    let [, update] = useState({})
    let [forceHide, setForceHide] = useState(!visible)
    let portalNode = usePortalNode(portalNodeId)
    let menuRef = useRef<HTMLElement>(null)
    let combinedRef = useCombineRefs<HTMLElement>(forwardedRef, menuRef)
    let isTriggered = useDependencyChangeCount(visible) > 0

    let placementProps = placement ? { placement } : { preferredPlacement }

    let hasHiddenClassName: boolean =
      forceHide || Boolean(menuRef.current?.classList.contains(hiddenClassName))

    useEffect(() => {
      if (isTriggered && visible && menuRef.current) {
        menuRef.current.classList.remove(hiddenClassName)
        setForceHide(false)
      }
    }, [visible, isTriggered])

    useEffect(() => {
      let handleAnimationEnd = (event: AnimationEvent): void => {
        if (!visible && menuRef.current && event.target === menuRef.current) {
          menuRef.current.classList.add(hiddenClassName)
          update({})
        }
      }
      let unsubscribe = subscribe(
        menuRef.current,
        'animationend',
        handleAnimationEnd as EventListenerOrEventListenerObject
      )
      return unsubscribe
    }, [visible])

    let position = usePopoverCoordinates(
      {
        ...placementProps,
        producerNode: producerRef?.current,
        consumerNode: menuRef.current,
        offset
      },
      hasHiddenClassName
    )

    useDropdownStyle(position, menuRef)

    let isActive = !!position && visible
    let animationClassName =
      position && getAnimationClassName(position.placement, isActive)

    let menu = (
      <nav
        {...rest}
        className={clsx(
          'yobta-dropdown-menu',
          forceHide && hiddenClassName,
          animationClassName,
          className
        )}
        id={id}
        ref={combinedRef}
      >
        {children}
      </nav>
    )

    return <>{portalNode ? createPortal(menu, portalNode) : menu}</>
  }

  let YobtaDropdown = forwardRef(Dropdown)

  YobtaDropdown.defaultProps = defaultProps
  YobtaDropdown.displayName = 'YobtaDropdown'

  return YobtaDropdown
}
