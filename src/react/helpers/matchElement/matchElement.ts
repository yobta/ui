interface MatchElement {
  (element: HTMLElement | null, matchers: string[]): boolean
}

export const matchElement: MatchElement = (element, matchers) =>
  element
    ? matchers.some(matcher => {
        try {
          return element.matches(matcher)
        } catch (_e) {
          return false
        }
      })
    : false
