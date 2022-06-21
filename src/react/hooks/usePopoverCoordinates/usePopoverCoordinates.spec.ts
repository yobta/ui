import { expect, describe, it } from 'vitest'
import { renderHook } from '@testing-library/react'

import { usePopoverCoordinates } from './usePopoverCoordinates.js'

describe('usePopoverCoordinates Hook', () => {

  let consumerNode = {
    getBoundingClientRect: () => ({
      top: 100,
      bottom: 100,
      height: 100,
      width: 100
    })
  } as HTMLElement

  let producerNode = {
    getBoundingClientRect: () => ({
      top: 100,
      bottom: 100,
      height: 100,
      width: 100
    })
  } as HTMLElement

  it('is undefined when consumerNode and producerNode are null', () => {
    let { result } = renderHook(() => {
      usePopoverCoordinates({
        placement: 'top',
        preferredPlacement: 'top',
        consumerNode: null,
        producerNode: null,
        offset: 8
      })
    })
    expect(result).toEqual({ undefined })
  })
  it('is undefined when placement and preferredPlacement are undefined', () => {
    let { result } = renderHook(() => {
      usePopoverCoordinates({
        placement: undefined,
        preferredPlacement: undefined,
        consumerNode: null,
        producerNode: null,
        offset: 8
      })
    })
    expect(result).toEqual({ undefined })
  })
  it('is when consumerNode and producerNode are defined', () => {
    let { result } = renderHook(() => {
      usePopoverCoordinates({
        placement: 'right',
        preferredPlacement: 'left',
        consumerNode,
        producerNode,
        offset: 8
      })
    })

    expect(result).toEqual({ undefined })
  })
  it('is undefined when offset is undefined', () => {
    let { result } = renderHook(() => {
      usePopoverCoordinates({
        placement: 'right',
        preferredPlacement: 'left',
        consumerNode,
        producerNode,
        offset: undefined
      })
    })

    expect(result).toEqual({ undefined })
  })
})
