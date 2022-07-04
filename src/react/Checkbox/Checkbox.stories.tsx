import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Checkbox'
}

const Checkbox: ComponentStory<'input'> = props => (
  <div className="yobta-paper">
    <input type="checkbox" {...props} />
  </div>
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'yobta-checkbox'
}

export const Secondary = Checkbox.bind({})
Secondary.args = { className: 'yobta-checkbox yobta-ink-secondary' }
