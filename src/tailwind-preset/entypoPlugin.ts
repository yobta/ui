/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const entypoPlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-entypo': {
      ...applyPrefixed(prefix, '.fill-current', '.h-5', '.w-5'),
    },
  })
})
