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
    case 'top':
      return {
        align: finalAlign,
        x: rect.x + rect.width / 2,
        y: rect.y - offset
      }
    case 'top-left':
      return {
        align: finalAlign,
        x: rect.x,
        y: rect.y - offset
      }
    case 'top-right':
      return {
        align: finalAlign,
        x: rect.x + rect.width,
        y: rect.y - offset
      }
    case 'bottom':
      return {
        align: finalAlign,
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height + offset
      }
    case 'bottom-left':
      return {
        align: finalAlign,
        x: rect.x,
        y: rect.y + rect.height + offset
      }
    case 'bottom-right':
      return {
        align: finalAlign,
        x: rect.x + rect.width,
        y: rect.y + rect.height + offset
      }
    case 'left':
      return {
        align: finalAlign,
        x: rect.x - offset,
        y: rect.y + rect.height / 2
      }
    case 'right':
      return {
        align: finalAlign,
        x: rect.x + rect.width + offset,
        y: rect.y + rect.height / 2
      }
    default:
      return {
        align: 'top',
        x: rect.x + rect.width / 2,
        y: rect.y - offset
      }
  }
}