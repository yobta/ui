import { useEffect, useState } from 'react'

interface ObserveChangesHook {
  (args: { producerNode?: HTMLElement | null; disabled?: boolean }): number
}

export const useObserveChanges: ObserveChangesHook = ({
  producerNode,
  disabled
}) => {
  let [state, setState] = useState(0)

  useEffect(() => {
    let update = (): void => {
      setState(lastState => lastState + 1)
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    let resizeObzerver: ResizeObserver | null = window.ResizeObserver
      ? new ResizeObserver(update)
      : null

    if (producerNode && !disabled) {
      resizeObzerver?.observe(producerNode)
      window.addEventListener('scroll', update, { passive: true })
      window.addEventListener('resize', update, { passive: true })
    }
    return () => {
      if (producerNode && !disabled) {
        resizeObzerver?.unobserve(producerNode)
        window.removeEventListener('scroll', update)
        window.removeEventListener('resize', update)
      }
    }
  }, [disabled, producerNode])

  return state
}
