import { ForwardedRef, MutableRefObject, Ref, useMemo, useState } from 'react'

interface CombineRefsHook {
  <E>(
    ...refs: (
      | Ref<unknown>
      | ForwardedRef<unknown>
      | MutableRefObject<unknown>
    )[]
  ): Ref<E>
}

export const useCombineRefs: CombineRefsHook = (...refs) => {
  let [, update] = useState({})
  return useMemo(() => {
    return node => {
      refs.forEach(ref => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(node)
          } else {
            Object.assign(ref, { current: node })
            update({})
          }
        }
      })
    }
  }, refs)
}
