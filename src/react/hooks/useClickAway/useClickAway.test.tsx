import { it, expect, vi, beforeEach, afterAll } from 'vitest'
import { renderHook, render, fireEvent, screen } from '@testing-library/react'
// @ts-expect-error
import React, { MutableRefObject, useRef } from 'react'

import { defaultEventTypes, useClickAway } from './useClickAway.js'

type HookProps = {
  ref?: MutableRefObject<HTMLDivElement | null>
  onClickAway?: typeof useClickAwayCallback
  eventTypes?: string[]
}

let useClickAwayCallback = vi.fn()

let awayTargetRef: MutableRefObject<HTMLDivElement | null>
let awaySecondTargetRef: MutableRefObject<HTMLDivElement | null>
let awayHook = (props?: HookProps): void => {
  let {
    ref = awayTargetRef,
    onClickAway = useClickAwayCallback,
    eventTypes
  } = props || {}
  useClickAway(ref, onClickAway, eventTypes)
}

let addEventListenerMock = vi.spyOn(document, 'addEventListener')
let removeEventListenerMock = vi.spyOn(document, 'removeEventListener')

let createRef = (): MutableRefObject<HTMLDivElement | null> =>
  renderHook<MutableRefObject<HTMLDivElement | null>, HTMLDivElement | null>(
    useRef,
    { initialProps: null }
  ).result.current

beforeEach(async () => {
  awayTargetRef = createRef()
  awaySecondTargetRef = createRef()
  render(
    <div data-testid="wrapper">
      <div>
        <div data-testid="target" ref={awayTargetRef}>
          Click area 1
        </div>
        <div data-testid="secondtarget" ref={awaySecondTargetRef}>
          Click area 2
        </div>
      </div>
    </div>
  )
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

it('fires click event when clicked outside', async () => {
  renderHook<void, HookProps>(awayHook)

  let wrapper = await screen.findByTestId('wrapper')
  fireEvent.mouseDown(wrapper)
  fireEvent.mouseDown(wrapper)

  expect(useClickAwayCallback).toBeCalledTimes(2)
})
it('does not fires click event when clicked inside', async () => {
  renderHook<void, HookProps>(awayHook)

  let wrapper = await screen.findByTestId('target')
  fireEvent.mouseDown(wrapper)
  fireEvent.mouseDown(wrapper)

  expect(useClickAwayCallback).toBeCalledTimes(0)
})
it('updates onClickAway instance when changed', async () => {
  let nextClickAwayCallback = vi.fn()
  let { rerender } = renderHook<void, HookProps>(awayHook)

  rerender({ onClickAway: nextClickAwayCallback })

  let wrapper = await screen.findByTestId('wrapper')
  fireEvent.mouseDown(wrapper)
  fireEvent.mouseDown(wrapper)

  expect(useClickAwayCallback).toBeCalledTimes(0)
  expect(nextClickAwayCallback).toBeCalledTimes(2)
})
it('has default eventTypes', () => {
  renderHook<void, HookProps>(awayHook)

  defaultEventTypes.forEach((eventType, order) => {
    expect(addEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })
})
it('taked custom eventTypes', () => {
  let eventTypes = ['focus', 'blur']
  renderHook<void, HookProps>(awayHook, { initialProps: { eventTypes } })
  eventTypes.forEach((eventType, order) => {
    expect(addEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })
})
it('unsubscribes on exit', () => {
  let { unmount } = renderHook<void, HookProps>(awayHook)

  unmount()

  defaultEventTypes.forEach((eventType, order) => {
    expect(removeEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })
})
it('resubscribes on eventTypes change', () => {
  let { rerender } = renderHook<void, HookProps>(awayHook)

  addEventListenerMock.mockClear()

  let nextEventTypes = ['click', 'doubleclick']
  rerender({ eventTypes: nextEventTypes })

  defaultEventTypes.forEach((eventType, order) => {
    expect(removeEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })

  nextEventTypes.forEach((eventType, order) => {
    expect(addEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })
})
it('resubscribes on ref.current change', () => {
  let { rerender } = renderHook<void, HookProps>(awayHook)
  addEventListenerMock.mockClear()

  rerender({ ref: awaySecondTargetRef })

  defaultEventTypes.forEach((eventType, order) => {
    expect(removeEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })

  defaultEventTypes.forEach((eventType, order) => {
    expect(addEventListenerMock).toHaveBeenNthCalledWith(
      order + 1,
      eventType,
      expect.anything()
    )
  })
})
