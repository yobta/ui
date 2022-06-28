import { DependencyList, useEffect, useState } from 'react'

interface DependencyChangeCountHook {
  (...dependencies: DependencyList): number
}

export const useDependencyChangeCount: DependencyChangeCountHook = (
  ...dependencies
) => {
  let [state, setState] = useState<number>(0)

  useEffect(
    () => () => {
      setState(lastState => lastState + 1)
    },
    dependencies
  )

  return state
}
