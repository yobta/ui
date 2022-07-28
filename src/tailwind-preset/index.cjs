/* eslint-disable n/global-require */

module.exports = {
  theme: {
    extend: {
      colors: require('./colors.cjs'),
      animation: {
        'yobta-linear-progress': 'yobta-linear-progress 2s infinite linear',
        'yobta-dropdown-in-bottom': 'yobtaDropdownInBottom 0.40s ease forwards',
        'yobta-dropdown-out-bottom':
          'yobtaDropdownOutBottom 0.32s ease forwards',
        'yobta-dropdown-in-left': 'yobtaDropdownInLeft 0.40s ease forwards',
        'yobta-dropdown-out-left': 'yobtaDropdownOutLeft 0.32s ease forwards',
        'yobta-dropdown-in-right': 'yobtaDropdownInRight 0.40s ease forwards',
        'yobta-dropdown-out-right': 'yobtaDropdownOutRight 0.32s ease forwards',
        'yobta-dropdown-in-top': 'yobtaDropdownInTop 0.40s ease forwards',
        'yobta-dropdown-out-top': 'yobtaDropdownOutTop 0.32s ease forwards',
        'yobta-spinner':
          'yobta-spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'yobta-placeholder': 'yobta-placeholder 4.4s ease 0.32s infinite'
      },
      keyframes: {
        'yobta-placeholder': {
          '0%': {
            opacity: '0.08'
          },
          '50%': {
            opacity: '0.48'
          },
          '100%': {
            opacity: '0.08'
          }
        },
        'yobta-linear-progress': {
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
        'yobtaDropdownInBottom': {
          from: { transform: 'translateY(3rem)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 100 }
        },
        'yobtaDropdownOutBottom': {
          from: { transform: 'translateY(0)', opacity: 100 },
          to: { transform: 'translateY(3rem)', opacity: 0 }
        },
        'yobtaDropdownInLeft': {
          from: { transform: 'translateX(-3rem)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 100 }
        },
        'yobtaDropdownOutLeft': {
          from: { transform: 'translateX(0)', opacity: 100 },
          to: { transform: 'translateX(-3rem)', opacity: 0 }
        },
        'yobtaDropdownInRight': {
          from: { transform: 'translateX(3rem)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 100 }
        },
        'yobtaDropdownOutRight': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(3rem)', opacity: 0 }
        },
        'yobtaDropdownInTop': {
          from: { transform: 'translateY(-3rem)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 100 }
        },
        'yobtaDropdownOutTop': {
          from: { transform: 'translateY(0)', opacity: 100 },
          to: { transform: 'translateY(-3rem)', opacity: 0 }
        },
        'yobta-spinner': {
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
      },
      zIndex: {
        'yobta-overlay': 1000,
        'yobta-dropdown': 2000,
        'yobta-tooltip': 3000
      }
    }
  },
  plugins: [
    require('./badgePlugin/badgePlugin.cjs'),
    require('./basePlugin/basePlugin.cjs'),
    require('./bgPlugin/bgPlugin.cjs'),
    require('./borderPlugin/borderPlugin.cjs'),
    require('./buttonPlugin/buttonPlugin.cjs'),
    require('./buttonVariantsPlugin/buttonVariantsPlugin.cjs'),
    require('./checkboxPlugin/checkboxPlugin.cjs'),
    require('./dividerPlugin/dividerPlugin.cjs'),
    require('./dropdownPlugin/dropdownPlugin.cjs'),
    require('./entypoPlugin/entypoPlugin.cjs'),
    require('./inkPlugin/inkPlugin.cjs'),
    require('./inputPlugin/inputPlugin.cjs'),
    require('./linearProgressPlugin.cjs'),
    require('./linkPlugin.cjs'),
    require('./listPlugin.cjs'),
    require('./menuPlugin.cjs'),
    require('./placeholderPlugin/placeholderPlugin.cjs'),
    require('./radioButtonPlugin.cjs'),
    require('./scrollBoxPlugin.cjs'),
    require('./selectedPlugin.cjs'),
    require('./spinnerPlugin.cjs'),
    require('./switchPlugin.cjs'),
    require('./textAreaPlugin.cjs'),
    require('./textColorPlugin.cjs'),
    require('./tooltipPlugin.cjs'),
    require('./yobtaColorsPlugin.cjs')
  ],
  variants: {
    extend: {
      brightness: ['active', 'hover'],
      textColor: ['visited', 'hover', 'active', 'dark']
    }
  }
}
