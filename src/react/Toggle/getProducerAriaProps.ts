import { ToggleMode } from './useToggle.js'

interface ProducerAriaProps {
  (props: {
    consumerId?: string
    mode: NonNullable<ToggleMode>
  }): React.AriaAttributes
}

export const getProducerAriaProps: ProducerAriaProps = ({
  consumerId,
  mode
}) => {
  switch (mode) {
    case 'rollover':
      return {
        'aria-describedby': consumerId
      }

    default:
      return {}
  }
}
