import { test, expect, vi } from 'vitest'

// @ts-ignore
import buttonVariantsPlugin from './buttonVariantsPlugin.cjs'

const prefix = (str: string): string => str

test('buttonVariantsPlugin', async () => {
  let addUtilities = vi.fn()
  let colors = {
    yobta: {
      'paper': {
        ink: { DEFAULT: 'paperText', dark: 'paperDarkText' },
        paper: { DEFAULT: 'paper', dark: 'paperDark' },
        selected: {
          paper: { DEFAULT: 'selected', dark: 'selectedDark' },
          ink: { DEFAULT: 'selectedText', dark: 'selectedTextDark' }
        }
      },
      'paper-2': {
        ink: { DEFAULT: 'paper2Text', dark: 'paper2DarkText' },
        paper: { DEFAULT: 'paper2', dark: 'paper2Dark' },
        selected: {
          paper: { DEFAULT: 'selected2', dark: 'selected2Dark' },
          ink: { DEFAULT: 'selected2Text', dark: 'selected2TextDark' }
        }
      },
      'paper-3': {
        ink: { DEFAULT: 'paper3Text', dark: 'paper3DarkText' },
        paper: { DEFAULT: 'paper3', dark: 'paper3Dark' },
        selected: {
          paper: { DEFAULT: 'selected3', dark: 'selected3Dark' },
          ink: { DEFAULT: 'selected3Text', dark: 'selected3TextDark' }
        }
      },
      'primary': {
        ink: { DEFAULT: 'paperPrimaryText', dark: 'paperPrimaryDarkText' },
        paper: { DEFAULT: 'paperPrimary', dark: 'paperPrimaryDark' },
        selected: {
          paper: { DEFAULT: 'selectedPrimary', dark: 'selectedPrimaryDark' },
          ink: {
            DEFAULT: 'selectedPrimaryText',
            dark: 'selectedPrimaryTextDark'
          }
        }
      },
      'secondary': {
        ink: { DEFAULT: 'paperSecondaryText', dark: 'paperSecondaryDarkText' },
        paper: { DEFAULT: 'paperSecondary', dark: 'paperSecondaryDark' },
        selected: {
          paper: {
            DEFAULT: 'selectedSecondary',
            dark: 'selectedSecondaryDark'
          },
          ink: {
            DEFAULT: 'selectedSecondaryText',
            dark: 'selectedSecondaryTextDark'
          }
        }
      },
      'error': {
        ink: { DEFAULT: 'paperErrorText', dark: 'paperErrorDarkText' },
        paper: { DEFAULT: 'paperError', dark: 'paperErrorDark' }
      },
      'success': {
        ink: { DEFAULT: 'paperSuccessText', dark: 'paperSuccessDarkText' },
        paper: { DEFAULT: 'paperSuccess', dark: 'paperSuccessDark' }
      },
      'warning': {
        ink: { DEFAULT: 'paperWarningText', dark: 'paperWarningDarkText' },
        paper: { DEFAULT: 'paperWarning', dark: 'paperWarningDark' }
      },
      'info': {
        ink: { DEFAULT: 'paperInfoText', dark: 'paperInfoDarkText' },
        paper: { DEFAULT: 'paperInfo', dark: 'paperInfoDark' }
      }
    }
  }
  let theme = (): typeof colors => colors

  buttonVariantsPlugin.handler({ addUtilities, prefix, theme })

  expect(addUtilities).toBeCalledWith({
    '.yobta-button-paper': {
      '@apply yobta-button yobta-paper': {}
    },
    '.yobta-button-paper-2': {
      '@apply yobta-button yobta-paper-2': {}
    },
    '.yobta-button-paper-3': {
      '@apply yobta-button yobta-paper-3': {}
    },
    '.yobta-button-primary': {
      '@apply yobta-button yobta-primary': {}
    },
    '.yobta-button-secondary': {
      '@apply yobta-button yobta-secondary': {}
    },
    '.yobta-button-error': {
      '@apply yobta-button yobta-error': {}
    },
    '.yobta-button-success': {
      '@apply yobta-button yobta-success': {}
    },
    '.yobta-button-warning': {
      '@apply yobta-button yobta-warning': {}
    },
    '.yobta-button-info': {
      '@apply yobta-button yobta-info': {}
    }
  })
})
