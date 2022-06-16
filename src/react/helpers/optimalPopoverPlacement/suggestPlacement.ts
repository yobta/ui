interface SuggestPlacement {
  (args: {
    producerNode: HTMLElement
    consumerNode: HTMLElement
    offset: number
  }): 'top' | 'bottom' | 'right' | 'left'
}

type SuggestedPlacement = ReturnType<SuggestPlacement>

type Space = Record<SuggestedPlacement, number>

export const suggestPlacement: SuggestPlacement = () => {
  // TODO: рассчитать площадь свободного пространства по сторонам от объекта
  // сортировку ключей не менять
  let space: Space = {
    top: 2,
    right: 3,
    bottom: 4,
    left: 1
  }

  let entries = Object.entries(space) as [SuggestedPlacement, number][]

  let largestSpace = entries.reduce((last, next) =>
    next[1] > last[1] ? next : last
  )

  return largestSpace[0]
}
