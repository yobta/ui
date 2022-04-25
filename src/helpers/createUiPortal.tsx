import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  ReactPortal,
} from 'react'
import { createPortal } from 'react-dom'

type Context = { addToPortal(children: ReactNode): void }

export const context = createContext<Context>({} as Context)

const defaultID = 'ui-portal'

export const createUiPortal = (
  children: ReactNode,
  nodeId?: string
): ReactPortal | ReactNode => {
  let [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    let id = nodeId || defaultID
    let node = document.getElementById(id)
    if (!node) {
      node = document.createElement('div')
      node.setAttribute('id', id)
      document.body.appendChild(node)
    }
    return createPortal(children, node)
  }

  return <div className="hidden">{children}</div>
}
