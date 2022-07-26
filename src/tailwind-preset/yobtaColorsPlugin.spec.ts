import { it, expect, vi } from 'vitest'

// @ts-ignore
import yobtaColorsPlugin from './yobtaColorsPlugin.cjs'

const prefix = (str: string): string => str

it('requires theme.colors.yobta', () => {
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
      yobtaColorsPlugin.handler({ theme: () => colors })
    }).toThrowError('Yobta yobtaColorsPlugin: theme.colors.yobta is required')
  })
})

it('requires theme.colors.yobta.***.ink.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(ink => {
    expect(() => {
      yobtaColorsPlugin.handler({
        theme: () => ({
          yobta: {
            primary: {
              ink
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.***.ink.DEFAULT should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.ink.dark to be a string', () => {
  ;[
    { DEFAULT: '#123', dark: null },
    { DEFAULT: '#123', dark: 0 },
    { DEFAULT: '#123', dark: new Date() }
  ].forEach(ink => {
    expect(() => {
      yobtaColorsPlugin.handler({
        theme: () => ({
          yobta: {
            primary: {
              ink
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.***.ink.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.paper.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(
    paper => {
      expect(() => {
        yobtaColorsPlugin.handler({
          theme: () => ({
            yobta: {
              primary: {
                ink: { DEFAULT: '#123', dark: '#123' },
                paper
              }
            }
          })
        })
      }).toThrowError(
        'Yobta yobtaColorsPlugin: theme.colors.yobta.***.paper.DEFAULT should be a string'
      )
    }
  )
})

it('requires theme.colors.yobta.***.paper.dark to be a string', () => {
  ;[
    { DEFAULT: '#123', dark: null },
    { DEFAULT: '#123', dark: 0 },
    { DEFAULT: '#123', dark: new Date() }
  ].forEach(paper => {
    expect(() => {
      yobtaColorsPlugin.handler({
        theme: () => ({
          yobta: {
            primary: {
              ink: { DEFAULT: '#123', dark: '#123' },
              paper
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.***.paper.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.selected.paper.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(
    paper => {
      expect(() => {
        yobtaColorsPlugin.handler({
          theme: () => ({
            yobta: {
              primary: {
                ink: { DEFAULT: '#123', dark: '#123' },
                paper: { DEFAULT: '#123', dark: '#123' },
                selected: {
                  paper
                }
              }
            }
          })
        })
      }).toThrowError(
        'Yobta yobtaColorsPlugin: theme.colors.yobta.***.selected.paper.DEFAULT should be a string'
      )
    }
  )
})

// it('requires theme.colors.yobta should should not be empty', () => {
//   ;[{}].forEach(yobta => {
//     expect(() => {
//       yobtaColorsPlugin.handler({
//         theme: () => ({
//           yobta
//         })
//       })
//     }).toThrowError(
//       'Yobta inkyobtaColorsPluginPlugin: theme.colors.yobta should should not be empty'
//     )
//   })
// })

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
  expect(addUtilities).toBeCalledWith({
    '.yobta-paper .yobta-selected': {
      '@apply bg-yobta-paper-selected-paper dark:bg-yobta-paper-selected-paper-dark text-yobta-paper-selected-ink dark:text-yobta-paper-selected-ink-dark':
        {}
    }
  })
})
