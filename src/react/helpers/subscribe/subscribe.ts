interface Subscribe {
  (
    window: Window,
    ...args: Parameters<Window['addEventListener']>
  ): VoidFunction
  (
    document: Document,
    ...args: Parameters<Document['addEventListener']>
  ): VoidFunction
  (
    htmlElement: HTMLElement | null,
    ...args: Parameters<HTMLElement['addEventListener']>
  ): VoidFunction
  (
    eventTarget: EventTarget | null,
    ...args: Parameters<EventTarget['addEventListener']>
  ): VoidFunction
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
