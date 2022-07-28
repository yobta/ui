import clsx from 'clsx'
import { ReactNode, ComponentProps } from 'react'

interface PlaceholderFC {
  (
    props: ComponentProps<'span'> & {
      children?: ReactNode
      className?: string
      visible?: boolean
    }
  ): JSX.Element
}

export const Placeholder: PlaceholderFC = ({
  children,
  className,
  visible,
  ...rest
}) => {
  if (typeof children === 'undefined' || visible) {
    return <span {...rest} className={clsx('yobta-placeholder', className)} />
  }
  return children as unknown as JSX.Element
}
