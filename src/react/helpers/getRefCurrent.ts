import { ForwardedRef } from 'react'

export function getRefCurrent<E extends Element>(
  ref: ForwardedRef<E>
): E | null {
  if (ref && 'current' in ref) return ref.current
  return null
}
