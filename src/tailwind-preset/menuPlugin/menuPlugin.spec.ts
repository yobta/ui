import { test, expect, vi } from 'vitest'

// @ts-ignore
import menuPlugin from './menuPlugin.cjs'

const prefix = (str: string): string => str

test('menuPlugin', () => {
  let addComponents = vi.fn()

  menuPlugin.handler({ addComponents, prefix })
  expect(addComponents).toBeCalledWith({
    '.yobta-menu': {
      '@apply yobta-list rounded flex flex-col': {}
    },
    '.yobta-menu-header': {
      '@apply yobta-list-header': {}
    },
    '.yobta-menu-item': {
      '@apply px-4 py-2 m-0 flex items-center justify-start gap-x-2 relative cursor-pointer':
        {},
      '-webkit-tap-highlight-color': 'rgb(0, 0, 0, 0)',
      '&:before': {
        '@apply absolute top-0 left-0 right-0 bottom-0 opacity-0 transition duration-150':
          {},
        'content': '""',
        'backgroundColor': 'currentColor',
        'borderRadius': 'inherit'
      },
      '&:active::before': {
        opacity: 0.16
      },
      '&:disabled': {
        '@apply yobta-disabled': {}
      },
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
    },
    '@media (hover: hover)': {
      '.yobta-menu-item:hover::before': {
        opacity: 0.08
      }
    }
  })
})
