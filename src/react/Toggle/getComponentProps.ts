import { isValidElement, ReactNode } from 'react'

export const getComponentProps = <C extends ReactNode>(
  child: C
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Record<string, any> => {
  if (isValidElement(child)) {
    return child.props
  }
  return {}
}
