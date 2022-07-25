import { it, expect, vi } from 'vitest'

// @ts-ignore
import yobtaColorsPlugin from './yobtaColorsPlugin.cjs'

const prefix = (str: string): string => str

it('yobtaColorsPlugin', () => {
  let addComponents = vi.fn()
  let addUtilities = vi.fn()

  yobtaColorsPlugin.handler({
    addComponents,
    addUtilities,
    prefix,
    theme: () => ({
      yobta: {
        paper: {
          ink: { DEFAULT: 'paperText', dark: 'paperDarkText' },
          paper: { DEFAULT: 'paper', dark: 'paperDark' },
          selected: {
            paper: { DEFAULT: 'selected', dark: 'selectedDark' },
            ink: { DEFAULT: 'selectedText', dark: 'selectedTextDark' }
          }
        }
      }
    })
  })

  expect(addComponents).toBeCalledWith({
    '.yobta-paper': {
      '@apply bg-yobta-paper-paper text-yobta-paper-ink dark:bg-yobta-paper-paper-dark dark:text-yobta-paper-ink-dark':
        {},
      'borderColor': 'currentcolor'
    },
    '.yobta-paper-inversed': {
      '@apply bg-yobta-paper-paper-dark text-yobta-paper-ink-dark dark:bg-yobta-paper-paper dark:text-yobta-paper-ink':
        {},
      'borderColor': 'currentcolor'
    }
  })
  expect(addUtilities).toBeCalled()
})
