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
  let windowWidth: number = document.documentElement.clientWidth
  let windowHeigth: number = document.documentElement.clientHeight
  console.log(`Window Width: ${windowWidth}, Window height: ${windowHeigth}`)
  let rectProducer: DOMRect = producerNode.getBoundingClientRect()
  let rectConsumer: DOMRect = consumerNode.getBoundingClientRect()

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

  let sizesProducer: Sizes = {
    width: rectProducer.width,
    height: rectProducer.height
  }
  console.log(sizesProducer)

  let sizesConsumer: Sizes = {
    width: rectConsumer.width,
    height: rectConsumer.height
  }
  console.log(sizesConsumer)

  let positions: Positions = {
    top: rectProducer.top,
    right: windowWidth - rectProducer.left - rectProducer.width,
    bottom: windowHeigth - rectProducer.top - rectProducer.height,
    left: rectProducer.left
  }
  console.log(positions)

  let comparePositions: Positions = {
    top: positions.top - sizesConsumer.height - 2 * offset,
    right: positions.right - sizesConsumer.width - 2 * offset,
    bottom: positions.bottom - sizesConsumer.height - 2 * offset,
    left: positions.left - sizesConsumer.width - 2 * offset
  }
  console.log(comparePositions)

  interface PossiblePositions {
    top: boolean,
    right: boolean,
    bottom: boolean,
    left: boolean
  }

  let possiblePosition: PossiblePositions = {
    top: comparePositions.top > 0,
    right: (comparePositions.right > 0 && (positions.top > 0 && positions.bottom > 0)),
    bottom: comparePositions.bottom > 0,
    left: (comparePositions.left > 0 && (positions.top > 0 && positions.bottom > 0))
  }
  console.log(possiblePosition)

  let finalPosition = (): string | undefined => {
    if (!align) align = 'top'

    let value: number = comparePositions[align.split('-')[0]]
    console.log(`value: ${value}`)

    if (value > 0) return align

    let autoPosition: string = Object.entries(comparePositions).reduce((acc, item) => {
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
    default: return 'top'
  }

  // return 'bottom'
}
