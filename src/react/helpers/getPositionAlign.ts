export type AlignOptions =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'left'
  | 'left-top'
  | 'left-bottom'

interface AutoAlign {
  (producerNode: HTMLElement, consumerNode: HTMLElement): AlignOptions
}

export const getPositionAlign: AutoAlign = (producerNode, consumerNode) => {
  return 'bottom'
}
