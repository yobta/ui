import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/RadioButton'
}

const Checkbox: ComponentStory<'input'> = props => (
  <div className="yobta-paper">
    <input type="radio" {...props} />
  </div>
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'yobta-radio'
}

export const Secondary = Checkbox.bind({})
Secondary.args = { className: 'yobta-radio yobta-ink-secondary' }
