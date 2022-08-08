import { ForwardedRef, MutableRefObject, Ref, useMemo } from 'react'

interface CombineRefsHook {
  <E>(
    ...refs: (
      | Ref<unknown | null>
      | ForwardedRef<unknown | null>
      | MutableRefObject<unknown | null>
    )[]
  ): Ref<E>
}

export const useCombineRefs: CombineRefsHook = (...refs) =>
  useMemo(
    () => current => {
      refs.forEach(ref => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(current)
          } else {
            Object.assign(ref, { current })
          }
        }
      })
    },
    refs
  )
