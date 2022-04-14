import { addonPlugin } from './addonPlugin'
import { badgePlugin } from './badgePlugin'
import { basePlugin } from './basePlugin'
import { buttonPlugin } from './buttonPlugin'
import { checkboxPlugin } from './checkboxPlugin'
import { colors } from './colors'
import { dividerPlugin } from './dividerPlugin'
import { entypoPlugin } from './entypoPlugin'
import { inkPlugin } from './inkPlugin'
import { inputPlugin } from './inputPlugin'
import { linearProgressPlugin } from './linearProgressPlugin'
import { linkPlugin } from './linkPlugin'
import { listPlugin } from './listPlugin'
import { menuPlugin } from './menuPlugin'
import { paperPlugin } from './bgPlugin'
import { radioButtonPlugin } from './radioButtonPlugin'
import { scrollBoxPlugin } from './scrollBoxPlugin'
import { spinnerPlugin } from './spinnerPlugin'
import { switchPlugin } from './switchPlugin'
import { textAreaPlugin } from './textAreaPlugin'

export const yobtaPreset = {
  theme: {
    extend: {
      colors,
      animation: {
        'ui-linear-progress': 'ui-linear-progress 2s infinite linear',
        'ui-spinner': 'ui-spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite'
      },
      keyframes: {
        'ui-linear-progress': {
          '0%': {
            backgroundSize: '200% 100%',
            backgroundPosition: 'left -31.25% top 0%'
          },
          '50%': {
            backgroundSize: '800% 100%',
            backgroundPosition: 'left -49% top 0%'
          },
          '100%': {
            backgroundSize: '400% 100%',
            backgroundPosition: 'left -102% top 0%'
          }
        },
        'ui-spinner': {
          '0%': {
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transform: 'rotate(0)'
          },
          '24%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'rotate(900deg)'
          },
          '100%': {
            transform: 'rotate(1800deg)'
          }
        }
      }
    }
  },
  plugins: [
    addonPlugin,
    badgePlugin,
    basePlugin,
    buttonPlugin,
    checkboxPlugin,
    dividerPlugin,
    entypoPlugin,
    inkPlugin,
    inputPlugin,
    listPlugin,
    linearProgressPlugin,
    linkPlugin,
    menuPlugin,
    paperPlugin,
    radioButtonPlugin,
    scrollBoxPlugin,
    spinnerPlugin,
    switchPlugin,
    textAreaPlugin
  ],
  variants: {
    extend: {
      brightness: ['active', 'hover'],
      textColor: ['visited', 'hover', 'active', 'dark']
    }
  }
}
