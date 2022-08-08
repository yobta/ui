import { CLICK, FOCUS, ROLLOVER, TOAST, ToggleMode } from './useToggle.js'

interface SuggestMode {
  (
    producerNode: HTMLElement | null,
    consumerNode: HTMLElement | null
  ): NonNullable<ToggleMode>
}

export const suggestMode: SuggestMode = (producerNode, consumerNode) => {
  if (
    producerNode?.nodeName === 'INPUT' ||
    producerNode?.classList.contains('yobta-input')
  ) {
    return FOCUS
  }

  if (consumerNode?.classList.contains('yobta-tooltip')) {
    return ROLLOVER
  }
  if (consumerNode?.classList.contains('yobta-toast')) {
    return TOAST
  }

  return CLICK
}
