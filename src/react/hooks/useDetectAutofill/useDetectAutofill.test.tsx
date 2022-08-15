import { it, expect, beforeEach, vi, beforeAll, afterAll } from 'vitest'
import {
  renderHook,
  render,
  act,
  fireEvent,
  screen
} from '@testing-library/react'
// @ts-expect-error
import React, { MutableRefObject, useRef } from 'react'

import { useDetectAutofill } from './useDetectAutofill.js'

type HookProps = Parameters<typeof useDetectAutofill>[0]

let inputRef: MutableRefObject<HTMLInputElement | null>

let intervalCallback: any
let setIntervalMock = vi.fn(callback => {
  intervalCallback = callback
})

let setTimeoutCallback: any
let setTimeoutMock = vi.fn(callback => {
  setTimeoutCallback = callback
})

let clearTimeoutMock = vi.fn()
let clearIntervalMock = vi.fn()

beforeAll(() => {
  vi.useFakeTimers()
})

beforeEach(async () => {
  vi.clearAllMocks()
  vi.clearAllTimers()
  intervalCallback = null
  setTimeoutCallback = null
  vi.stubGlobal('setInterval', setIntervalMock)
  vi.stubGlobal('setTimeout', setTimeoutMock)
  vi.stubGlobal('clearInterval', clearIntervalMock)
  vi.stubGlobal('clearTimeout', clearTimeoutMock)

  inputRef = renderHook<typeof inputRef, HTMLInputElement | null>(useRef, {
    initialProps: null
  }).result.current

  render(<input data-testid="target" ref={inputRef} />)
})

afterAll(() => {
  vi.clearAllMocks()
  vi.clearAllTimers()
})

it('is false when not matсhes', async () => {
  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => false)

  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  expect(setTimeoutMock).toBeCalledTimes(1)
  expect(setIntervalMock).toBeCalledTimes(1)
  expect(matchesMock).not.toBeCalled()
  expect(result.current).toBe(false)

  intervalCallback()
  intervalCallback()
  intervalCallback()

  expect(matchesMock).toBeCalled()

  expect(result.current).toBe(false)
})

it('returns true when matches', async () => {
  vi.spyOn<HTMLInputElement, 'matches'>(
    inputRef.current!,
    'matches'
  ).mockImplementation(matcher => matcher === ':-internal-autofill-selected')

  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  await act(async () => {
    intervalCallback()
  })

  expect(result.current).toBe(true)
  expect(clearIntervalMock).toBeCalled()
  expect(clearTimeoutMock).toBeCalled()
})

it('resets after timeout', async () => {
  vi.spyOn<HTMLInputElement, 'matches'>(
    inputRef.current!,
    'matches'
  ).mockImplementation(() => false)

  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  await act(async () => {
    setTimeoutCallback()
  })

  expect(result.current).toBe(false)
  expect(clearIntervalMock).toBeCalled()
  expect(clearTimeoutMock).toBeCalled()
})

it('resets on input', async () => {
  vi.spyOn<HTMLInputElement, 'matches'>(
    inputRef.current!,
    'matches'
  ).mockImplementation(() => false)

  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  await act(async () => {
    intervalCallback()
    let inputField = await screen.findByTestId('target')
    fireEvent.input(inputField)
  })

  expect(result.current).toBe(false)
  expect(clearIntervalMock).toBeCalled()
  expect(clearTimeoutMock).toBeCalled()
})
