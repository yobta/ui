import { test, expect, vi } from 'vitest'

// @ts-ignore
import bgPlugin from './bgPlugin.cjs'

const prefix = (str: string): string => str

test('bagePlugin', () => {
  let addUtilities = vi.fn()

  bgPlugin.handler({ addUtilities, prefix })
  expect(addUtilities).toBeCalledWith(
    {
      '.yobta-bg-paper': {
        '@apply bg-paper dark:bg-paper-dark': {}
      },
      '.yobta-bg-paper-2': {
        '@apply bg-paper-2 dark:bg-paper-2-dark': {}
      },
      '.yobta-bg-paper-3': {
        '@apply bg-paper-3 dark:bg-paper-3-dark': {}
      },
      '.yobta-bg-primary': {
        '@apply bg-paper-primary dark:bg-paper-primary-dark': {}
      },
      '.yobta-bg-secondary': {
        '@apply bg-paper-secondary dark:bg-paper-secondary-dark': {}
      },
      '.yobta-bg-error': {
        '@apply bg-paper-error dark:bg-paper-error-dark': {}
      },
      '.yobta-bg-success': {
        '@apply bg-paper-success dark:bg-paper-success-dark': {}
      },
      '.yobta-bg-warning': {
        '@apply bg-paper-warning dark:bg-paper-warning-dark': {}
      },
      '.yobta-bg-info': {
        '@apply bg-paper-info dark:bg-paper-info-dark': {}
      },

      '.yobta-bg-1': {
        '@apply bg-color-1 dark:bg-color-1-dark': {}
      },
      '.yobta-bg-2': {
        '@apply bg-color-2 dark:bg-color-2-dark': {}
      },
      '.yobta-bg-3': {
        '@apply bg-color-3 dark:bg-color-3-dark': {}
      },
      '.yobta-bg-4': {
        '@apply bg-color-4 dark:bg-color-4-dark': {}
      },
      '.yobta-bg-5': {
        '@apply bg-color-5 dark:bg-color-5-dark': {}
      },
      '.yobta-bg-6': {
        '@apply bg-color-6 dark:bg-color-6-dark': {}
      },
      '.yobta-bg-7': {
        '@apply bg-color-7 dark:bg-color-7-dark': {}
      },
      '.yobta-bg-8': {
        '@apply bg-color-8 dark:bg-color-8-dark': {}
      },
      '.yobta-bg-9': {
        '@apply bg-color-9 dark:bg-color-9-dark': {}
      },
      '.yobta-bg-10': {
        '@apply bg-color-10 dark:bg-color-10-dark': {}
      },
      '.yobta-bg-11': {
        '@apply bg-color-11 dark:bg-color-11-dark': {}
      },
      '.yobta-bg-12': {
        '@apply bg-color-12 dark:bg-color-12-dark': {}
      },
      '.yobta-bg-13': {
        '@apply bg-color-13 dark:bg-color-13-dark': {}
      },
      '.yobta-bg-14': {
        '@apply bg-color-14 dark:bg-color-14-dark': {}
      },
      '.yobta-bg-15': {
        '@apply bg-color-15 dark:bg-color-15-dark': {}
      },
      '.yobta-bg-16': {
        '@apply bg-color-16 dark:bg-color-16-dark': {}
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
