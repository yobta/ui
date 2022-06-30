/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { it, expect, vi } from 'vitest'

import { whenOnline } from './whenOnline.js'

it('should be eventually true when online', async () => {
  vi.stubGlobal('navigator', { onLine: true })
  let result = await whenOnline()
  expect(result).toBe(undefined)
})

it('shuld wait for online event and then unsubsribe', async () => {
  let addEventListenerMock = vi.fn()
  let removeEventListenerMock = vi.fn()
  vi.stubGlobal('navigator', { onLine: false })
  vi.stubGlobal('addEventListener', addEventListenerMock)
  vi.stubGlobal('removeEventListener', removeEventListenerMock)

  let promise = whenOnline()

  expect(removeEventListenerMock).toBeCalledTimes(0)
  expect(addEventListenerMock).toBeCalledTimes(1)
  expect(addEventListenerMock).toHaveBeenCalledWith(
    'online',
    expect.any(Function)
  )

  addEventListenerMock.mock.calls[0][1]()

  await expect(promise).resolves.toBe(undefined)
  expect(removeEventListenerMock).toBeCalledTimes(1)
  expect(removeEventListenerMock).toHaveBeenCalledWith(
    'online',
    expect.any(Function)
  )
})
