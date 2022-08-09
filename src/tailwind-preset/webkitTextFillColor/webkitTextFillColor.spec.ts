import { it, expect, vi } from 'vitest'

// @ts-ignore
import webkitTextFillColor from './webkitTextFillColor.cjs'

const prefix = (str: string): string => str

it('requires theme.colors.yobta', () => {
  ;[
    {},
    {
      yobta: null
    },
    {
      yobta: NaN
    }
  ].forEach(colors => {
    expect(() => {
      webkitTextFillColor.handler({ theme: () => colors, prefix })
    }).toThrowError('Yobta webkitTextFillColor: theme.colors.yobta is required')
  })
})

it('requires theme.colors.yobta.***.ink.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(ink => {
    expect(() => {
      webkitTextFillColor.handler({
        prefix,
        theme: () => ({
          yobta: {
            primary: {
              ink
            }
          }
        })
      })
    }).toThrowError(
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.ink.DEFAULT should be a string'
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
      webkitTextFillColor.handler({
        prefix,
        theme: () => ({
          yobta: {
            primary: {
              ink
            }
          }
        })
      })
    }).toThrowError(
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.ink.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.paper.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(
    paper => {
      expect(() => {
        webkitTextFillColor.handler({
          prefix,
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
        'Yobta webkitTextFillColor: theme.colors.yobta.primary.paper.DEFAULT should be a string'
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
      webkitTextFillColor.handler({
        prefix,
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
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.paper.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.selected.paper.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(
    paper => {
      expect(() => {
        webkitTextFillColor.handler({
          prefix,
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
        'Yobta webkitTextFillColor: theme.colors.yobta.primary.selected.paper.DEFAULT should be a string'
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
      webkitTextFillColor.handler({
        prefix,
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
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.selected.paper.dark should be a string'
    )
  })
})

it('requires theme.colors.yobta.***.selected.ink.DEFAULT to be a string', () => {
  ;[{ DEFAULT: null }, { DEFAULT: 0 }, { DEFAULT: new Date() }].forEach(ink => {
    expect(() => {
      webkitTextFillColor.handler({
        prefix,
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
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.selected.ink.DEFAULT should be a string'
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
      webkitTextFillColor.handler({
        prefix,
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
      'Yobta webkitTextFillColor: theme.colors.yobta.primary.selected.ink.dark should be a string'
    )
  })
})

it('adds styles to the component @layer', () => {
  let addComponents = vi.fn()

  webkitTextFillColor.handler({
    addComponents,
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
    '.yobta-webkit-text-fill-paper input:-internal-autofill-selected': {
      '-webkit-text-fill-color': 'paperText !important',
      '@apply animate-pulse': {},
      'caretColor': 'paperText'
    },
    '.yobta-webkit-text-fill-paper-dark input:-internal-autofill-selected': {
      '-webkit-text-fill-color': 'paperDarkText !important',
      '@apply animate-pulse': {},
      'caretColor': 'paperDarkText'
    }
  })
})
