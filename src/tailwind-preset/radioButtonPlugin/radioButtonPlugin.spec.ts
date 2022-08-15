import { test, expect, vi } from 'vitest'

// @ts-ignore
import radioButtonPlugin from './radioButtonPlugin.cjs'

const prefix = (str: string): string => str

test('radioButtonPlugin', () => {
  let addBase = vi.fn()

  radioButtonPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith({
    '.yobta-radio': {
      '@apply yobta-no-tap appearance-none border-2 border-current rounded-full cursor-pointer relative':
        {},
      'height': '1.5rem',
      'width': '1.5rem',
      'minWidth': '1.5rem',

      '&::before': {
        '@apply absolute bg-current left-1 top-1 right-1 bottom-1 transform scale-0 transition duration-100':
          {},
        'borderRadius': 'inherit',
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
