interface PositionAttachmentHook {
  (args: {
    align?:
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
      | 'right-top'
      | 'right-bottom'
      | 'left'
      | 'left-top'
      | 'left-bottom'
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
  let finalAlign = align || 'top'

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
    case 'right-top':
      return {
        align: finalAlign,
        x: rect.x + rect.width + offset / 2,
        y: rect.y - offset / 2
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
    case 'left-top':
      return {
        align: finalAlign,
        x: rect.x - offset,
        y: rect.y
      }
    case 'left-bottom':
      return {
        align: finalAlign,
        x: rect.x - offset,
        y: rect.y + rect.height
      }
    case 'right':
      return {
        align: finalAlign,
        x: rect.x + rect.width + offset,
        y: rect.y + rect.height / 2
      }
    case 'right-top':
      return {
        align: finalAlign,
        x: rect.x + rect.width + offset,
        y: rect.y
      }
    case 'right-bottom':
      return {
        align: finalAlign,
        x: rect.x + rect.width + offset,
        y: rect.y + rect.height
      }
    default:
      return {
        align: 'top',
        x: rect.x + rect.width / 2,
        y: rect.y - offset
      }
  }
}
