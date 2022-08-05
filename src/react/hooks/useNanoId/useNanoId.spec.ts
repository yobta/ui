import { it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'

import { useNanoId } from './useNanoId.js'

it('returns string', () => {
  let ref = renderHook(useNanoId)
  expect(ref.result.current).toEqual(expect.any(String))
})

it('is stays the same after rerender', () => {
  let ref = renderHook(useNanoId)
  let result = ref.result.current
  expect(ref.result.current).toBe(result)

  ref.rerender()
  expect(ref.result.current).toBe(result)
})

it('has size argument', () => {
  let ref = renderHook(({ size }) => useNanoId(size), {
    initialProps: { size: 4 }
  })
  expect(ref.result.current.length).toBe(4)
})
