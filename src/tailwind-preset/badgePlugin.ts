/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const badgePlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-badge': {
      ...applyPrefixed(
        prefix,
        '.px-2',
        '.rounded-full',
        '.inline-block',
        '.ui-button-text'
      ),
    },
  })
})
