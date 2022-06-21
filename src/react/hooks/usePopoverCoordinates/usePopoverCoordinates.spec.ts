import { expect, describe, it } from 'vitest'
import { renderHook } from '@testing-library/react'

import { usePopoverCoordinates } from './usePopoverCoordinates.js'

describe('usePopoverCoordinates Hook', () => {

  let consumerNode = {
    getBoundingClientRect: () => ({
      top: 100,
      left: 100,
      width: 100,
      height: 100
    })
  } as HTMLElement

  let producerNode = {
    getBoundingClientRect: () => ({
      top: 200,
      left: 200,
      width: 100,
      height: 100
    })
  } as HTMLElement

  it('is undefined when consumerNode and producerNode are null', () => {
    let { result } = renderHook(() => {
      return usePopoverCoordinates({
        placement: 'top',
        preferredPlacement: 'top',
        consumerNode: null,
        producerNode: null,
        offset: 8
      })
    })
    expect(result.current).toEqual(null)
  })
  it('is undefined when placement and preferredPlacement are undefined', () => {
    let { result } = renderHook(() => {
      return usePopoverCoordinates({
        placement: undefined,
        preferredPlacement: undefined,
        consumerNode: null,
        producerNode: null,
        offset: 8
      })
    })
    expect(result.current).toEqual(null)
  })
  it('is when consumerNode and producerNode are defined', () => {
    let { result } = renderHook(() => {
      return usePopoverCoordinates({
        placement: 'right',
        preferredPlacement: 'left',
        consumerNode,
        producerNode,
        offset: 8
      })
    })

    expect(result.current?.placement).toEqual('right')
    expect(result.current?.x).toEqual(NaN)
    expect(result.current?.y).toEqual(NaN)
  })
  it('is undefined when offset is undefined', () => {
    let { result } = renderHook(() => {
      return usePopoverCoordinates({
        placement: 'left',
        preferredPlacement: 'bottom',
        consumerNode,
        producerNode,
        offset: undefined
      })
    })

    expect(result.current?.placement).toEqual('left')
    expect(result.current?.x).toEqual(NaN)
    expect(result.current?.y).toEqual(NaN)
  })
})
