interface WhenOnline {
  (): Promise<void>
}

export const whenOnline: WhenOnline = () => {
  if (window.navigator.onLine) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    window.addEventListener('online', () => {
      resolve()
    })
  })
}
