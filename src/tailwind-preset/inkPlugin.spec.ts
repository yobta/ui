import { test, expect, vi, it } from 'vitest'

// @ts-ignore
import inkPlugin from './inkPlugin.cjs'

const prefix = (str: string): string => str

it('requires theme.colors.ink', () => {
  ;[
    {},
    {
      ink: null
    },
    {
      ink: NaN
    }
  ].forEach(colors => {
    expect(() => {
      inkPlugin.handler({ theme: () => colors })
    }).toThrowError('Yobta inkPlugin: theme.colors.ink is required')
  })
})

it('requires theme.colors.ink.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(ink => {
    expect(() => {
      inkPlugin.handler({
        theme: () => ({
          ink
        })
      })
    }).toThrowError(
      'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
    )
  })
})

it('requires theme.colors.ink.dark to be a string', () => {
  ;[
    { DEFAULT: '#123' },
    { DEFAULT: '#123', dark: null },
    { DEFAULT: '#123', dark: 123 },
    { DEFAULT: '#123', dark: new Date() }
  ].forEach(ink => {
    expect(() => {
      inkPlugin.handler({
        theme: () => ({
          ink
        })
      })
    }).toThrowError('Yobta inkPlugin: theme.colors.ink.dark should be a string')
  })
})

it('requires theme.colors.ink to have more enrties', () => {
  ;[{ DEFAULT: '#123', dark: '#456' }].forEach(ink => {
    expect(() => {
      inkPlugin.handler({
        theme: () => ({
          ink
        })
      })
    }).toThrowError(
      'Yobta inkPlugin: theme.colors.ink should have more entries'
    )
  })
})

it('requires theme.colors.ink.x.DEFAULT to be a string', () => {
  ;[{ DEFAULT: '#123', dark: '#456', 2: { DEFAULT: 1 } }].forEach(ink => {
    expect(() => {
      inkPlugin.handler({
        theme: () => ({
          ink
        })
      })
    }).toThrowError(
      'Yobta inkPlugin: theme.colors.ink.2.DEFAULT should be a string'
    )
  })
})

it('requires theme.colors.ink.x.dark to be a string', () => {
  ;[{ DEFAULT: '#123', dark: '#456', 2: { DEFAULT: '#789', dark: 1 } }].forEach(
    ink => {
      expect(() => {
        inkPlugin.handler({
          theme: () => ({
            ink
          })
        })
      }).toThrowError(
        'Yobta inkPlugin: theme.colors.ink.2.dark should be a string'
      )
    }
  )
})

it('adds utilities', () => {
  let addUtilities = vi.fn()
  inkPlugin.handler({
    addUtilities,
    prefix,
    theme: () => ({
      ink: {
        DEFAULT: 'ink',
        dark: 'inkDark',
        2: { DEFAULT: 'ink2', dark: 'ink2Dark' },
        primary: { DEFAULT: 'inkPrimary', dark: 'inkPrimaryDark' }
      }
    })
  })
  expect(addUtilities).toBeCalledWith({
    '.yobta-ink': {
      '@apply border-current text-ink dark:text-ink-dark': {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-2': {
      '@apply border-current text-ink-2 dark:text-ink-2-dark': {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-primary': {
      '@apply border-current text-ink-primary dark:text-ink-primary-dark': {}
    }
  })
})
