import { ToggleMode } from './useToggle.js'

export function suggestMode(consumerType: string): NonNullable<ToggleMode> {
  switch (consumerType) {
    case 'YobtaTooltip':
      return 'rollover'
    case 'YobtaInput':
      return 'focus'
    case 'YobtaDropdown':
    default:
      return 'click'
  }
}
