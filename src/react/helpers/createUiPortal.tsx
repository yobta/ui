import { createContext, ReactNode, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

import { usePortalNode } from '../hooks/usePortalNode/index.js'

type Context = { addToPortal(children: ReactNode): void }

export const context = createContext<Context>({} as Context)

export const createUiPortal = (
  children: ReactNode,
  nodeId?: string
): ReactPortal | ReactNode => {
  let portalNode = usePortalNode(nodeId)

  if (portalNode) {
    return createPortal(children, portalNode)
  }

  return <div className="hidden">{children}</div>
}
