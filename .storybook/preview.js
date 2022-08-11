import 'tailwindcss/tailwind.css'
import { themes } from '@storybook/theming'

import { DocsContainer } from './DocsContainer'
import { StoryDecorator } from './StoryDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: '#4F5462',
      appContentBg: '#2A2D35',
      barSelectedColor: '#3B72A5',
      sbdocsWrapper: '#2A2D35'
    },
    light: {
      ...themes.normal,
      appBg: '#EBEBEB',
      appContentBg: '#FCFCFC',
      barSelectedColor: '#4C9BE4'
    },
    classTarget: 'html',
    stylePreview: true
  },
  docs: {
    container: DocsContainer
  }
}

export const decorators = [StoryDecorator]
