interface Unsubscribe {
  (): void
}

interface Subscribe {
  <T extends Window | Document | HTMLElement | EventTarget>(
    eventTarget: T | null,
    ...args: Parameters<T['addEventListener']>
  ): Unsubscribe
}

export const subscribe: Subscribe = (target, eventType, callBack, ...args) => {
  target?.addEventListener(
    eventType,
    callBack as EventListenerOrEventListenerObject,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(args as any)
  )
  return () => {
    target?.removeEventListener(
      eventType,
      callBack as EventListenerOrEventListenerObject
    )
  }
}
