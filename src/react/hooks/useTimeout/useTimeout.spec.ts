import { renderHook } from '@testing-library/react'
import { it, expect, vi, afterEach, beforeEach } from 'vitest'

import { whenTimeout } from '../../helpers/whenTimeout/whenTimeout.js'
import { useTimeout } from './useTimeout.js'

const callbackMock = vi.fn()
const clearTimeoutMock = vi.fn()

beforeEach(() => {
  vi.stubGlobal('clearTimeout', clearTimeoutMock)
})

afterEach(() => {
  callbackMock.mockClear()
  clearTimeoutMock.mockClear()
})

it('respects timeout', async () => {
  let ref = renderHook(
    ({ ms, callback, dependencies }) => {
      useTimeout(ms, callback, dependencies)
    },
    {
      initialProps: {
        ms: 64,
        callback: callbackMock,
        dependencies: []
      }
    }
  )

  expect(callbackMock).toBeCalledTimes(0)
  expect(clearTimeoutMock).toBeCalledTimes(0)

  await whenTimeout(64)

  expect(callbackMock).toBeCalledTimes(1)
  expect(clearTimeoutMock).toBeCalledTimes(0)

  ref.unmount()

  expect(callbackMock).toBeCalledTimes(1)
  expect(clearTimeoutMock).toBeCalledTimes(1)
})

it('respects dependencies', async () => {
  let ref = renderHook(
    ({ ms, callback, dependencies }) => {
      useTimeout(ms, callback, dependencies)
    },
    {
      initialProps: {
        ms: 64,
        callback: callbackMock,
        dependencies: [1]
      }
    }
  )

  expect(callbackMock).toBeCalledTimes(0)
  expect(clearTimeoutMock).toBeCalledTimes(0)

  ref.rerender({
    ms: 64,
    callback: callbackMock,
    dependencies: [1]
  })

  expect(callbackMock).toBeCalledTimes(0)
  expect(clearTimeoutMock).toBeCalledTimes(0)

  ref.rerender({
    ms: 64,
    callback: callbackMock,
    dependencies: [2]
  })

  expect(callbackMock).toBeCalledTimes(0)
  expect(clearTimeoutMock).toBeCalledTimes(1)

  ref.unmount()

  expect(callbackMock).toBeCalledTimes(0)
  expect(clearTimeoutMock).toBeCalledTimes(2)
})
