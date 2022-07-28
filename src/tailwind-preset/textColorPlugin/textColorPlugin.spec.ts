import { test, expect, vi } from 'vitest'

// @ts-ignore
import textColorPlugin from './textColorPlugin.cjs'

const prefix = (str: string): string => str

test('color', async () => {
  let addUtilities = vi.fn()
  let colors = {
    ink: {
      DEFAULT: '#414141',
      dark: '#FCFCFC',
      2: { DEFAULT: '#7B8B99', dark: '#5B6772' },
      primary: { DEFAULT: '#C7A713', dark: '#DCCA76' },
    },
    link: {
      DEFAULT: '#120EED',
      dark: '#9C9AFF',
      hover: { DEFAULT: '#5F5CFF', dark: '#ACAAF0' },
    },
    color: {
      1: { DEFAULT: '#FAD8C2', dark: '#4C474B' },
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
      '.ui-text-link': {
        '@apply text-link dark:text-link-dark': {}
      },
      '.ui-text-link-hover': {
        '@apply text-link-hover dark:text-link-hover-dark': {}
      },
      '.ui-text-color-1': {
        '@apply text-color-1 dark:text-color-1-dark': {}
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
