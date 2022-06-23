interface SuggestPlacement {
  (args: { producerNode: HTMLElement }): 'top' | 'bottom' | 'right' | 'left'
}

type SuggestedPlacement = ReturnType<SuggestPlacement>

type Space = Record<SuggestedPlacement, number>

export const suggestPlacement: SuggestPlacement = ({ producerNode }) => {
  let { left, top, right, bottom } = producerNode.getBoundingClientRect()
  let { innerWidth, innerHeight } = window
  let space: Space = {
    top: top * innerWidth,
    right: (innerWidth - right) * innerHeight,
    bottom: (innerHeight - bottom) * innerHeight,
    left: left * innerHeight
  }

  let entries = Object.entries(space) as [SuggestedPlacement, number][]

  let largestSpace = entries.reduce((last, next) =>
    next[1] > last[1] ? next : last
  )

  return largestSpace[0]
}
