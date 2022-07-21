import { test, expect, vi, it } from 'vitest'

// @ts-ignore
import inkPlugin from './inkPlugin.cjs'

const prefix = (str: string): string => str

it('requires theme.colors.ink', () => {
  expect(() => {
    inkPlugin.handler({ theme: () => ({}) })
  }).toThrowError('Yobta inkPlugin: theme.colors.ink is required')

  expect(() => {
    inkPlugin.handler({
      theme: () => ({
        colors: {
          ink: null
        }
      })
    })
  }).toThrowError('Yobta inkPlugin: theme.colors.ink is required')
})

test('inkPlugin DEFAULT/dark is not string', () => {
  let addUtilities = vi.fn()
  let theme = (): typeof colors => colors
  let values: [number, null, undefined, object] = [123, null, undefined, {}]

  type Field = string | number | null | undefined | object

  interface Colors {
    ink: {
      DEFAULT: Field
      dark: Field
    }
  }

  let colors: Colors = {
    ink: {
      DEFAULT: 'abc',
      dark: 'abc'
    }
  }

  values.forEach(item => {
    expect(() => {
      colors.ink.DEFAULT = item
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(
      'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
    )
  })
  colors.ink.DEFAULT = 'abc'

  values.forEach(item => {
    expect(() => {
      colors.ink.dark = item
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError('Yobta inkPlugin: theme.colors.ink.dark should be a string')
  })
})

test('inkPlugin', () => {
  let addUtilities = vi.fn()
  let colors = {
    ink: {
      DEFAULT: 'ink',
      dark: 'inkDark',
      2: { DEFAULT: 'ink2', dark: 'ink2Dark' },
      primary: { DEFAULT: 'inkPrimary', dark: 'inkPrimaryDark' },
      secondary: { DEFAULT: 'inkSecondary', dark: 'inkSecondaryDark' },
      error: { DEFAULT: 'inkError', dark: 'inkErrorDark' },
      success: { DEFAULT: 'inkSuccess', dark: 'inkSuccessDark' },
      warning: { DEFAULT: 'inkWarning', dark: 'inkWarningDark' },
      info: { DEFAULT: 'inkInfo', dark: 'inkInfoDark' },
      border: { DEFAULT: 'inkBorder', dark: 'inkBorderDark' }
    }
  }
  let theme = (): typeof colors => colors

  inkPlugin.handler({ addUtilities, prefix, theme })

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

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-secondary': {
      '@apply border-current text-ink-secondary dark:text-ink-secondary-dark':
        {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-error': {
      '@apply border-current text-ink-error dark:text-ink-error-dark': {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-success': {
      '@apply border-current text-ink-success dark:text-ink-success-dark': {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-warning': {
      '@apply border-current text-ink-warning dark:text-ink-warning-dark': {}
    }
  })

  expect(addUtilities).toBeCalledWith({
    '.yobta-ink-border': {
      '@apply border-current text-ink-border dark:text-ink-border-dark': {}
    }
  })
})

test('inkPlugin inkColors invalid values', () => {
  let addUtilities = vi.fn()
  let theme = (): typeof colors => colors
  let values: [number, null, undefined, object] = [123, null, undefined, {}]
  type Field = string | number | null | undefined | object

  interface Colors {
    ink: {
      DEFAULT: string
      dark: string
      primary: {
        DEFAULT: Field
        dark: Field
      }
    }
  }

  let colors: Colors = {
    ink: {
      DEFAULT: 'abc',
      dark: 'abc',
      primary: {
        DEFAULT: 'abc',
        dark: 'abc'
      }
    }
  }

  values.forEach(item => {
    expect(() => {
      colors.ink.primary.DEFAULT = item
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(
      `Yobta inkPlugin: theme.colors.ink.primary: DEFAULT should be a string`
    )

    colors.ink.primary.DEFAULT = 'abc'

    expect(() => {
      colors.ink.primary.dark = item
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(
      `Yobta inkPlugin: theme.colors.ink.primary: dark should be a string`
    )
  })
})

test('inkPlugin inkColors invalid types of fields', () => {
  let addUtilities = vi.fn()
  let theme = (): typeof colors => colors
  let values: string[] = ['one', 'tester', 'three', '']

  interface Colors {
    ink: {
      DEFAULT: string
      dark: string
      primary: object
    }
  }

  let colors: Colors = {
    ink: {
      DEFAULT: 'default',
      dark: 'dark',
      primary: {}
    }
  }

  values.forEach(item => {
    expect(() => {
      colors.ink.primary[item] = 'value'
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(
      `Yobta inkPlugin: theme.colors.ink.primary have invalid field`
    )
  })
})
