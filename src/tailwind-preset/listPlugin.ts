/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const listPlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-list': {
      ...applyPrefixed(prefix, '.px-0', '.py-2', '.m-0'),
    },
    '.ui-list-header': {
      ...applyPrefixed(
        prefix,
        '.text-sm',
        '.opacity-60',
        '.px-4',
        '.py-2',
        '.mb-2',
        '.block'),
    },
    '.ui-list-item': {
      ...applyPrefixed(prefix, '.px-4', '.py-2', '.m-0', '.block'),
    },
    '.ui-list-group': {
      ...applyPrefixed(prefix, '.flex', '.items-center', '.py-2', '.m-0'),
    },
    '.ui-list-text': {
      ...applyPrefixed(prefix, '.px-4', '.flex-1'),
    },
    '.ui-list-icon': {
      marginLeft: 'calc(1rem + 2px)',
      marginRight: 'calc(1rem + 2px)',
    },
  })
})
