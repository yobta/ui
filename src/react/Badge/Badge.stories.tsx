import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'CSS/Badge'
}

const Template: ComponentStory<'span'> = ({ className, ...props }) => (
  <span {...props} className={clsx('yobta-badge bg-slate-300', className)}>
    123K
  </span>
)

export const Primary = Template.bind({})
Primary.args = { className: 'yobta-bg-primary text-ink' }
