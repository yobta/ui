interface MatchElement {
  (element: HTMLElement | null, matcher: string): boolean
}

export const matchElement: MatchElement = (element, matcher) => {
  try {
    return element ? element.matches(matcher) : false
  } catch (_e) {
    return false
  }
}
