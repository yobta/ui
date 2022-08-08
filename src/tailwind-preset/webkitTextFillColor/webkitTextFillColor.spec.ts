import { test, expect, vi } from 'vitest'

// @ts-ignore
import webkitTextFillColor from './webkitTextFillColor.cjs'

const prefix = (str: string): string => str

test('webkitTextFillColor', () => {
  let addComponents = vi.fn()

  webkitTextFillColor.handler({ addComponents, prefix })
  expect(addComponents).toBeCalledWith()
})
