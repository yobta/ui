/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { it, expect, vi } from 'vitest'

import { whenOnline } from '../whenOnline'

it('should be eventually true when online', async () => {
  vi.stubGlobal('navigator', { onLine: true })
  const result = await whenOnline()
  expect(result).toBe(undefined)
})

it('shuld wait for online event when pffline', async () => {
  const addEventListenerMock = vi.fn()
  vi.stubGlobal('navigator', { onLine: false })
  vi.stubGlobal('addEventListener', addEventListenerMock)

  const promise = whenOnline()
  expect(addEventListenerMock).toHaveBeenCalledWith(
    'online',
    expect.any(Function)
  )

  addEventListenerMock.mock.calls[0][1]()
  expect(promise).resolves.toBe(undefined)
})
