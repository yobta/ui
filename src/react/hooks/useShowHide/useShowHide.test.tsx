import { it, expect, beforeEach, vi, afterAll } from 'vitest'
import { renderHook, act, render, fireEvent } from '@testing-library/react'
// @ts-expect-error
import React from 'react'

import { useShowHide, INVISIBLE, VISIBLE, ENTERING, EXITING } from './useShowHide.js'

type HookConfig = Parameters<typeof useShowHide>[0]
type HookResult = ReturnType<typeof useShowHide<HTMLDivElement>>

let onCloseMock = vi.fn()
let onEnterMock = vi.fn()
let onLeaveMock = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.clearAllMocks()
  vi.clearAllTimers()
})

it('enters to visible state after mount when visible = true', () => {
  let props = {
    onClose: onCloseMock,
    onEnter: onEnterMock,
    onLeave: onLeaveMock,
    visible: true
  }

  let { result, rerender } = renderHook<HookResult, HookConfig>(useShowHide, {
    initialProps: props
  })
  expect(result.current.ref.current).toBeNull()
  expect(result.current.state).toBe(ENTERING)

  render(<div ref={result.current.ref}>Content</div>)
  expect(result.current.ref.current).not.toBeNull()
  rerender(props)

  act(() => {
    fireEvent.animationEnd(result.current.ref.current!)
  })

  expect(onEnterMock).toBeCalledTimes(1)
  expect(onCloseMock).not.toBeCalled()
  expect(onLeaveMock).not.toBeCalled()
  expect(result.current.state).toBe(VISIBLE)
  expect(result.current.isOnTop).toBe(true)
})

it('stay at invisible state after mount when visible = false', () => {
  let props = {
    onClose: onCloseMock,
    onEnter: onEnterMock,
    onLeave: onLeaveMock,
    visible: false
  }

  let { result, rerender } = renderHook<HookResult, HookConfig>(useShowHide, {
    initialProps: props
  })
  expect(result.current.ref.current).toBeNull()
  expect(result.current.state).toBe(INVISIBLE)

  render(<div ref={result.current.ref}>Content</div>)
  rerender(props)

  expect(result.current.ref.current).not.toBeNull()
  expect(onEnterMock).not.toBeCalled()
  expect(onCloseMock).not.toBeCalled()
  expect(onLeaveMock).not.toBeCalled()
  expect(result.current.state).toBe(INVISIBLE)
})

it('switches to invisible state after escape button', () => {
  let props = {
    onClose: onCloseMock,
    onEnter: onEnterMock,
    onLeave: onLeaveMock,
    visible: true
  }

  let { result, rerender } = renderHook<HookResult, HookConfig>(useShowHide, {
    initialProps: props
  })
  render(<div ref={result.current.ref}>Content</div>)
  rerender(props)

  act(() => {
    fireEvent.animationEnd(result.current.ref.current!)
  })
  expect(result.current.state).toBe(VISIBLE)

  act(() => {
    fireEvent.keyDown(document, { key: 'Escape' })
  })
  expect(result.current.state).toBe(EXITING)

  expect(onCloseMock).toBeCalled()
  expect(onLeaveMock).not.toBeCalled()

  act(() => {
    fireEvent.animationEnd(result.current.ref.current!)
  })
  expect(onLeaveMock).toBeCalled()
})

it('ignores animationend events in not transitional states', () => {
  let props = {
    onClose: onCloseMock,
    onEnter: onEnterMock,
    onLeave: onLeaveMock,
    visible: true
  }

  let { result, rerender } = renderHook<HookResult, HookConfig>(useShowHide, {
    initialProps: props
  })
  render(<div ref={result.current.ref}>Content</div>)
  rerender(props)

  act(() => {
    fireEvent.animationEnd(result.current.ref.current!)
  })
  expect(result.current.state).toBe(VISIBLE)

  act(() => {
    fireEvent.animationEnd(result.current.ref.current!)
    fireEvent.animationEnd(result.current.ref.current!)
  })
  expect(result.current.state).toBe(VISIBLE)

  act(result.current.onClose)
  expect(result.current.state).toBe(EXITING)
  expect(onCloseMock).toBeCalledTimes(1)

  rerender({ ...props, visible: false })
  expect(result.current.state).toBe(EXITING)

  fireEvent.animationEnd(result.current.ref.current!)
  expect(result.current.state).toBe(INVISIBLE)
})
