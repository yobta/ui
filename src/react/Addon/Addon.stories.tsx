import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Addon'
}

const Template: ComponentStory<() => JSX.Element> = () => (
  <div className="yobta-addon">A</div>
)

export const Primary = Template.bind({})
Primary.args = {}
