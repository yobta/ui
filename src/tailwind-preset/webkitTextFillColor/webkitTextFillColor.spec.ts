import { it, expect, vi } from 'vitest'

// @ts-ignore
import webkitTextFillColor from './webkitTextFillColor.cjs'

// const prefix = (str: string): string => str

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
      webkitTextFillColor.handler({ theme: () => colors })
    }).toThrowError('Yobta webkitTextFillColor: theme.colors.yobta is required')
  })
})

// it('webkitTextFillColor', () => {
//   let addComponents = vi.fn()

//   webkitTextFillColor.handler({ addComponents, prefix })
//   expect(addComponents).toBeCalledWith()
// })
