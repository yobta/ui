import { useMemo } from 'react'
import { nanoid } from 'nanoid'

export const useNanoId: typeof nanoid = (...args) =>
  useMemo(() => nanoid(...args), [])
