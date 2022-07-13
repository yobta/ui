import { test, expect, vi } from 'vitest'

// @ts-ignore
import selectedPlugin from './selectedPlugin.cjs'

const prefix = (str: string): string => str

test('selectedPlugin', async () => {
  let addSelected = vi.fn()
  let colors = {
    selected: {
      '2': {
        paper: {
          DEFAULT: 'var(--yobta-color-selected-2, #AED5FA)',
          dark: 'var(--yobta-color-selected-2-dark, #5B81A5)'
        },
        ink: {
          DEFAULT: 'var(--yobta-color-selected-text, #414141)',
          dark: 'var(--yobta-color-selected-text-dark, #FCFCFC)'
        }
      },
      '3': {
        paper: {
          DEFAULT: 'var(--yobta-color-selected-3, #A8C2DC)',
          dark: 'var(--yobta-color-selected-3-dark, #4B7194)'
        },
        ink: {
          DEFAULT: 'var(--yobta-color-selected-text, #414141)',
          dark: 'var(--yobta-color-selected-text-dark, #FCFCFC)'
        }
      },
      'DEFAULT': {
        paper: 'var(--yobta-color-selected, #CBE6FF)',
        ink: 'var(--yobta-color-selected-text, #414141)'
      },
      'dark': {
        paper: 'var(--yobta-color-selected-dark, #4B6278)',
        ink: 'var(--yobta-color-selected-text-dark, #FCFCFC)'
      }
    }
  }
  let theme = (): typeof colors => colors

  selectedPlugin.handler({ addSelected, prefix, theme })

  expect(addSelected).toBeCalledWith({
    '.yobta-selected-2': {
      '@apply yobta-selected-2-paper yobta-selected-2-ink dark:yobta-selected-2-paper-dark dark:yobta-selected-2-ink-dark':
        {}
    },
    '.yobta-selected-3': {
      '@apply yobta-selected-3-paper yobta-selected-3-ink dark:yobta-selected-3-paper-dark dark:yobta-selected-3-ink-dark':
        {}
    },
    '.yobta-selected-DEFAULT': {
      '@apply yobta-selected-DEFAULT-paper yobta-selected-DEFAULT-ink dark:yobta-selected-DEFAULT-paper-dark dark:yobta-selected-DEFAULT-ink-dark':
        {}
    },
    '.yobta-selected-dark': {
      '@apply yobta-selected-dark-paper yobta-selected-dark-ink dark:yobta-selected-dark-paper-dark dark:yobta-selected-dark-ink-dark':
        {}
    }
  })
})
