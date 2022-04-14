/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const dividerPlugin = plugin(({ addBase }) => {
  addBase({
    'hr, .ui-divider': {
      borderWidth: '1px 0 0 0',
      borderTopColor: 'currentColor',
      opacity: 0.32,
    },
  })
})
