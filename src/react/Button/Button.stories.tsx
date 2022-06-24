/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { ShoppingBag } from '../entypo'

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
      Transparent
    </>
  ),
  className: 'dark:text-ink-dark'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary button',
  className: 'yobta-button-primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary button',
  className: 'yobta-button-secondary'
}

export const Error = Template.bind({})
Error.args = {
  children: 'Error button',
  className: 'yobta-button-error'
}

export const Success = Template.bind({})
Success.args = {
  children: 'Error button',
  className: 'yobta-button-success'
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Error button',
  className: 'yobta-button-warning'
}

export const Info = Template.bind({})
Info.args = {
  children: 'Error button',
  className: 'yobta-button-info'
}

export const Paper = Template.bind({})
Paper.args = {
  children: 'Error button',
  className: 'yobta-button-paper'
}

export const Paper2 = Template.bind({})
Paper2.args = {
  children: 'Error button',
  className: 'yobta-button-paper-2'
}

export const Paper3 = Template.bind({})
Paper3.args = {
  children: 'Error button',
  className: 'yobta-button-paper-3'
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  className: 'yobta-bg-paper-2 ui-ink px-8 h-14 text-xl'
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  className: 'yobta-paper-2 text-xs h-8'
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined Button',
  className: 'border-2 ui-ink'
}

export const Round = Template.bind({})
Round.args = {
  children: 'R',
  className: 'yobta-bg-paper-2 ui-ink w-12 h-12 rounded-full px-0 py-0'
}

export const Busy = Template.bind({})
Busy.args = {
  busy: true,
  children: 'Busy button',
  className: 'yobta-bg-paper-2 ui-ink'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled button',
  className: 'yobta-bg-paper-2 ui-ink',
  disabled: true
}
