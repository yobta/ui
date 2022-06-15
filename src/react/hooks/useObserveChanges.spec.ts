import { it, expect, vi, describe, afterEach, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useObserveChanges } from './useObserveChanges.js'

const renderCountMock = vi.fn()
const observeMock = vi.fn()
const unobserveMock = vi.fn()

const resizeObserverMock = vi.fn(() => ({
  observe: observeMock,
  unobserve: unobserveMock
}))
const addEventListenerMock = vi.fn()
const removeEventListenerMock = vi.fn()

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', resizeObserverMock)
  vi.stubGlobal('addEventListener', addEventListenerMock)
  vi.stubGlobal('removeEventListener', removeEventListenerMock)
})

afterEach(() => {
  renderCountMock.mockClear()
  resizeObserverMock.mockClear()
  observeMock.mockClear()
  unobserveMock.mockClear()
  addEventListenerMock.mockClear()
  removeEventListenerMock.mockClear()
})

describe('ObserveChangesHook', () => {
  it('is passive when has no producerNode', () => {
    let ref = renderHook(
      (...args) => {
        renderCountMock()
        useObserveChanges(...args)
      },
      {
        initialProps: { producerNode: null }
      }
    )
    expect(ref.result.current).toBe(undefined)
    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(0)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(0)
    expect(removeEventListenerMock).toBeCalledTimes(0)

    ref.unmount()

    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(0)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(0)
    expect(removeEventListenerMock).toBeCalledTimes(0)
  })
  it('is passive when disabled', () => {
    let producerNode = document.createElement('button')
    let ref = renderHook(
      (...args) => {
        renderCountMock()
        useObserveChanges(...args)
      },
      {
        initialProps: { producerNode, disabled: true }
      }
    )
    expect(ref.result.current).toBe(undefined)
    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(0)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(0)
    expect(removeEventListenerMock).toBeCalledTimes(0)

    ref.unmount()

    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(0)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(0)
    expect(removeEventListenerMock).toBeCalledTimes(0)
  })

  it('is active when has producerNode', () => {
    let ref = renderHook(
      (...args) => {
        renderCountMock()
        useObserveChanges(...args)
      },
      {
        initialProps: { producerNode: document.createElement('button') }
      }
    )
    expect(ref.result.current).toBe(undefined)
    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(addEventListenerMock.mock.calls).toEqual([
      [
        'scroll',
        expect.any(Function),
        {
          passive: true
        }
      ],
      [
        'resize',
        expect.any(Function),
        {
          passive: true
        }
      ]
    ])
    expect(removeEventListenerMock).toBeCalledTimes(0)

    ref.unmount()

    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(1)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(removeEventListenerMock).toBeCalledTimes(2)
  })

  it('updates listeners when producerNode is changed', () => {
    let ref = renderHook(
      (...args) => {
        renderCountMock()
        useObserveChanges(...args)
      },
      {
        initialProps: { producerNode: document.createElement('span') }
      }
    )
    expect(ref.result.current).toBe(undefined)
    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(removeEventListenerMock).toBeCalledTimes(0)

    ref.rerender({ producerNode: document.createElement('div') })

    expect(observeMock).toBeCalledTimes(2)
    expect(renderCountMock).toBeCalledTimes(2)
    expect(unobserveMock).toBeCalledTimes(1)
    expect(addEventListenerMock).toBeCalledTimes(4)
    expect(removeEventListenerMock).toBeCalledTimes(2)

    ref.unmount()

    expect(renderCountMock).toBeCalledTimes(2)
    expect(observeMock).toBeCalledTimes(2)
    expect(unobserveMock).toBeCalledTimes(2)
    expect(addEventListenerMock).toBeCalledTimes(4)
    expect(removeEventListenerMock).toBeCalledTimes(4)
  })

  it('updates listeners when disabled is changed', () => {
    let producerNode = document.createElement('span')
    let ref = renderHook(
      (...args) => {
        renderCountMock()
        useObserveChanges(...args)
      },
      {
        initialProps: { producerNode, disabled: false }
      }
    )
    expect(ref.result.current).toBe(undefined)
    expect(renderCountMock).toBeCalledTimes(1)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(0)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(removeEventListenerMock).toBeCalledTimes(0)

    ref.rerender({ producerNode, disabled: true })

    expect(renderCountMock).toBeCalledTimes(2)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(1)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(removeEventListenerMock).toBeCalledTimes(2)

    ref.unmount()

    expect(renderCountMock).toBeCalledTimes(2)
    expect(observeMock).toBeCalledTimes(1)
    expect(unobserveMock).toBeCalledTimes(1)
    expect(addEventListenerMock).toBeCalledTimes(2)
    expect(removeEventListenerMock).toBeCalledTimes(2)
  })

  it('re-renders when receives events', () => {
    let producerNode = document.createElement('span')
    renderHook(() => {
      renderCountMock()
      useObserveChanges({ producerNode })
    })

    expect(renderCountMock).toBeCalledTimes(1)

    act(() => {
      // @ts-ignore
      let listener: Function = resizeObserverMock.mock.calls[0][0]
      listener()
    })

    expect(renderCountMock).toBeCalledTimes(2)

    act(() => {
      let listener: Function = addEventListenerMock.mock.calls[0][1]
      listener()
    })
    expect(renderCountMock).toBeCalledTimes(3)
    act(() => {
      let listener: Function = addEventListenerMock.mock.calls[1][1]
      listener()
    })
    expect(renderCountMock).toBeCalledTimes(4)
  })

  it('works without ResizeObserver', () => {
    vi.stubGlobal('ResizeObserver', undefined)
    let producerNode = document.createElement('span')
    renderHook(() => {
      renderCountMock()
      useObserveChanges({ producerNode })
    })

    expect(renderCountMock).toBeCalledTimes(1)
    expect(resizeObserverMock).toBeCalledTimes(0)

    expect(renderCountMock).toBeCalledTimes(1)

    act(() => {
      let listener: Function = addEventListenerMock.mock.calls[0][1]
      listener()
    })
    expect(renderCountMock).toBeCalledTimes(2)
    act(() => {
      let listener: Function = addEventListenerMock.mock.calls[1][1]
      listener()
    })

    expect(renderCountMock).toBeCalledTimes(3)
  })
})
