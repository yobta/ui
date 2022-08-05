import { RefObject, useEffect, useRef } from 'react'

interface LatestRefHook {
  <Ref>(ref: Ref): RefObject<Ref>
}

export const useLatestRef: LatestRefHook = ref => {
  let callbackRef = useRef(ref)
  useEffect(() => {
    callbackRef.current = ref
  })
  return callbackRef
}
