import { DependencyList, useEffect } from 'react'

interface TimeoutHook {
  (ms: number, callback: VoidFunction, dependencies?: DependencyList): void
}

export const useTimeout: TimeoutHook = (ms, callback, dependencies) => {
  useEffect(() => {
    let timeout = setTimeout(callback, ms)
    return () => {
      clearTimeout(timeout)
    }
  }, dependencies)
}
