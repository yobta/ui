/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const linkPlugin = plugin(({ addBase, prefix }) => {
  addBase(
    {
      'a.ui-link, .ui-link-box a': {
        ...applyPrefixed(
          prefix,
          '.underline',
          '.text-link',
          '.dark:text-link-dark',
          '.active:text-link-active',
          '.dark:active:text-link-active-dark',
          '.hover:text-link-hover',
          '.dark:hover:text-link-hover-dark',
          '.visited:text-link-visited',
          '.dark:visited:text-link-visited-dark'
        ),
      },
    },
    { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
