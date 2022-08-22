import { it, expect, vi } from 'vitest'

// @ts-ignore
import badgePlugin from './badgePlugin.cjs'

const prefix = (str: string): string => str

it('requires theme.colors.yobta', () => {
  ;[
    {},
    {
      yobta: null
    },
    {
      yobta: NaN
    }
  ].forEach(colors => {
    expect(() => {
      badgePlugin.handler({ theme: () => colors })
    }).toThrowError('Yobta badgePlugin: theme.colors.yobta is required')
  })
})

it('requires theme.colors.yobta to have more enrties', () => {
  expect(() => {
    badgePlugin.handler({
      theme: () => ({
        yobta: {}
      })
    })
  }).toThrowError(
    'Yobta badgePlugin: theme.colors.yobta should have more entries'
  )
})

it('requires theme.colors.yobta.primary.ink.DEFAULT to be a string', () => {
  ;[{ primary: { ink: { DEFAULT: 1 } } }].forEach(yobta => {
    expect(() => {
      badgePlugin.handler({
        theme: () => ({
          yobta
        })
      })
    }).toThrowError(
      'Yobta badgePlugin: theme.colors.yobta.primary.ink.DEFAULT should be a string'
    )
  })
})

it('requires theme.colors.yobta.ink.dark to be a string', () => {
  ;[{ primary: { ink: { DEFAULT: '#123', dark: 1 } } }].forEach(yobta => {
    expect(() => {
      badgePlugin.handler({
        theme: () => ({
          yobta
        })
      })
    }).toThrowError(
      'Yobta badgePlugin: theme.colors.yobta.primary.ink.dark should be a string'
    )
  })
})

it('adds styles to base and utilities @layer', () => {
  let addBase = vi.fn()
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

  badgePlugin.handler({ addBase, addUtilities, prefix, theme })
  expect(addBase).toBeCalledWith({
    '.yobta-badge': {
      '@apply bg-ink-border font-medium gap-x-1 inline-flex items-center leading-6 px-2 rounded-full text-current text-sm':
        {}
    }
  })
  expect(addUtilities).toBeCalledWith({
    '.yobta-badge-paper': {
      '@apply yobta-badge yobta-paper': {}
    },
    '.yobta-badge-paper-2': {
      '@apply yobta-badge yobta-paper-2': {}
    },
    '.yobta-badge-paper-3': {
      '@apply yobta-badge yobta-paper-3': {}
    },
    '.yobta-badge-primary': {
      '@apply yobta-badge yobta-primary': {}
    },
    '.yobta-badge-secondary': {
      '@apply yobta-badge yobta-secondary': {}
    },
    '.yobta-badge-error': {
      '@apply yobta-badge yobta-error': {}
    },
    '.yobta-badge-success': {
      '@apply yobta-badge yobta-success': {}
    },
    '.yobta-badge-warning': {
      '@apply yobta-badge yobta-warning': {}
    },
    '.yobta-badge-info': {
      '@apply yobta-badge yobta-info': {}
    }
  })
})
