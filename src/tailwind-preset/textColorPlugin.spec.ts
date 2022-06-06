import { test, expect, vi } from 'vitest'

// @ts-ignore
import textColorPlugin from './textColorPlugin.cjs'

const prefix = (str: string): string => str

test('color', async () => {
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

  textColorPlugin.handler({ addUtilities, prefix, theme })

  expect(addUtilities).toBeCalledWith(
    {
      '.ui-text-ink': {
        '@apply text-ink dark:text-ink-dark': {}
      },
      '.ui-text-ink-2': {
        '@apply text-ink-2 dark:text-ink-2-dark': {}
      },
      '.ui-text-ink-primary': {
        '@apply text-ink-primary dark:text-ink-primary-dark': {}
      },
      '.ui-text-color-1': {
        '@apply text-color-1 dark:text-color-1-dark': {}
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
