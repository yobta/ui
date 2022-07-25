import { test, expect, vi } from 'vitest'

// @ts-ignore
import linkPlugin from './linkPlugin.cjs'

const prefix = (str: string): string => str

test('linkPlugin', async () => {
  let addBase = vi.fn()

  linkPlugin.handler({ addBase, prefix })
  expect(addBase).toBeCalledWith(
    {
      'a.yobta-link, .yobta-link-box a': {
        '@apply underline text-link dark:text-link-dark active:text-link-active dark:active:text-link-active-dark hover:text-link-hover dark:hover:text-link-hover-dark visited:text-link-visited dark:visited:text-link-visited-dark':
          {}
      }
    },
    { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
