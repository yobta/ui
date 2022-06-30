import { createContext } from 'react'

type ToggleContextValue = {
  setChildToggleIsVisible: (state: boolean) => void
}

export const ToggleContext = createContext<ToggleContextValue>({
  setChildToggleIsVisible() {}
})
