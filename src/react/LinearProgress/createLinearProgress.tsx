import { forwardRef, ElementType, Ref } from 'react'
import clsx from 'clsx'

import {
  PolymorphicComponent,
  PolymorphicComponentProps
} from '../PolymorphicComponent/index.js'

export type LinearProgressProps = { children?: never }

export type LinearProgressConfig<
  E extends ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, Partial<LinearProgressProps>>

const defaultElement = 'div'

export const createLinearProgress = <
  C extends ElementType = typeof defaultElement
>({
  className: configClassName,
  element: configElement,
  style: configStyle,
  ...config
}: LinearProgressConfig<C>): PolymorphicComponent<C, LinearProgressProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        className,
        role = 'progressbar',
        element,
        style,
        ...rest
      }: PolymorphicComponentProps<E, LinearProgressProps>,
      ref: Ref<Element>
    ) => {
      let Tag: ElementType = configElement || element || defaultElement

      return (
        <Tag
          {...config}
          {...rest}
          className={clsx('yobta-linear-progress', configClassName, className)}
          ref={ref}
          role={role}
          style={{ ...configStyle, ...style }}
        />
      )
    }
  ) as PolymorphicComponent<C, LinearProgressProps>
