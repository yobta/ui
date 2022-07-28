const screen = item =>
  item.replace(/(\d)\.(\d)/, '$1\\.$2').replace(/\//, '\\/')

const unscreen = item => item.replace('\\', '')

module.exports = (prefix, ...classes) => {
  let next = classes
    .map(item => {
      let screened = screen(item)
      let prefixed = prefix(screened).slice(1)
      return unscreen(prefixed)
    })
    .join(' ')
  return {
    [`@apply ${next}`]: {}
  }
}
