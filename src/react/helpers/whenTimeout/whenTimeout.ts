interface WhenTimeout {
  (ms: number): Promise<void>
}

export const whenTimeout: WhenTimeout = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
