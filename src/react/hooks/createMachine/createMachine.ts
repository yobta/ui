import { useState } from 'react'

export type Transitions<T> = {
  [K in keyof T]: Set<keyof Omit<T, K>>
}

interface MachineFactory {
  <T>(transitions: Transitions<T>): (
    initialState: keyof T
  ) => [keyof T, (state: keyof T) => void]
}

export const createMachine: MachineFactory =
  <T>(transitions: Transitions<T>) =>
  (initialState: keyof T) => {
    let [state, setState] = useState(initialState)
    let next = (nextState: keyof T): void => {
      let availableTranstions = transitions[state]
      // @ts-ignore
      if (availableTranstions.has(nextState)) {
        setState(nextState)
      }
    }
    return [state, next]
  }
