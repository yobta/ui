import { isValidElement, ReactNode } from 'react'

export function getConsumerType(child: ReactNode): string {
  if (isValidElement(child) && typeof child.type !== 'string') {
    // @ts-ignore
    return child.type.displayName
  }
  return ''
}
