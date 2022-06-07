export type AlignOptions =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'right'
  | 'left'

interface AutoAlign {
  (producerNode: HTMLElement, consumerNode: HTMLElement): AlignOptions
}

export const getPositionAlign: AutoAlign = (producerNode, consumerNode) => {
  return 'bottom'
}
