import { it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, render, fireEvent, screen } from '@testing-library/react'
import React, { MutableRefObject, useRef } from 'react'

import { useClickAway } from './useClickAway.js'

type HookProps = {
  onClickAway?: typeof useClickAwayCallback
  eventTypes?: string[]
}

let useClickAwayCallback = vi.fn()
let awayTargetRef: MutableRefObject<HTMLDivElement | null>
let awayHook = (props?: HookProps): void => {
  let { onClickAway = useClickAwayCallback, eventTypes } = props || {}
  useClickAway(awayTargetRef, onClickAway, eventTypes)
}

beforeEach(async () => {
  let {
    result: { current: targetRef }
  } = renderHook<
    MutableRefObject<HTMLDivElement | null>,
    HTMLDivElement | null
  >(useRef, {
    initialProps: null
  })
  awayTargetRef = targetRef
  render(
    <div data-testid="wrapper">
      <div>
        <div data-testid="target" ref={awayTargetRef}>
          Click area
        </div>
      </div>
    </div>
  )
})

afterEach(() => {
  useClickAwayCallback.mockClear()
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
  let addEventListener = vi.fn()
  let removeEventListener = vi.fn()
  vi.stubGlobal('addEventListener', addEventListener)
  vi.stubGlobal('removeEventListener', removeEventListener)

  renderHook<void, HookProps>(awayHook)

  // expect(addEventListener).toBeCalledTimes(0)
  // expect(nextClickAwayCallback).toBeCalledTimes(2)
})
it('taked custom eventTypes', () => {
  // проверить что на стаб добавляются кастомные типы
})
it('unsubscribes on exit', () => {
  // проверить что со стаба сносятся подписки при анмаунте
})
it('resubscribes on eventTypes change', () => {
  // проверить что со стаба сносятся и добавляются подписки при смене eventTypes
})
it('resubscribes on ref.current change', () => {
  // проверить что со стаба сносятся и добавляются подписки при смене ref.current
})
