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
import { getPopoverStyle } from '../helpers/getPopoverStyle.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { getAnimationClassName } from './getAnimationClassName.js'

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
  className?: string
  portalNodeId?: string
  producerRef?: RefObject<HTMLElement>
  visible: boolean
}

type NavProps = ComponentProps<'nav'>

export interface YobtaMenuFactory {
  (defaultProps: { className?: string }): ForwardRefExoticComponent<
    PropsWithoutRef<Props & NavProps> & RefAttributes<Props>
  >
}

const offset = 0

export const createDropdown: YobtaMenuFactory = defaultProps => {
  let YobtaDropdown: ForwardRefRenderFunction<NavProps, Props> = (
    {
      placement,
      preferredPlacement,
      children,
      className,
      id,
      producerRef,
      portalNodeId,
      visible
    },
    forwardedRef
  ) => {
    let [isAnimating, setIsAnimating] = useState(false)
    let portalNode = usePortalNode(portalNodeId)
    let menuRef = useRef<HTMLElement>(null)
    let combinedRef = useCombineRefs<HTMLElement>(forwardedRef, menuRef)
    let isTriggered = useDependencyChangeCount(visible) > 0

    let placementProps = placement ? { placement } : { preferredPlacement }

    let position = usePopoverCoordinates({
      ...placementProps,
      producerNode: producerRef?.current,
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
        ref={combinedRef}
        style={getPopoverStyle(position, offset)}
      >
        {children}
      </nav>
    )

    return <>{portalNode ? createPortal(menu, portalNode) : menu}</>
  }

  YobtaDropdown.defaultProps = defaultProps
  YobtaDropdown.displayName = 'YobtaDropdown'

  return forwardRef(YobtaDropdown)
}
