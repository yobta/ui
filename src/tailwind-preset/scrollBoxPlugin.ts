/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// NOTE: In case we want visible and fancy scrollbars https://www.filamentgroup.com/lab/scrollbars/

// @ts-ignore
export const scrollBoxPlugin = plugin(({ addUtilities, prefix }) => {
  addUtilities({
    '.ui-scroll-box': {
      overflow: 'hidden',
      'scroll-behavior': 'smooth',
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '-webkit-overflow-scrolling': 'touch',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.ui-scroll-box-x': {
      ...applyPrefixed(prefix, '.ui-scroll-box'),
      display: 'flex',
      justifyContent: 'flex-start',
      'overflow-x': 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.ui-scroll-box-y': {
      ...applyPrefixed(prefix, '.ui-scroll-box'),
      'overflow-y': 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
})
