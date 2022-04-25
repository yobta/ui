import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Divider',
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'hr'> = (props) => <hr {...props} />

export const Simple = Template.bind({})
Simple.args = {
  className: 'ui-ink',
}

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'border-dotted border-t-8 ui-ink-primary opacity-100',
}
