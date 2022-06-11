import { createContext, useContext } from 'react'

import { ShowHideState } from '../hooks/useShowHide.js'

type ToastContext = {
  autoHide: boolean
  countdown: number
  handleClick: VoidFunction
  state: ShowHideState
}

const toastContext = createContext<ToastContext>({
  autoHide: false,
  countdown: 0,
  handleClick() {},
  state: 'invisible'
})

export const ToastContextProvider = toastContext.Provider

export const useToastContext = (): ToastContext => useContext(toastContext)
