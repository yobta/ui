import { RefObject, useEffect, useRef, useState } from 'react'

interface IdRefHook {
  (id: string): RefObject<HTMLElement | null>
}

export const useIdRef: IdRefHook = id => {
  let ref = useRef<HTMLElement | null>(null)
  let [, update] = useState({})

  useEffect(() => {
    let node = document.getElementById(id)
    ref.current = node
    update({})
  }, [id])

  return ref
}
