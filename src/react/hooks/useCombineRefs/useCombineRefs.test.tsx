import { it, expect, vi } from 'vitest'
import {
  renderHook,
  render,
} from '@testing-library/react'
// @ts-expect-error
import React, { MutableRefObject, Ref, useRef } from 'react'

import { useCombineRefs } from './useCombineRefs.js'

type HookProps = Parameters<typeof useCombineRefs>

type HookReturn = ReturnType<typeof useCombineRefs<HTMLDivElement>>

const useCombineRefsWrapper = (refs: HookProps): Ref<any> =>
  useCombineRefs(...refs)

let createRef = (): MutableRefObject<HTMLDivElement | null> =>
  renderHook<MutableRefObject<HTMLDivElement | null>, HTMLDivElement | null>(
    useRef,
    { initialProps: null }
  ).result.current

it('distribute received ref through all passed refs', async () => {
  let ref1 = createRef()
  let ref2 = vi.fn()

  let { result } = renderHook<HookReturn, HookProps>(
    useCombineRefsWrapper,
    { initialProps: [ref1, ref2] }
  )

  render(<div ref={result.current} />)

  expect(ref1.current).not.toBeNull()
  expect(ref1.current?.tagName).toBe('DIV')
  expect(ref2).toBeCalledWith(ref1.current)
})

it('update current when change amount of passed refs', async () => {
  let ref1 = createRef()
  let ref2 = createRef()
  let ref3 = createRef()

  let { result, rerender } = renderHook<HookReturn, HookProps>(
    useCombineRefsWrapper,
    { initialProps: [ref1, ref2] }
  )

  render(<div ref={result.current} />)

  rerender([ref1, ref2, ref3])

  render(<span ref={result.current} />)

  expect(ref1.current).not.toBeNull()
  expect(ref1.current?.tagName).toBe('SPAN')
  expect(ref2.current).toBe(ref1.current)
  expect(ref3.current).toBe(ref1.current)
})
