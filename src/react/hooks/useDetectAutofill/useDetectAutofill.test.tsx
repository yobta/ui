import { it, expect, beforeEach } from 'vitest'
import { renderHook, render, act } from '@testing-library/react'
// @ts-expect-error
import React, { MutableRefObject, useRef } from 'react'

import { useDetectAutofill } from './useDetectAutofill.js'

type HookProps = Parameters<typeof useDetectAutofill>[0]

let inputRef: MutableRefObject<HTMLInputElement | null>

beforeEach(async () => {
  inputRef = renderHook<typeof inputRef, HTMLInputElement | null>(useRef, {
    initialProps: null
  }).result.current

  render(<input data-testid="target" ref={inputRef} />)
})

it('doesn`t flag autofill', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })

  expect(result.current).toBe(false)

  await new Promise(resolve => setTimeout(resolve, 3000))

  expect(result.current).toBe(false)
})

it('sets flag autofill', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })
  expect(result.current).toBe(false)

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 100))
    Object.assign(inputRef.current as object, { matches: () => true })
    await new Promise(resolve => setTimeout(resolve, 500))
  })

  expect(result.current).toBe(true)
})

it('don`t sets autofill flga after timeout', async () => {
  let { result } = renderHook<boolean, HookProps>(useDetectAutofill, {
    initialProps: inputRef
  })
  expect(result.current).toBe(false)

  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    Object.assign(inputRef.current as object, { matches: () => true })
    await new Promise(resolve => setTimeout(resolve, 500))
  })

  expect(result.current).toBe(false)
})
