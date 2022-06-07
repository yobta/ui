/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip } from './Tooltip'
import { ShoppingBag } from '../entypo'
import { Button } from '../Button'

export default {
  title: 'React/Tooltip',
  component: Tooltip,
  argTypes: {
    busy: { control: 'boolean' }
  }
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Button className="ui-ink">
        <ShoppingBag />
        Add to cart
      </Button>
    </>
  ),
  // align: 'top',
  // align: 'top-left',
  // align: 'top-right',
  // align: 'bottom',
  // align: 'bottom-left',
  align: 'bottom-right',
  // align: 'right',
  // align: 'right-top',
  // align: 'right-bottom',
  // align: 'left',
  // align: 'left-top',
  // align: 'left-bottom',
  label: 'My tooltip',
  className: 'ui-bg-secondary'
}
