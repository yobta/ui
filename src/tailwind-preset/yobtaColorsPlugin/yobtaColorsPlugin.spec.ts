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
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.ink.DEFAULT should be a string'
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
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.ink.dark should be a string'
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
        'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.paper.DEFAULT should be a string'
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
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.paper.dark should be a string'
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
        'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.selected.paper.DEFAULT should be a string'
      )
    }
  )
})

it('requires theme.colors.yobta.***.selected.paper.dark to be a string', () => {
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
              paper: { DEFAULT: '#123', dark: '#123' },
              selected: {
                paper
              }
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.selected.paper.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.selected.ink.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(ink => {
    expect(() => {
      yobtaColorsPlugin.handler({
        theme: () => ({
          yobta: {
            primary: {
              ink: { DEFAULT: '#123', dark: '#123' },
              paper: { DEFAULT: '#123', dark: '#123' },
              selected: {
                paper: { DEFAULT: '#123', dark: '#123' },
                ink
              }
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.selected.ink.DEFAULT should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.selected.ink.dark to be a string', () => {
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
              ink: { DEFAULT: '#123', dark: '#123' },
              paper: { DEFAULT: '#123', dark: '#123' },
              selected: {
                paper: { DEFAULT: '#123', dark: '#123' },
                ink
              }
            }
          }
        })
      })
    }).toThrowError(
      'Yobta yobtaColorsPlugin: theme.colors.yobta.primary.selected.ink.dark should be a string'
    )
  })
})

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
      '@apply bg-yobta-paper-paper text-yobta-paper-ink yobta-webkit-text-fill-paper dark:bg-yobta-paper-paper-dark dark:text-yobta-paper-ink-dark dark:yobta-webkit-text-fill-paper-dark':
        {},
      'borderColor': 'currentcolor'
    },
    '.yobta-paper-inversed': {
      '@apply bg-yobta-paper-paper-dark text-yobta-paper-ink-dark yobta-webkit-text-fill-paper-dark dark:bg-yobta-paper-paper dark:text-yobta-paper-ink dark:yobta-webkit-text-fill-paper':
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
