interface Batch {
  (...args: VoidFunction[]): void
}

export const batch: Batch = (...args) => {
  args.forEach(run => {
    run()
  })
}
