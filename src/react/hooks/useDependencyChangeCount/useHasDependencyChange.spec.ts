import { it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'

import { useDependencyChangeCount } from './useDependencyChangeCount.js'

it('returns false when arguments are not changed', () => {
  let ref = renderHook(useDependencyChangeCount, { initialProps: 1 })

  expect(ref.result.current).toBe(0)

  ref.rerender(1)
  expect(ref.result.current).toBe(0)

  ref.unmount()
  expect(ref.result.current).toBe(0)
})

it('returns true when arguments are changed', () => {
  let ref = renderHook(useDependencyChangeCount, { initialProps: 1 })

  expect(ref.result.current).toBe(0)

  ref.rerender(2)
  expect(ref.result.current).toBe(1)

  ref.unmount()
  expect(ref.result.current).toBe(1)
})
