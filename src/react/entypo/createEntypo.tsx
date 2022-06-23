import {
  ComponentProps,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  forwardRef,
  ReactNode
} from 'react'
import clsx from 'clsx'

export type EntypoProps = Omit<ComponentProps<'svg'>, 'children'>

export const createEntypo = (
  node: ReactNode
): ForwardRefExoticComponent<PropsWithoutRef<EntypoProps>> => {
  let Entypo = forwardRef<SVGSVGElement, EntypoProps>(
    ({ className, ...rest }, ref) => (
      <svg
        viewBox="0 0 20 20"
        {...rest}
        className={clsx('ui-entypo', className)}
        ref={ref}
      >
        {node}
      </svg>
    )
  )
  Entypo.displayName = 'YobtaIcon'
  return Entypo
}

export type CreateEntypo = ReturnType<typeof createEntypo>
