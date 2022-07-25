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

  expect(addComponents).toBeCalled()
  expect(addUtilities).toBeCalled()
})
