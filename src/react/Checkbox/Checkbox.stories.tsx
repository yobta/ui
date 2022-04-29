import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Checkbox'
}

const Checkbox: ComponentStory<'input'> = props => (
  <input type="checkbox" {...props} />
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'ui-checkbox'
}

export const Secondary = Checkbox.bind({})
Secondary.args = { className: 'ui-checkbox ui-ink-secondary' }
