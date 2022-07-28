import { test, expect, vi } from 'vitest'

// @ts-ignore
import checkboxPlugin from './checkboxPlugin.cjs'

const prefix = (str: string): string => str

test('checkboxPlugin', () => {
  let addBase = vi.fn()

  checkboxPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-checkbox': {
      '@apply appearance-none border-2 border-current rounded cursor-pointer relative':
        {},
      'height': '1.5rem',
      'width': '1.5rem',
      'minWidth': '1.5rem',
      '&::before': {
        '@apply absolute bg-current left-0.5 top-0.5 right-0.5 bottom-0.5 rounded-sm transform scale-0 transition duration-100':
          {},
        'content': '""'
      },
      '&:checked::before': {
        '@apply scale-100': {}
      },
      '&:invalid': {
        '@apply bg-ink-error dark:bg-ink-error-dark text-ink-error dark:text-ink-error-dark':
          {}
      }
    }
  })
})
