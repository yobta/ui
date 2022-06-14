import { useEffect, useState } from 'react'

interface ObserveChangesHook {
  (args: { producerNode?: HTMLElement | null; disabled?: boolean }): void
}

export const useObserveChanges: ObserveChangesHook = ({
  producerNode,
  disabled
}) => {
  let [, setState] = useState({})

  useEffect(() => {
    let isActive = producerNode && !disabled
    let resizeObzerver: ResizeObserver | undefined
    let update = (): void => {
      setState({})
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    let resizeObzerver: ResizeObserver | null = window.ResizeObserver
      ? new ResizeObserver(update)
      : null

    if (isActive) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (window.ResizeObserver) {
        resizeObzerver = new ResizeObserver(update)
        // @ts-ignore
        resizeObzerver.observe(producerNode)
      }
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
}
