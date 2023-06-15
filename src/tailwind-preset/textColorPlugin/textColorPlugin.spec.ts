import { test, expect, vi } from 'vitest'

// @ts-ignore
import textColorPlugin from './textColorPlugin.cjs'

const prefix = (str: string): string => str

test('color', () => {
  let addUtilities = vi.fn()
  let colors = {
    ink: {
      DEFAULT: '#414141',
      dark: '#FCFCFC',
      2: { DEFAULT: '#7B8B99', dark: '#5B6772' },
      primary: { DEFAULT: '#C7A713', dark: '#DCCA76' }
    },
    link: {
      DEFAULT: '#120EED',
      dark: '#9C9AFF',
      hover: { DEFAULT: '#5F5CFF', dark: '#ACAAF0' }
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
      '.yobta-text-ink': {
        '@apply text-ink dark:text-ink-dark': {}
      },
      '.yobta-text-ink-2': {
        '@apply text-ink-2 dark:text-ink-2-dark': {}
      },
      '.yobta-text-ink-primary': {
        '@apply text-ink-primary dark:text-ink-primary-dark': {}
      },
      '.yobta-text-link': {
        '@apply text-link dark:text-link-dark': {}
      },
      '.yobta-text-link-hover': {
        '@apply text-link-hover dark:text-link-hover-dark': {}
      },
      '.yobta-text-color-1': {
        '@apply text-color-1 dark:text-color-1-dark': {}
      }
    },
    { variants: ['checked', 'focus-within'] }
  )
})
