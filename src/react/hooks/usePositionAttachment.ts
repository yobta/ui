import { AlignOptions, getPositionAlign } from '../helpers/getPositionAlign.js'

export type PositionAttachment = {
  x: number
  y: number
  align: AlignOptions
} | null

interface PositionAttachmentHook {
  (args: {
    align?: AlignOptions
    consumerNode?: HTMLElement | null
    producerNode?: HTMLElement | null
    offset: number
  }): PositionAttachment
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
  let finalAlign =
    align ||
    getPositionAlign({
      producerNode,
      consumerNode,
      offset,
      align
    })

  switch (finalAlign) {
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
    case 'top':
    default:
      return {
        align: 'top',
        x: rect.x + rect.width / 2,
        y: rect.y - offset
      }
  }
}
