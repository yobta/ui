import { test, expect, vi } from 'vitest'

// @ts-ignore
import tooltipPlugin from './tooltipPlugin.cjs'

const prefix = (str: string): string => str

test('tooltipPlugin', async () => {
  let addComponents = vi.fn()
  let addUtilities = vi.fn()

  tooltipPlugin.handler({ addComponents, addUtilities, prefix })
  expect(addComponents).toBeCalledWith({
    '.yobta-tooltip__spot': {
      '@apply bg-tooltip-paper dark:bg-tooltip-paper-dark text-tooltip-ink dark:text-tooltip-ink-dark rounded-full z-yobta-tooltip':
        {}
    },
    '.yobta-tooltip': {
      '@apply bg-tooltip-paper dark:bg-tooltip-paper-dark text-tooltip-ink dark:text-tooltip-ink-dark rounded px-2 py-1 text-center text-xs z-yobta-tooltip':
        {}
    },
    '.yobta-tooltip--animated': {
      '@apply delay-500 transition-opacity ease-out duration-700 transform-gpu':
        {}
    }
  })
  expect(addUtilities).toBeCalledWith({
    '.yobta-tooltip__spot': {
      '@apply hidden fixed w-2 h-2 p-0 pointer-events-none select-none -translate-x-1/2 -translate-y-1/2':
        {}
    },
    '.yobta-tooltip__spot--visible': {
      display: 'block'
    },
    '.yobta-tooltip': {
      '@apply invisible pointer-events-none fixed select-none opacity-0': {}
    },
    '.yobta-tooltip--visible': {
      '@apply visible opacity-90': {}
    }
  })
})
