// https://github.com/kripod/react-polymorphic-box

import { ElementType, ComponentProps } from 'react'

type PolymorphicProps<E extends ElementType = ElementType> = {
  element?: E
}

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  PolymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PolymorphicProps>

export type PolymorphicComponent<D extends ElementType, P> = <
  E extends ElementType = D
>(
  props: PolymorphicComponentProps<E, P>
) => JSX.Element
