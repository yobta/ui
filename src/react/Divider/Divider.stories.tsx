import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Divider'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'hr'> = props => <hr {...props} />

export const Simple = Template.bind({})
Simple.args = {
  className: 'yobta-ink'
}

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'border-dotted border-t-8 yobta-ink-primary opacity-100'
}
