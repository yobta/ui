import { subscribe } from '../subscribe/index.js'

interface WhenOnline {
  (): Promise<void>
}

export const whenOnline: WhenOnline = () => {
  if (window.navigator.onLine) {
    return Promise.resolve()
  }
  return new Promise(resolve => {
    let unsubscribe = subscribe(window, 'online', () => {
      unsubscribe()
      resolve()
    })
  })
}
