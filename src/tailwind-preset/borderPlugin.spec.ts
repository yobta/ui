import { test, expect, vi } from 'vitest'

// @ts-ignore
import borderPlugin from './borderPlugin.cjs'

const prefix = (str: string): string => str

test('colors', async () => {
  let addUtilities = vi.fn()
  let colors = {
    paper: {
      DEFAULT: '#FCFCFC',
      dark: '#2A2D35',
      2: { DEFAULT: '#EBEBEB', dark: '#4F5462' },
      primary: { DEFAULT: '#FADC4F', dark: '#E2C438' }
    },
    color: {
      1: { DEFAULT: '#FAD8C2', dark: '#4C474B' }
    },
    thisUserColorShouldBeFiltered: '#ccc',
    thisUserColorSetShouldBeFiltered: {},
    thisUserColorSet2ShouldBeFiltered: {
      filter: '#ccc',
      me: { veirdColor: '#ccc' },
      1: { veirdColor: '#ccc' }
    }
  }
  let theme = (): typeof colors => colors

  borderPlugin.handler({ addUtilities, prefix, theme })

  expect(addUtilities).toBeCalledWith(
    {
      '.yobta-border-paper': {
        '@apply border border-paper dark:border-paper-dark': {}
      },
      '.yobta-border-paper-2': {
        '@apply border border-paper-2 dark:border-paper-2-dark': {}
      },
      '.yobta-border-paper-primary': {
        '@apply border border-paper-primary dark:border-paper-primary-dark': {}
      },
      '.yobta-border-color-1': {
        '@apply border border-color-1 dark:border-color-1-dark': {}
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
