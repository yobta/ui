import { test, expect, vi } from 'vitest'

// @ts-ignore
import inkPlugin from './inkPlugin.cjs'

const prefix = (str: string): string => str

test('inkPlugin colors is {}', () => {
  expect(() => {
    let colors = {}
    let theme = (): typeof colors => colors

    inkPlugin.handler({ theme })
  }).toThrowError('Yobta inkPlugin: theme.colors.ink is required')
})

test('inkPlugin theme is null', () => {
  expect(() => {
    let theme = (): null => null

    inkPlugin.handler({ theme })
  }).toThrowError('Yobta inkPlugin: theme.colors.ink is required')
})

test('inkPlugin default/dark is not string', () => {
  let addUtilities = vi.fn()
  let theme = (): typeof colors => colors
  let message: string =
    'Yobta inkPlugin: theme.colors.ink.DEFAULT should be a string'
  let values: (number | null | undefined)[] = [123, null, undefined]
  let valueString: string = 'abc'

  interface Colors {
    ink: {
      DEFAULT: string | number | null | undefined
      dark: string | number | null | undefined
    }
  }

  let colors: Colors = {
    ink: {
      DEFAULT: valueString,
      dark: valueString
    }
  }

  values.forEach(item => {
    expect(() => {
      colors.ink.DEFAULT = valueString
      colors.ink.dark = item
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(message)
  })

  values.forEach(item => {
    expect(() => {
      colors.ink.DEFAULT = item
      colors.ink.dark = valueString
      inkPlugin.handler({ addUtilities, prefix, theme })
    }).toThrowError(message)
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
