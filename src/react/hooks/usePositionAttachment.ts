interface PositionAttachmentHook {
  (args: {
    align:
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom'
      | 'bottom-left'
      | 'bottom-right'
      | 'right'
      | 'left'
    // | 'auto'
    consumerNode: HTMLElement | null
    producerNode: HTMLElement | null
    offset: number
  }): {
    x: number
    y: number
    align:
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom'
      | 'bottom-left'
      | 'bottom-right'
      | 'right'
      | 'left'
  } | null
}

export const usePositionAttachment: PositionAttachmentHook = ({
  align,
  consumerNode,
  producerNode,
  offset
}) => {
  if (!producerNode || !consumerNode) {
    return null
  }
  let rect = producerNode.getBoundingClientRect()
  let finalAlign = align

  switch (finalAlign) {
    case 'bottom':
      return {
        align: finalAlign,
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height + offset
      }
    case 'top':
    default:
      return {
        align: 'top',
        x: rect.x + rect.width / 2,
        y: rect.y - offset
      }
  }
}
