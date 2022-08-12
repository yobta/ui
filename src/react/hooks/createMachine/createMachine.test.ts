import { it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { createMachine, Transitions } from './createMachine.js'


const transitionsFixture = {
  inited: new Set(['working', 'canceled', 'failed']),
  working: new Set(['completed', 'canceled', 'failed', 'stuck']),
  canceled: new Set(['inited']),
  completed: new Set(['inited']),
  failed: new Set(['inited'])
}

const transitions = transitionsFixture as Transitions<typeof transitionsFixture>

let useMachine: ReturnType<typeof createMachine<typeof transitionsFixture>>

type InitialState = Parameters<typeof useMachine>[0]
type HookResult = ReturnType<typeof useMachine>

beforeEach(async () => {
  useMachine = createMachine(transitions)
})

it('has initial state', async () => {
  let { result: { current: [state] }} = renderHook<HookResult, InitialState>(useMachine, { initialProps: 'inited' })
  expect(state).toBe('inited')
})

it('successfuly switch to allowed state', async () => {
  let { result } = renderHook<HookResult, InitialState>(useMachine, { initialProps: 'inited' })

  let next = result.current[1]
  act(() => { next('failed') })

  expect(result.current[0]).toBe('failed')
})

it('ignores switching to not allowed state', async () => {
  let { result} = renderHook<HookResult, InitialState>(useMachine, { initialProps: 'inited' })

  let next = result.current[1]
  act(() => { next('wrongstate' as any) })

  expect(result.current[0]).toBe('inited')
})
