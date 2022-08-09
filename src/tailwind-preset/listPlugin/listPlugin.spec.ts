import { test, expect, vi } from 'vitest'

// @ts-ignore
import listPlugin from './listPlugin.cjs'

const prefix = (str: string): string => str

test('listPlugin', () => {
  let addComponents = vi.fn()

  listPlugin.handler({ addComponents, prefix })
  expect(addComponents).toBeCalledWith({
    '.yobta-list': {
      '@apply px-0 py-2 m-0': {}
    },
    '.yobta-list-header': {
      '@apply text-sm opacity-60 px-4 py-2 mb-2 block': {}
    },
    '.yobta-list-item': {
      '@apply px-4 py-2 m-0 flex items-center justify-start gap-x-2': {},
      '& .yobta-entypo': {
        marginLeft: '2px',
        marginRight: '2px',
        flexShrink: 0
      },
      '& > .yobta-entypo:last-child': {
        '@apply ml-auto': {}
      },
      '& > .yobta-entypo:first-child': {
        marginLeft: '2px',
        marginRight: 'calc(1.5rem + 2px)'
      }
    }
  })
})
