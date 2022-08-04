/* eslint-disable n/global-require */

module.exports = {
  theme: {
    extend: {
      colors: require('./colors.cjs'),
      animation: {
        'yobta-linear-progress': 'yobta-linear-progress 2s infinite linear',
        'yobta-dropdown-in-bottom':
          'yobta-dropdown-in-bottom 0.40s ease forwards',
        'yobta-dropdown-out-bottom':
          'yobta-dropdown-out-bottom 0.32s ease forwards',
        'yobta-dropdown-in-left': 'yobta-dropdown-in-left 0.40s ease forwards',
        'yobta-dropdown-out-left':
          'yobta-dropdown-out-left 0.32s ease forwards',
        'yobta-dropdown-in-right':
          'yobta-dropdown-in-right 0.40s ease forwards',
        'yobta-dropdown-out-right':
          'yobta-dropdown-out-right 0.32s ease forwards',
        'yobta-dropdown-in-top': 'yobta-dropdown-in-top 0.40s ease forwards',
        'yobta-dropdown-out-top': 'yobta-dropdown-out-top 0.32s ease forwards',
        'yobta-spinner':
          'yobta-spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'yobta-placeholder': 'yobta-placeholder 4.4s ease 0.32s infinite',
        'yobta-toast--in-up': 'yobta-toast-in-up 0.64s ease forwards',
        'yobta-toast--out-up': 'yobta-toast-out-up 0.56s ease forwards',
        'yobta-toast--in-down': 'yobta-toast-in-down 0.64s ease forwards',
        'yobta-toast--out-down': 'yobta-toast-out-down 0.56s ease forwards'
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
        'yobta-dropdown-in-bottom': {
          from: { transform: 'translateY(3rem)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 100 }
        },
        'yobta-dropdown-out-bottom': {
          from: { transform: 'translateY(0)', opacity: 100 },
          to: { transform: 'translateY(3rem)', opacity: 0 }
        },
        'yobta-dropdown-in-left': {
          from: { transform: 'translateX(-3rem)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 100 }
        },
        'yobta-dropdown-out-left': {
          from: { transform: 'translateX(0)', opacity: 100 },
          to: { transform: 'translateX(-3rem)', opacity: 0 }
        },
        'yobta-dropdown-in-right': {
          from: { transform: 'translateX(3rem)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 100 }
        },
        'yobta-dropdown-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(3rem)', opacity: 0 }
        },
        'yobta-dropdown-in-top': {
          from: { transform: 'translateY(-3rem)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 100 }
        },
        'yobta-dropdown-out-top': {
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
        },
        'yobta-toast-in-up': {
          '0%': { opacity: 0, transform: 'translateY(-56px)' },
          '24%': { opacity: 100 },
          '100%': { transform: 'translateY(0)', opacity: 100 }
        },
        'yobta-toast-out-up': {
          '0%': { opacity: 100, transform: 'translateY(0)' },
          '24%': { opacity: 0 },
          '100%': { transform: 'translateY(-56px)', opacity: 0 }
        },
        'yobta-toast-in-down': {
          '0%': { opacity: 0, transform: 'translateY(56px)' },
          '24%': { opacity: 100 },
          '100%': { transform: 'translateY(0)', opacity: 100 }
        },
        'yobta-toast-out-down': {
          '0%': { opacity: 100, transform: 'translateY(0)' },
          '24%': { opacity: 0 },
          '100%': { transform: 'translateY(56px)', opacity: 0 }
        }
      },
      zIndex: {
        'yobta-overlay': 1000,
        'yobta-dropdown': 2000,
        'yobta-tooltip': 3000,
        'yobta-toast': 4000
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
    require('./linearProgressPlugin/linearProgressPlugin.cjs'),
    require('./linkPlugin/linkPlugin.cjs'),
    require('./listPlugin/listPlugin.cjs'),
    require('./placeholderPlugin/placeholderPlugin.cjs'),
    require('./menuPlugin/menuPlugin.cjs'),
    require('./radioButtonPlugin/radioButtonPlugin.cjs'),
    require('./scrollBoxPlugin/scrollBoxPlugin.cjs'),
    require('./selectedPlugin/selectedPlugin.cjs'),
    require('./spinnerPlugin/spinnerPlugin.cjs'),
    require('./switchPlugin/switchPlugin.cjs'),
    require('./textAreaPlugin/textAreaPlugin.cjs'),
    require('./textColorPlugin/textColorPlugin.cjs'),
    require('./tooltipPlugin/tooltipPlugin.cjs'),
    require('./yobtaColorsPlugin/yobtaColorsPlugin.cjs'),
    require('./toastPlugin/toastPlugin.cjs')
  ],
  variants: {
    extend: {
      brightness: ['active', 'hover'],
      textColor: ['visited', 'hover', 'active', 'dark']
    }
  }
}
