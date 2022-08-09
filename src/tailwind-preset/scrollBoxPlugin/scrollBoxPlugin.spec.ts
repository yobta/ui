import { test, expect, vi } from 'vitest'

// @ts-ignore
import scrollBoxPlugin from './scrollBoxPlugin.cjs'

const prefix = (str: string): string => str

test('scrollBoxPlugin', () => {
  let addUtilities = vi.fn()

  scrollBoxPlugin.handler({ addUtilities, prefix })
  expect(addUtilities).toBeCalledWith({
    '.yobta-scroll-box': {
      'overflow': 'hidden',
      'scroll-behavior': 'smooth',
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '-webkit-overflow-scrolling': 'touch',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '.yobta-scroll-box-x': {
      '@apply yobta-scroll-box': {},
      'display': 'flex',
      'justifyContent': 'flex-start',
      'overflow-x': 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '.yobta-scroll-box-y': {
      '@apply yobta-scroll-box': {},
      'overflow-y': 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  })
})
