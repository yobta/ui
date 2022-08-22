import { it, expect, vi, beforeEach } from 'vitest'
// @ts-expect-error
import React, { MutableRefObject, useRef } from 'react'
import { render, renderHook } from '@testing-library/react'

import { matchElement } from './matchElement.js'

let targetRef: MutableRefObject<HTMLDivElement | null>

let createRef = (): MutableRefObject<HTMLDivElement | null> =>
  renderHook<MutableRefObject<HTMLDivElement | null>, HTMLDivElement | null>(
    useRef,
    { initialProps: null }
  ).result.current

let matchers = ['matcher1', 'matcher2', 'matcher3']

beforeEach(() => {
  targetRef = createRef()
  render(
    <div data-testid="target" ref={targetRef}>
      Test
    </div>
  )
})

it('returns false when element is null', async () => {
  let result = matchElement(null, [])
  expect(result).toBe(false)
})

it('returns true when any matcher return true', async () => {
  let matchesSpy = vi
    .spyOn(targetRef.current!, 'matches')
    .mockImplementation(matcher => matcher === matchers[1])
  let result = matchElement(targetRef.current, matchers)

  expect(matchesSpy).toBeCalledTimes(2)
  expect(result).toBe(true)
})

it('returns false when all matchers return false', async () => {
  let matchesSpy = vi
    .spyOn(targetRef.current!, 'matches')
    .mockImplementation(() => false)
  let result = matchElement(targetRef.current, matchers)

  expect(matchesSpy).toBeCalledTimes(matchers.length)
  expect(result).toBe(false)
})

it('returns true when any matcher return true and other throw errors', async () => {
  let matchesSpy = vi
    .spyOn(targetRef.current!, 'matches')
    .mockImplementation(matcher => {
      if (matcher === matchers[matchers.length - 1]) return true
      throw new Error('Not supported')
    })
  let result = matchElement(targetRef.current, matchers)

  expect(matchesSpy).toBeCalledTimes(matchers.length)
  expect(result).toBe(true)
})
