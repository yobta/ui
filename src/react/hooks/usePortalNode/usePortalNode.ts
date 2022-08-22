import { useEffect, useState } from 'react'

export interface PortalNodeHook {
  (nodeId?: string): HTMLElement | null
}

export const usePortalNode: PortalNodeHook = (nodeId = 'ui-portal') => {
  let [portalNode, setPortalNode] = useState<HTMLElement | null>(null)
  useEffect(() => {
    let node = document.getElementById(nodeId)
    if (!node) {
      node = document.createElement('div')
      node.setAttribute('id', nodeId)
      document.body.appendChild(node)
    }

    setPortalNode(node)
  }, [])

  return portalNode
}
