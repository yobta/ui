import { ComponentStory } from '@storybook/react'

import { Key } from '../entypo/index.js'
import { Input, PasswordInput } from './index.js'

export default {
  title: 'React/Input'
}

const InputTemplate: ComponentStory<typeof Input> = props => (
  <Input {...props} />
)

const PasswordTemplate: ComponentStory<typeof PasswordInput> = props => (
  <PasswordInput {...props} />
)

export const Default = InputTemplate.bind({})
Default.args = { caption: 'Caption' }

export const Fancy = InputTemplate.bind({})
Fancy.args = { caption: 'Fancy', fancy: true, required: true }

export const Disabled = InputTemplate.bind({})
Disabled.args = {
  before: <Key className="yobta-menu-icon" />,
  caption: 'Disabled',
  className: 'focus-within:ring-4 ring-paper-primary!important',
  disabled: true
}

export const Password = PasswordTemplate.bind({})
Password.args = {
  before: <Key className="yobta-menu-icon" />,
  caption: 'Password',
  className: 'focus-within:ring-4 ring-paper-primary!important'
}
