/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useRef } from 'react'

import { Toggle } from '.'
import { Tooltip } from '../Tooltip'
import { ShoppingBag } from '../entypo'

export default {
  title: 'React/Toggle',
  component: Tooltip,
  argTypes: {}
} as ComponentMeta<typeof Tooltip>

const ToggleTemplate: ComponentStory<typeof Tooltip> = args => {
  let ref = useRef(null)
  return (
    <Toggle>
      <button
        className="ui-button yobta-border-ink-border backdrop-blur-md"
        ref={ref}
      >
        <ShoppingBag />
        Add to cart
      </button>
      <Tooltip {...args} />
    </Toggle>
  )
}

export const TooltipComponent = ToggleTemplate.bind({})
TooltipComponent.args = {
  children: 'My tooltip',
  id: 'tooltip-bottom',
  placement: 'bottom-right'
}
