import { RefObject, useLayoutEffect, useRef } from 'react'

interface LatestRefHook {
  <Ref>(ref: Ref): RefObject<Ref>
}

export const useLatestRef: LatestRefHook = ref => {
  let callbackRef = useRef(ref)
  useLayoutEffect(() => {
    callbackRef.current = ref
  })
  return callbackRef
}
