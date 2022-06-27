import { it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'

import { useConnectionStatus } from './useConnectionStatus.js'

it('is null when not mounted and then true when navigator is online', () => {
  let ref = vi.fn()
  vi.stubGlobal('navigator', { onLine: true })
  renderHook(() => {
    let result = useConnectionStatus()
    ref(result)
  })

  expect(ref).toBeCalledTimes(2)
  expect(ref.mock.calls[0][0]).toBe(null)
  expect(ref.mock.calls[1][0]).toBe(true)
})

it('is null when not mounted and then false when navigator is online', () => {
  let ref = vi.fn()
  vi.stubGlobal('navigator', { onLine: false })
  renderHook(() => {
    let result = useConnectionStatus()
    ref(result)
  })

  expect(ref).toBeCalledTimes(2)
  expect(ref.mock.calls[0][0]).toBe(null)
  expect(ref.mock.calls[1][0]).toBe(false)
})

it('subscribes to online/offline events', () => {
  let addEventListener = vi.fn()
  let removeEventListener = vi.fn()
  vi.stubGlobal('navigator', { onLine: false })
  vi.stubGlobal('addEventListener', addEventListener)
  vi.stubGlobal('removeEventListener', removeEventListener)

  let ref = renderHook(useConnectionStatus)

  expect(ref.result.current).toBe(false)
  expect(addEventListener).toBeCalledTimes(2)
  expect(removeEventListener).toBeCalledTimes(0)
  expect(addEventListener.mock.calls[0][0]).toBe('online')
  expect(addEventListener.mock.calls[1][0]).toBe('offline')

  addEventListener.mock.calls[0][1]()
  ref.rerender()
  expect(ref.result.current).toBe(true)
  expect(addEventListener).toBeCalledTimes(2)
  expect(removeEventListener).toBeCalledTimes(0)

  addEventListener.mock.calls[1][1]()
  ref.rerender()
  expect(ref.result.current).toBe(false)
  expect(addEventListener).toBeCalledTimes(2)
  expect(removeEventListener).toBeCalledTimes(0)

  ref.unmount()
  expect(addEventListener).toBeCalledTimes(2)
  expect(removeEventListener).toBeCalledTimes(2)
})
