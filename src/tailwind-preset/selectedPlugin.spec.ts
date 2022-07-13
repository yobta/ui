import { test, expect, vi } from 'vitest'

// @ts-ignore
import selectedPlugin from './selectedPlugin.cjs'

const prefix = (str: string): string => str

test('selectedPlugin', async () => {
  let addSelected = vi.fn()
  let colors = {
    selected: {
      2: {
        paper: { DEFAULT: 'selected2', dark: 'selectedDark2' },
        ink: { DEFAULT: 'selectedText2', dark: 'selectedDarkText2' }
      }
    }
  }
  let theme = (): typeof colors => colors

  selectedPlugin.handler({ addSelected, prefix, theme })

  expect(addSelected).toBeCalledWith({
    '.yobta-selected-2': {
      '@apply yobta-selected-2-paper yobta-selected-2-ink dark:yobta-selected-2-paper-dark dark:yobta-selected-2-ink-dark':
        {}
    }
  })
})
