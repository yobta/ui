/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const buttonPlugin = plugin(({ addBase, prefix }) => {
  addBase({
    '.ui-button-text': {
      ...applyPrefixed(prefix, '.text-sm', '.font-medium', '.leading-6'),
    },
    '.ui-button': {
      ...applyPrefixed(
        prefix,
        '.px-4',
        '.rounded',
        '.ui-button-text',
        '.flex',
        '.gap-2',
        '.items-center',
        '.justify-center',
        '.relative',
        '.h-10'
      ),
      transition: 'filter',
      '&:before': {
        ...applyPrefixed(
          prefix,
          '.absolute',
          '.top-0',
          '.left-0',
          '.right-0',
          '.bottom-0',
          '.opacity-0',
          '.transition',
          '.duration-150'
        ),
        content: '""',
        backgroundColor: 'currentColor',
        borderRadius: 'inherit',
      },
      '&:hover::before': {
        opacity: 0.08,
      },
      '&:active::before': {
        opacity: 0.16,
      },
      '&:disabled': {
        ...applyPrefixed(prefix, '.ui-disabled'),
      },
    },
    '.ui-button--busy': {
      'pointer-events': 'none',
      '& > :first-child': {
        visibility: 'hidden',
        display: 'inherit',
        gap: 'inherit',
        flexDirection: 'inherit',
      },
      '& > :last-child': {
        ...applyPrefixed(
          prefix,
          '.visible',
          '.absolute',
          '.left-1/2',
          '.top-1/2',
          '.transform',
          '.-translate-x-1/2',
          '.-translate-y-1/2'
        ),
      },
    },
  })
})
