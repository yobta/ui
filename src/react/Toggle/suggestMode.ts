import { ToggleMode } from './useToggle.js'

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
    return 'focus'
  }

  if (consumerNode?.classList.contains('yobta-tooltip')) {
    return 'rollover'
  }

  return 'click'
}
