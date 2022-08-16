import { it, expect, vi, beforeEach, afterAll } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { usePatchState } from './usePatchState.js'

type HookProps = { count: number; flag?: boolean }
type HookResult = ReturnType<typeof usePatchState<HookProps>>

beforeEach(async () => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

it('patches state with object', () => {
  let {result} = renderHook<HookResult, HookProps>(usePatchState, { initialProps: {count: 10}})

  let [state, patchState] = result.current;
  expect(state).toEqual({ count: 10 })

  act(() => {
    patchState({ count: 1 })
  })

  expect(result.current[0]).toEqual({count: 1})
})

it('patches state with function', () => {
  let {result} = renderHook<HookResult, HookProps>(usePatchState, { initialProps: {count: 10}})

  let [state, patchState] = result.current;
  expect(state).toEqual({ count: 10 })

  act(() => { patchState(() => ({ count: 1 })); })

  expect(result.current[0]).toEqual({count: 1})
})

it('removes key in state', () => {
  let {result} = renderHook<HookResult, HookProps>(usePatchState, { initialProps: {count: 3, flag: true}})

  let [state, patchState] = result.current;
  expect(state).toEqual({ count: 3, flag: true })

  act(() => {
    patchState({ flag: undefined })
  })

  expect(result.current[0]).toEqual({count: 3})
})

it('stays same when initalState changes', () => {
  let {result, rerender} = renderHook<HookResult, HookProps>(usePatchState, { initialProps: {count: 3 }})

  expect(result.current[0]).toEqual({ count: 3 })

  rerender({ count: 5 })

  expect(result.current[0]).toEqual({count: 3})
})
