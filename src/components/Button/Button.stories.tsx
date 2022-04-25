import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { ShoppingBag } from '../../entypo'

export default {
  title: 'React/Button',
  component: Button,
  argTypes: {
    busy: { control: 'boolean' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <ShoppingBag />
      Button<span>1</span>
    </>
  ),
  className: 'ui-ink'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
  className: 'ui-bg-primary text-ink'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary button',
  className: 'ui-bg-secondary text-ink-dark'
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  className: 'ui-bg-paper-2 ui-ink px-8 h-14 text-xl'
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  className: 'ui-bg-paper-2 ui-ink text-xs h-8'
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined Button',
  className: 'border-2 ui-ink ui-bg-paper'
}

export const Round = Template.bind({})
Round.args = {
  children: 'R',
  className: 'ui-bg-paper-2 ui-ink w-12 h-12 rounded-full px-0 py-0'
}

export const Busy = Template.bind({})
Busy.args = {
  busy: true,
  children: 'Busy button',
  className: 'ui-bg-paper-2 ui-ink'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled button',
  className: 'ui-bg-paper-2 ui-ink',
  disabled: true
}
