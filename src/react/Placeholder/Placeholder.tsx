import clsx from 'clsx'
import { ReactNode } from 'react'

interface PlaceholderFC {
  (props: {
    children?: ReactNode
    className?: string
    visible?: boolean
  }): JSX.Element
}

export const Placeholder: PlaceholderFC = ({
  children,
  className,
  visible
}) => {
  if (typeof children === 'undefined' || visible) {
    return <span className={clsx('yobta-placeholder', className)} />
  }
  return children as unknown as JSX.Element
}
