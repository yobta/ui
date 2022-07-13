import { test, expect, vi } from 'vitest'

// @ts-ignore
import selectedPlugin from './selectedPlugin.cjs'

const prefix = (str: string): string => str

test('selectedPlugin', async () => {
  let addUtilities = vi.fn()
  let colors = {
    selected: {
      1: {
        paper: { DEFAULT: 'selected', dark: 'selectedDark' },
        ink: { DEFAULT: 'selectedText', dark: 'selectedDarkText' }
      },
      2: {
        paper: { DEFAULT: 'selected2', dark: 'selectedDark2' },
        ink: { DEFAULT: 'selectedText2', dark: 'selectedDarkText2' }
      },
      3: {
        paper: { DEFAULT: 'selected3', dark: 'selectedDark3' },
        ink: { DEFAULT: 'selectedText3', dark: 'selectedDarkText3' }
      }
    }
  }
  let theme = (): typeof colors => colors

  selectedPlugin.handler({ addUtilities, prefix, theme })

  expect(addUtilities).toBeCalledWith({
    '.yobta-selected': {
      '@apply bg-selected-1-paper dark:bg-selected-1-paper-dark text-selected-1-ink dark:text-selected-1-ink-dark':
        {}
    },
    '.yobta-selected-2': {
      '@apply bg-selected-2-paper dark:bg-selected-2-paper-dark text-selected-2-ink dark:text-selected-2-ink-dark':
        {}
    },
    '.yobta-selected-3': {
      '@apply bg-selected-3-paper dark:bg-selected-3-paper-dark text-selected-3-ink dark:text-selected-3-ink-dark':
        {}
    }
  })
})
