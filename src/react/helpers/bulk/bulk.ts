interface Bulk {
  (...args: VoidFunction[]): void
}

export const bulk: Bulk = (...args) => {
  args.forEach(run => {
    run()
  })
}
