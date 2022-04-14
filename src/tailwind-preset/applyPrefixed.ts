interface Prefixer {
  (input: string): string
}
const screen = (item: string): string =>
  item.replace(/(\d)\.(\d)/, '$1\\.$2').replace(/\//, '\\/')

const unscreen = (item: string): string => item.replace('\\', '')

interface ApplyPrefixed {
  (prefix: Prefixer, ...classes: string[]): Record<string, unknown>
}

export const applyPrefixed: ApplyPrefixed = (prefix, ...classes) => {
  let next = classes
    .map((item) => {
      let screened = screen(item)
      let prefixed = prefix(screened).slice(1)
      return unscreen(prefixed)
    })
    .join(' ')
  return {
    [`@apply ${next}`]: {},
  }
}
