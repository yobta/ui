import clsx from 'clsx'
import {
  ReactNode,
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

type PlaceholderProps = {
  children?: ReactNode
  className?: string
  visible?: boolean
}

const PlaceholderWithoutRef: ForwardRefRenderFunction<
  HTMLSpanElement,
  PlaceholderProps & ComponentProps<'span'>
> = ({ children, className, visible, ...rest }, forwarderRef) => {
  if (typeof children === 'undefined' || visible) {
    return (
      <span
        {...rest}
        className={clsx('yobta-placeholder', className)}
        ref={forwarderRef}
      />
    )
  }
  return children as unknown as JSX.Element
}

export const Placeholder = forwardRef(PlaceholderWithoutRef)
