import { forwardRef, ElementType, Ref, ReactNode } from 'react'
import clsx from 'clsx'

import { Spinner } from '../Spinner/index.js'
import {
  PolymorphicComponent,
  PolymorphicComponentProps
} from '../PolymorphicComponent/index.js'

export type ButtonProps = {
  busy?: boolean
  busyIndicator?: ReactNode
  className?: string
}

export type ButtonConfig<E extends ElementType = typeof defaultElement> =
  PolymorphicComponentProps<E, Partial<ButtonProps>>

const defaultElement = 'button'

export const createButton = <C extends ElementType = typeof defaultElement>({
  className: configClassName,
  element: configElement,
  style: configStyle,
  ...config
}: ButtonConfig<C>): PolymorphicComponent<C, ButtonProps> => {
  let Button = forwardRef(
    <E extends ElementType = C>(
      {
        busy,
        busyIndicator = <Spinner />,
        className,
        children,
        element,
        style,
        ...rest
      }: PolymorphicComponentProps<E, ButtonProps>,
      ref: Ref<Element>
    ) => {
      let Tag: ElementType = configElement || element || defaultElement

      return (
        <Tag
          aria-busy={busy}
          {...config}
          {...rest}
          className={clsx(
            'yobta-button',
            busy && 'yobta-button--busy',
            configClassName,
            className
          )}
          ref={ref}
          style={{ ...configStyle, ...style }}
        >
          {busy ? (
            <>
              <span>{children}</span>
              <span>{busyIndicator}</span>
            </>
          ) : (
            children
          )}
        </Tag>
      )
    }
  ) as PolymorphicComponent<C, ButtonProps>

  Button.displayName = 'YobtaButton'

  return Button
}
