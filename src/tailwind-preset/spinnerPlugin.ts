/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const spinnerPlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-spinner': {
      ...applyPrefixed(
        prefix,
        '.animate-ui-spinner',
        '.block',
        '.border-2',
        '.w-6',
        '.h-6',
        '.rounded-full'
      ),
      borderColor: 'currentColor',
      borderLeftColor: 'transparent !important',
      borderRightColor: 'transparent !important',
    },
  })
})
