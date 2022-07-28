import clsx from 'clsx'
import { ReactNode } from 'react'

interface PlaceholderFC {
  (props: { children?: ReactNode; className?: string }): JSX.Element
}

export const Placeholder: PlaceholderFC = ({ children, className }) => {
  if (typeof children === 'undefined') {
    return <span className={clsx('yobta-placeholder', className)} />
  }
  return children as unknown as JSX.Element
}
