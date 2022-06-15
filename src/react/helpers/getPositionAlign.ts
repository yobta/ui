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
  (producerNode: HTMLElement, consumerNode: HTMLElement, offset: number, align: AlignOptions | undefined): AlignOptions
}

export const getPositionAlign: AutoAlign = (producerNode, consumerNode, offset, align) => {
  const documentWidth: number = document.documentElement.scrollWidth
  const documentHeight: number = document.documentElement.scrollHeight
  const rectProducer: DOMRect = producerNode.getBoundingClientRect()
  const rectConsumer: DOMRect = consumerNode.getBoundingClientRect()

  interface Sizes {
    width: number,
    height: number
  }

  interface Positions {
    top: number,
    left: number,
    right: number,
    bottom: number
  }

  const sizesProducer: Sizes = {
    width: rectProducer.width,
    height: rectProducer.height
  }
  console.log(sizesProducer)

  const sizesConsumer: Sizes = {
    width: rectConsumer.width,
    height: rectConsumer.height
  }
  console.log(sizesConsumer)

  const positions: Positions = {
    top: rectProducer.top,
    right: documentWidth - rectProducer.left - rectProducer.width,
    bottom: documentHeight - rectProducer.top - rectProducer.height,
    left: rectProducer.left
  }
  console.log(positions)

  const comparePositions: Positions = {
    top: positions.top - sizesConsumer.height - 2 * offset,
    right: positions.right - sizesConsumer.width - 2 * offset,
    bottom: positions.bottom - sizesConsumer.height - 2 * offset,
    left: positions.left - sizesConsumer.width - 2 * offset
  }
  console.log(comparePositions)

  const finalPosition = (): string | undefined => {
    if (!align) return align

    const key: string = align.split('-')[0]
    const value: number = comparePositions[key]
    console.log(value)

    if (value > 0) return align

    const autoPosition: string = Object.entries(comparePositions).reduce((acc, item) => {
      if (item[1] > acc[1]) return item
      return acc
    })[0]
    console.log(autoPosition)

    return autoPosition
  }

  switch (finalPosition()) {
    case 'top': return 'top'
    case 'top-left': return 'top-left'
    case 'top-right': return 'top-right'
    case 'bottom': return 'bottom'
    case 'bottom-left': return 'bottom-left'
    case 'bottom-right': return 'bottom-right'
    case 'left': return 'left'
    case 'left-top': return 'left-top'
    case 'left-bottom': return 'left-bottom'
    case 'right': return 'right'
    case 'right-top': return 'right-top'
    case 'right-bottom': return 'right-bottom'
    case 'top': return 'top'
    default: return 'top'
  }

  // return 'bottom'
}
