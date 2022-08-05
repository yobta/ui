import { useMemo } from 'react'
import { nanoid } from 'nanoid'

interface NanoidHook {
  (): string
}

export const useNanoId: NanoidHook = () => useMemo(nanoid, [])
