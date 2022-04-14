/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const addonPlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-addon': {
      ...applyPrefixed(
        prefix,
        '.mx-4',
        '.flex',
        '.items-center',
        '.justify-center'
      ),
      minHeight: '1.5rem',
      minWidth: '1.5rem',
    },
  })
})
