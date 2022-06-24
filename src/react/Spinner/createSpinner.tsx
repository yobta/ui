import { forwardRef, ElementType, Ref } from 'react'
import clsx from 'clsx'

import {
  PolymorphicComponent,
  PolymorphicComponentProps
} from '../PolymorphicComponent/index.js'

export type SpinnerProps = { children?: never }

export type SpinnerConfig<E extends ElementType = typeof defaultElement> =
  PolymorphicComponentProps<E, Partial<SpinnerProps>>

const defaultElement = 'span'

export const createSpinner = <C extends ElementType = typeof defaultElement>({
  className: configClassName,
  element: configElement,
  style: configStyle,
  ...config
}: SpinnerConfig<C>): PolymorphicComponent<C, SpinnerProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        className,
        role = 'progressbar',
        element,
        style,
        ...rest
      }: PolymorphicComponentProps<E, SpinnerProps>,
      ref: Ref<Element>
    ) => {
      let Tag: ElementType = configElement || element || defaultElement

      return (
        <Tag
          {...config}
          {...rest}
          className={clsx('yobta-spinner', configClassName, className)}
          ref={ref}
          role={role}
          style={{ ...configStyle, ...style }}
        />
      )
    }
  ) as PolymorphicComponent<C, SpinnerProps>
