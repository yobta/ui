import clsx from 'clsx'
import {
  ReactNode,
  PropsWithoutRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  RefAttributes,
  RefObject,
  forwardRef,
  ComponentProps
} from 'react'
import { createPortal } from 'react-dom'

import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { useDropdown } from './useDropdown.js'

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
  blockLevel?: boolean
  children: ReactNode
  id: string
  visible?: boolean
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
export const createDropdown: YobtaMenuFactory = defaultProps => {
  let Dropdown: ForwardRefRenderFunction<HTMLElement, Props & NavProps> = (
    {
      blockLevel,
      className,
      children,
      id,
      placement,
      preferredPlacement,
      producerRef,
      portalNodeId,
      offset = 0,
      visible = false,
      ...rest
    },
    forwardedRef
  ) => {
    let { animationClassName, hiddenClassName, combinedRef, portalNode } =
      useDropdown({
        blockLevel,
        forwardedRef,
        offset,
        placement,
        portalNodeId,
        preferredPlacement,
        producerRef,
        visible
      })

    let menu = (
      <nav
        {...rest}
        className={clsx(
          'yobta-dropdown-menu',
          hiddenClassName,
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
