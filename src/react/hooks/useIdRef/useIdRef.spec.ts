import { renderHook } from '@testing-library/react'
import { it, expect, vi } from 'vitest'

import { useIdRef } from './useIdRef.js'

it('returns null ref when id points to nowhere', () => {
  let result = renderHook(useIdRef, { initialProps: 'foo' })

  expect(result.result.current.current).toBe(null)
})

it('returns html object ref when id points to a DOM element', () => {
  let node = document.createElement('div')
  node.id = 'foo'
  document.body.appendChild(node)
  let result = renderHook(useIdRef, { initialProps: 'foo' })

  expect(result.result.current.current).toBe(node)
})

it('updates after mount', () => {
  let renderMock = vi.fn()
  let result = renderHook(
    id => {
      renderMock()
      return useIdRef(id)
    },
    { initialProps: 'foo' }
  )

  expect(renderMock).toBeCalledTimes(2)

  result.rerender('foo')
  expect(renderMock).toBeCalledTimes(3)

  result.rerender('bar')
  expect(renderMock).toBeCalledTimes(5)
})
