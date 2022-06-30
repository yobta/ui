import { useEffect, useState } from 'react'

import { batch } from '../../helpers/batch/index.js'
import { subscribe } from '../../helpers/subscribe/index.js'

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

    let shouldObserve = producerNode && !disabled

    let eventTypes = shouldObserve ? ['resize', 'scroll'] : []

    let unsubsribe = eventTypes.map(eventType =>
      subscribe(window, eventType, update, { passive: true })
    )

    if (shouldObserve) {
      resizeObzerver?.observe(producerNode as HTMLElement)
    }

    return () => {
      batch(...unsubsribe)

      if (shouldObserve) {
        resizeObzerver?.unobserve(producerNode as HTMLElement)
      }
    }
  }, [disabled, producerNode])

  return state
}
