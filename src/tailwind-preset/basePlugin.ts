/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const basePlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-disabled': {
      ...applyPrefixed(prefix, '.pointer-events-none', '.opacity-50'),
    },
  })
})
