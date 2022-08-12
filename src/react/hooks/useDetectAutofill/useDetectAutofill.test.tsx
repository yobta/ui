import { it, expect, beforeEach, vi } from 'vitest'
import {
  renderHook,
  render,
  act,
  fireEvent,
  screen
} from '@testing-library/react'
// @ts-expect-error
import React, { MutableRefObject, useRef } from 'react'

import { useDetectAutofill, isAutofilled } from './useDetectAutofill.js'

type HookProps = Parameters<typeof useDetectAutofill>[0]

let inputRef: MutableRefObject<HTMLInputElement | null>

beforeEach(async () => {
  inputRef = renderHook<typeof inputRef, HTMLInputElement | null>(useRef, {
    initialProps: null
  }).result.current

  render(<input data-testid="target" ref={inputRef} />)
})

it('enough only one selector in isAutofilled', async () => {
  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(matcher => matcher === ':-webkit-autofill')

  let result = isAutofilled(inputRef.current, [
    ':-internal-autofill-selected',
    ':-webkit-autofill',
    ':autofill'
  ])

  expect(matchesMock).toBeCalled()
  expect(result).toBe(true)
})

it('return false when matcher throw error in isAutofilled', async () => {
  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => {
      throw new Error('Test error')
    })

  let result = isAutofilled(inputRef.current, [':-webkit-autofill'])

  expect(matchesMock).toBeCalledWith(':-webkit-autofill')
  expect(result).toBe(false)
})

it('return false unless node in isAutofilled', async () => {
  let result = isAutofilled(null, [':-webkit-autofill'])

  expect(result).toBe(false)
})

it('is false when not matсhes', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => false)

  expect(result.current).toBe(false)

  await new Promise(resolve => setTimeout(resolve, 3000))

  expect(matchesMock).toBeCalled()
  expect(result.current).toBe(false)
})

it('returns true when matches', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })
  expect(result.current).toBe(false)

  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => false)

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 100))
    matchesMock.mockImplementation(() => true)
    await new Promise(resolve => setTimeout(resolve, 500))
  })

  expect(result.current).toBe(true)
})

it('resets after timeout', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })
  expect(result.current).toBe(false)

  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => false)

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    matchesMock.mockImplementation(() => true)
    await new Promise(resolve => setTimeout(resolve, 500))
  })

  expect(matchesMock).toBeCalled()
  expect(result.current).toBe(false)
})

it('resets on input', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })
  expect(result.current).toBe(false)

  let matchesMock = vi
    .spyOn<HTMLInputElement, 'matches'>(inputRef.current!, 'matches')
    .mockImplementation(() => false)

  await act(async () => {
    let inputField = await screen.findByTestId('target')
    fireEvent.input(inputField)
    await new Promise(resolve => setTimeout(resolve, 200))
    matchesMock.mockImplementation(() => true)
    await new Promise(resolve => setTimeout(resolve, 200))
  })

  expect(matchesMock).not.toBeCalled()
  expect(result.current).toBe(false)
})
