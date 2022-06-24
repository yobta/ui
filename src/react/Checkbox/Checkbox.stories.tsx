import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Checkbox'
}

const Checkbox: ComponentStory<'input'> = props => (
  <input type="checkbox" {...props} />
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'yobta-checkbox'
}

export const Secondary = Checkbox.bind({})
Secondary.args = { className: 'yobta-checkbox yobta-ink-secondary' }
