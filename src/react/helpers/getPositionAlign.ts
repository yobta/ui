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
  (args: {
    producerNode: HTMLElement
    consumerNode: HTMLElement
    offset: number
    align?: AlignOptions
  }): AlignOptions
}

interface Sizes {
  width: number
  height: number
}

interface Positions {
  top: number
  left: number
  right: number
  bottom: number
}

interface PossiblePositions {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}

export const getPositionAlign: AutoAlign = ({
  producerNode,
  consumerNode,
  offset,
  align
}) => {
  let positionCalc = (): { possiblePosition: PossiblePositions } => {
    let windowWidth: number = document.documentElement.clientWidth
    let windowHeigth: number = document.documentElement.clientHeight
    let rectProducer: DOMRect = producerNode.getBoundingClientRect()
    let rectConsumer: DOMRect = consumerNode.getBoundingClientRect()
    let sizesConsumer: Sizes = {
      width: rectConsumer.width,
      height: rectConsumer.height
    }
    let positions: Positions = {
      top: rectProducer.top,
      right: windowWidth - rectProducer.left - rectProducer.width,
      bottom: windowHeigth - rectProducer.top - rectProducer.height,
      left: rectProducer.left
    }
    let comparePositions: Positions = {
      top: positions.top - sizesConsumer.height - 2 * offset,
      right: positions.right - sizesConsumer.width - 2 * offset,
      bottom: positions.bottom - sizesConsumer.height - 2 * offset,
      left: positions.left - sizesConsumer.width - 2 * offset
    }
    let possiblePosition: PossiblePositions = {
      top: comparePositions.top > 0,
      right:
        comparePositions.right > 0 && positions.top > 0 && positions.bottom > 0,
      bottom: comparePositions.bottom > 0,
      left:
        comparePositions.left > 0 && positions.top > 0 && positions.bottom > 0
    }
    return { possiblePosition }
  }

  let finalPosition = (): string => {
    if (!align) align = 'top'

    let position: string = align.split('-')[0]
    let positions: [string, boolean][] = Object.entries(
      positionCalc().possiblePosition
    )

    let check: [string, boolean] | undefined = positions.find(
      (item: [string, boolean]) => {
        if (item[0] === position && item[1]) return true
      }
    )
    if (check) return align
    let find: [string, boolean] | undefined = positions.find(
      (item: [string, boolean]) => item[1]
    )
    if (find[0]) {
      return find[0]
    } else {
      return 'top'
    }
  }

  switch (finalPosition()) {
    case 'top':
      return 'top'
    case 'top-left':
      return 'top-left'
    case 'top-right':
      return 'top-right'
    case 'bottom':
      return 'bottom'
    case 'bottom-left':
      return 'bottom-left'
    case 'bottom-right':
      return 'bottom-right'
    case 'left':
      return 'left'
    case 'left-top':
      return 'left-top'
    case 'left-bottom':
      return 'left-bottom'
    case 'right':
      return 'right'
    case 'right-top':
      return 'right-top'
    case 'right-bottom':
      return 'right-bottom'
    default:
      return 'top'
  }
}
