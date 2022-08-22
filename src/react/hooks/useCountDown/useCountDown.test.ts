import { it, expect, beforeEach, vi, afterAll } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useCountdown } from './useCountDown.js'

type HookConfig = Parameters<typeof useCountdown>[0]

let intervalCallback: any
let setIntervalMock = vi.fn(callback => {
  intervalCallback = callback
})
let clearIntervalMock = vi.fn()
let hookCallback = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
  vi.clearAllTimers()
  intervalCallback = null
  vi.stubGlobal('setInterval', setIntervalMock)
  vi.stubGlobal('clearInterval', clearIntervalMock)
})

afterAll(() => {
  vi.clearAllMocks()
  vi.clearAllTimers()
})

it('checks that countdown works', () => {
  let { result } = renderHook<number, HookConfig>(useCountdown, {
    initialProps: {
      callback: hookCallback,
      delayInSeconds: 3,
      disabled: false
    }
  })

  expect(setIntervalMock).toBeCalledTimes(1)
  expect(result.current).toBe(3)

  act(intervalCallback)
  expect(setIntervalMock).toBeCalledTimes(2)
  expect(result.current).toBe(2)

  act(intervalCallback)
  expect(setIntervalMock).toBeCalledTimes(3)
  expect(result.current).toBe(1)

  act(intervalCallback)
  expect(setIntervalMock).toBeCalledTimes(5)
  expect(result.current).toBe(3)
  expect(hookCallback).toBeCalled()
})

it('reinitiate countdown when param `delayInSeconds` changes', () => {
  let { result, rerender } = renderHook<number, HookConfig>(useCountdown, {
    initialProps: {
      callback: hookCallback,
      delayInSeconds: 10,
      disabled: false
    }
  })

  expect(result.current).toBe(10)

  rerender({ callback: hookCallback, delayInSeconds: 5, disabled: false })

  expect(result.current).toBe(5)
})

it('calls new callback and leave untouched old', () => {
  let { result, rerender } = renderHook<number, HookConfig>(useCountdown, {
    initialProps: {
      callback: hookCallback,
      delayInSeconds: 3,
      disabled: false
    }
  })

  let newCallback = vi.fn()

  act(intervalCallback)
  expect(result.current).toBe(2)

  rerender({ callback: newCallback, delayInSeconds: 3, disabled: false })
  expect(result.current).toBe(2)

  act(intervalCallback)
  act(intervalCallback)
  expect(result.current).toBe(3)
  expect(newCallback).toBeCalled()
  expect(hookCallback).not.toBeCalled()
})

it('disable and reinitiate countdown when param `disable` change', () => {
  let { result, rerender } = renderHook<number, HookConfig>(useCountdown, {
    initialProps: {
      callback: hookCallback,
      delayInSeconds: 3,
      disabled: false
    }
  })

  act(intervalCallback)
  expect(result.current).toBe(2)

  rerender({ callback: hookCallback, delayInSeconds: 3, disabled: true })
  expect(result.current).toBe(3)
  expect(clearIntervalMock).toBeCalled()
  expect(hookCallback).not.toBeCalled()
})

it('clears interval on unmount ', () => {
  let { result, unmount } = renderHook<number, HookConfig>(useCountdown, {
    initialProps: {
      callback: hookCallback,
      delayInSeconds: 3,
      disabled: false
    }
  })

  expect(setIntervalMock).toBeCalledTimes(1)

  act(intervalCallback)
  expect(clearIntervalMock).toBeCalledTimes(1)
  expect(setIntervalMock).toBeCalledTimes(2)
  expect(result.current).toBe(2)

  unmount()
  expect(clearIntervalMock).toBeCalledTimes(2)
})
