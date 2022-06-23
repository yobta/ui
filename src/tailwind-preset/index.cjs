/* eslint-disable n/global-require */
/* eslint-disable node/no-missing-require */
/* eslint-disable node/global-require */

module.exports = {
  theme: {
    extend: {
      colors: require('./colors.cjs'),
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
    require('./addonPlugin.cjs'),
    require('./badgePlugin.cjs'),
    require('./basePlugin.cjs'),
    require('./bgPlugin.cjs'),
    require('./borderPlugin.cjs'),
    require('./buttonPlugin.cjs'),
    require('./buttonVariantsPlugin.cjs'),
    require('./checkboxPlugin.cjs'),
    require('./dividerPlugin.cjs'),
    require('./entypoPlugin.cjs'),
    require('./inkPlugin.cjs'),
    require('./inputPlugin.cjs'),
    require('./linearProgressPlugin.cjs'),
    require('./linkPlugin.cjs'),
    require('./listPlugin.cjs'),
    require('./menuPlugin.cjs'),
    // require('./paperPlugin'),
    require('./radioButtonPlugin.cjs'),
    require('./scrollBoxPlugin.cjs'),
    require('./spinnerPlugin.cjs'),
    require('./switchPlugin.cjs'),
    require('./textAreaPlugin.cjs'),
    require('./textColorPlugin.cjs'),
    require('./tooltipPlugin.cjs')
  ],
  variants: {
    extend: {
      brightness: ['active', 'hover'],
      textColor: ['visited', 'hover', 'active', 'dark']
    }
  }
}
