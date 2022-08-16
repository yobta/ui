import { it, expect, beforeEach, vi, afterAll } from 'vitest'
import { renderHook, fireEvent } from '@testing-library/react'

import { useEscapeKey } from './useEscapeKey.js'

type HookProps = Parameters<typeof useEscapeKey>

let callbackMock = vi.fn()

let useEscapeKeyWrapper = ([callback, active]: HookProps): boolean =>
  useEscapeKey(callback, active)

beforeEach(() => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.clearAllMocks()
})

it('is last hook on top', () => {
  let { result: result1 } = renderHook<boolean, HookProps>(
    useEscapeKeyWrapper,
    {
      initialProps: [callbackMock, true]
    }
  )

  let { result: result2 } = renderHook<boolean, HookProps>(
    useEscapeKeyWrapper,
    {
      initialProps: [callbackMock, true]
    }
  )

  expect(result1.current).toBe(false)
  expect(result2.current).toBe(true)
})

it('is inactive hook not on top', () => {
  let { result } = renderHook<boolean, HookProps>(useEscapeKeyWrapper, {
    initialProps: [callbackMock, false]
  })

  expect(result.current).toBe(false)
})

it('removes from top when become inactive', () => {
  let { result, rerender } = renderHook<boolean, HookProps>(
    useEscapeKeyWrapper,
    {
      initialProps: [callbackMock, true]
    }
  )

  expect(result.current).toBe(true)

  rerender([callbackMock, false])
  rerender([callbackMock, false])

  expect(result.current).toBe(false)
})

it('touches callback on escape key event', () => {
  let { result } = renderHook<boolean, HookProps>(useEscapeKeyWrapper, {
    initialProps: [callbackMock, true]
  })

  expect(result.current).toBe(true)

  fireEvent.keyDown(document, { key: 'Escape' })

  expect(callbackMock).toBeCalled()
})

it('touches last callback on escape key event', () => {
  let { rerender } = renderHook<boolean, HookProps>(useEscapeKeyWrapper, {
    initialProps: [callbackMock, true]
  })

  let callbackMock1 = vi.fn()

  rerender([callbackMock1, true])

  fireEvent.keyDown(document, { key: 'Escape' })

  expect(callbackMock).not.toBeCalled()
  expect(callbackMock1).toBeCalled()
})

it('subscribes/unsubscribes on keydown event', () => {
  let addEventListenerSpy = vi.spyOn(document, 'addEventListener')
  let removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

  let { unmount } = renderHook<boolean, HookProps>(useEscapeKeyWrapper, {
    initialProps: [callbackMock, true]
  })

  expect(addEventListenerSpy).toBeCalledWith('keydown', expect.anything())

  unmount()

  expect(removeEventListenerSpy).toBeCalledWith('keydown', expect.anything())
})
