import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Checkbox',
}

const Checkbox: ComponentStory<'input'> = (props) => (
  <input type="checkbox" {...props} required />
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'ui-checkbox',
}

export const Primary = Checkbox.bind({})
Primary.args = { className: 'ui-checkbox ui-ink-secondary' }
