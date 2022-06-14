import { useEffect, useState } from 'react'

interface ObserveChangesHook {
  (args: { producerNode?: HTMLElement | null; disabled: boolean }): void
}

export const useObserveChanges: ObserveChangesHook = ({
  producerNode,
  disabled
}): void => {
  let [, setState] = useState({})

  useEffect(() => {
    let isActive = producerNode && !disabled
    let resizeObzerver: ResizeObserver | undefined
    let update = (): void => {
      setState({})
    }

    if (isActive) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (window.ResizeObserver) {
        resizeObzerver = new ResizeObserver(update)
        // @ts-ignore
        resizeObzerver.observe(producerNode)
      }
      window.addEventListener('wheel', update, { passive: true })
      window.addEventListener('resize', update, { passive: true })
    }
    return () => {
      if (resizeObzerver) {
        // @ts-ignore
        resizeObzerver.unobserve(producerNode)
      }
      window.removeEventListener('wheel', update)
      window.removeEventListener('resize', update)
    }
  }, [disabled, producerNode])
}
