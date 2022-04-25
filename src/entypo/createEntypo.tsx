import { ComponentProps, forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

export type EntypoProps = Omit<ComponentProps<'svg'>, 'children'>

// TODO: fix returntype

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createEntypo = (node: ReactNode) =>
  forwardRef<SVGSVGElement, EntypoProps>(({ className, ...rest }, ref) => (
    <svg
      viewBox="0 0 20 20"
      {...rest}
      className={clsx('ui-entypo', className)}
      ref={ref}
    >
      {node}
    </svg>
  ))

export type CreateEntypo = ReturnType<typeof createEntypo>
