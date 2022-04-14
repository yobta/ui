/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const inkPlugin = plugin(({ addUtilities, prefix }) => {
  // NOTE: Utility level in order to override border color on base level
  addUtilities({
    '.ui-ink': {
      ...applyPrefixed(
        prefix,
        '.border-ink',
        '.text-ink',
        '.dark:border-ink-dark',
        '.dark:text-ink-dark'
      ),
    },
    '.ui-ink-2': {
      ...applyPrefixed(
        prefix,
        '.border-ink-2',
        '.text-ink-2',
        '.dark:border-ink-2-dark',
        '.dark:text-ink-2-dark'
      ),
    },
    '.ui-ink-primary': {
      ...applyPrefixed(
        prefix,
        '.border-ink-primary',
        '.text-ink-primary',
        '.dark:border-ink-primary-dark',
        '.dark:text-ink-primary-dark'
      ),
    },
    '.ui-ink-secondary': {
      ...applyPrefixed(
        prefix,
        '.border-ink-secondary',
        '.text-ink-secondary',
        '.dark:border-ink-secondary-dark',
        '.dark:text-ink-secondary-dark'
      ),
    },
    '.ui-ink-error': {
      ...applyPrefixed(
        prefix,
        '.border-ink-error',
        '.text-ink-error',
        '.dark:border-ink-error-dark',
        '.dark:text-ink-error-dark'
      ),
    },
    '.ui-ink-success': {
      ...applyPrefixed(
        prefix,
        '.border-ink-success',
        '.text-ink-success',
        '.dark:border-ink-success-dark',
        '.dark:text-ink-success-dark'
      ),
    },
    '.ui-ink-warning': {
      ...applyPrefixed(
        prefix,
        '.border-ink-warning',
        '.text-ink-warning',
        '.dark:border-ink-warning-dark',
        '.dark:text-ink-warning-dark'
      ),
    },
    '.ui-ink-info': {
      ...applyPrefixed(
        prefix,
        '.border-ink-info',
        '.text-ink-info',
        '.dark:border-ink-info-dark',
        '.dark:text-ink-info-dark'
      ),
    },
    '.ui-ink-border': {
      ...applyPrefixed(
        prefix,
        '.border-ink-border',
        '.text-ink-border',
        '.dark:border-ink-border-dark',
        '.dark:text-ink-border-dark'
      ),
    },
  })
})
