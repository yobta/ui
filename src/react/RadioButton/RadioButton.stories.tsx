import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/RadioButton'
}

const Checkbox: ComponentStory<'input'> = props => (
  <input type="radio" {...props} />
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'yobta-radio'
}

export const Primary = Checkbox.bind({})
Primary.args = { className: 'yobta-radio yobta-ink-secondary' }
